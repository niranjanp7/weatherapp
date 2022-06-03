import React from "react";

import Welcome from "./welcome.js";
import WeatherIcon from "./weathericon.js";
import Clock from "./clock/clock.js";

import "./result.css";

import temperature_icon from "../icons/temperature.svg";
import humidity_icon from "../icons/humidity.svg";
import pressure_icon from "../icons/pressure.svg";
import fan_icon from "../icons/fan.svg";
import eye_icon from "../icons/eye.svg";
import waves_arrow_up_icon from "../icons/waves-arrow-up.svg";
import navigation_icon from "../icons/navigation.svg";
import sunrise_icon from "../icons/sunrise.svg";
import sunset_icon from "../icons/sunset.svg";
import wifi_off from "../icons/wifi-off.svg";
import loader from "../icons/loader.svg";

const TempKtoC = (K) => {
    return (K - 273.15).toFixed(2);
};

const DegToCard = (D) => {
    const dirs = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return dirs[parseInt((D + 11.25) / 22.5) % 16];
};

export default function Generate(r) {
    if ((Object.keys(r.data).length === 0) | (r.search === "")) {
        return <Welcome loading={r.loading} />;
    }
    if (r.data?.cod === "404")
        return (
            <div className="h-full sm:h-3/4 w-full md:w-3/4 max-w-3xl bg-black bg-opacity-10 rounded-xl z-10 px-4 flex justify-center items-center text-3xl text-white capitalize">
                {r.data.message}
            </div>
        );
    if (r.data.cod === 200) {
        const basic = {
            name: r.data.name,
            country: r.data.sys.country,
            coord: [r.data.coord.lat, r.data.coord.lon],
            humidity: r.data.main.humidity,
            pressure: r.data.main.pressure,
            visibility: (r.data.visibility / 1000).toFixed(2),
            sea_level: r.data.main.sea_level,
        };
        const temperature = {
            current: TempKtoC(r.data.main.temp),
            feels_like: TempKtoC(r.data.main.feels_like),
            min: TempKtoC(r.data.main.temp_min),
            max: TempKtoC(r.data.main.temp_max),
        };
        const wind = {
            speed: r.data.wind.speed,
            deg: r.data.wind.deg,
        };
        const timezone = {
            timezone: new Date(r.data.timezone * 1000),
            offset: new Date().getTimezoneOffset() * 60000,
        };
        const utc = (timezone.timezone.getUTCHours() + timezone.timezone.getUTCMinutes() / 60) * 3600000;
        const time = {
            sunrise: new Date(r.data.sys.sunrise * 1000 + timezone.offset + utc),
            sunset: new Date(r.data.sys.sunset * 1000 + timezone.offset + utc),
        };
        const timeformat = {
            sunrise:
                (time.sunrise.getHours() % 12 ? time.sunrise.getHours() % 12 : "12") +
                ":" +
                time.sunrise.getMinutes() +
                ":" +
                time.sunrise.getSeconds() +
                (time.sunrise.getHours() < 12 ? " AM" : " PM"),
            sunset:
                (time.sunset.getHours() % 12 ? time.sunset.getHours() % 12 : "12") +
                ":" +
                time.sunset.getMinutes() +
                ":" +
                time.sunset.getSeconds() +
                (time.sunset.getHours() < 12 ? " AM" : " PM"),
            timezone:
                "GMT" +
                (timezone.timezone.getUTCHours() <= 12 ? "+" : "-") +
                (timezone.timezone.getUTCHours() % 12) +
                ":" +
                timezone.timezone.getUTCMinutes(),
        };
        return (
            <div className="h-full sm:h-3/4 md:w-3/4 max-w-3xl rounded-xl z-10 flex flex-wrap text-white text-lg shadow-inset">
                <div className="h-[calc(100%_/_6_-_4px)] w-full bg-black bg-opacity-10 text-2xl flex items-center px-4 mb-[4px] rounded-tl-[inherit] rounded-tr-[inherit]">
                    {basic.name}, {basic.country}
                    <span className="ml-2 text-lg">
                        (&nbsp;{basic.coord[0]}N,&nbsp;{basic.coord[1]}E&nbsp;)
                    </span>
                    <img src={loader} className={"ml-2 " + (r.loading ? "initial" : "hidden")} alt="loader" />
                    <span className="ml-auto text-cyan-200">
                        {r.countDown}
                        <img
                            src={wifi_off}
                            className={"ml-2 " + (r.status ? "hidden" : "inline-block")}
                            alt="timezone icon"
                        />
                    </span>
                </div>
                <div className="h-5/6 w-[calc(100%_/_3_-_2px)] bg-black bg-opacity-10 rounded-bl-[inherit] p-1">
                    <div className="h-2/5 w-full relative">
                        <WeatherIcon icon={r.data.weather[0].icon} main={r.data.weather[0].main} />
                        <span className="absolute bottom-1 right-1 capitalize">{r.data.weather[0].description}</span>
                    </div>
                    <div className="h-2/5 w-full flex">
                        <div className="h-full w-1/6 inline-block">
                            <img src={temperature_icon} className="w-full h-full" alt="temperature icon" />
                        </div>
                        <div className="h-full w-5/6 inline-block">
                            <div className="h-1/4 w-full">Temperature:</div>
                            <div className="h-1/4 w-full text-center">
                                {temperature.current}&deg;C&nbsp;/&nbsp;{temperature.feels_like}&deg;C
                            </div>
                            <div className="h-2/4 w-full">
                                <div className="h-1/2 flex">
                                    <div className="mr-auto">Min:</div>
                                    <div>{temperature.min}&deg;C</div>
                                </div>
                                <div className="h-1/2 flex">
                                    <div className="mr-auto">Max:</div>
                                    <div>{temperature.max}&deg;C</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-1/5 w-full flex items-center">
                        <div className="w-1/6">
                            <img src={humidity_icon} className="w-full h-full" alt="humidity icon" />
                        </div>
                        <div className="w-5/6 flex">
                            <div className="mr-auto">Humidity:</div>
                            <div>{basic.humidity}&nbsp;%</div>
                        </div>
                    </div>
                </div>
                <div className="h-5/6 w-[calc(100%_/_3_-_4px)] bg-black bg-opacity-10 mx-[4px] p-1">
                    <div className="h-1/2 w-full flex">
                        <div className="h-full w-1/2">
                            <img src={fan_icon} className="w-full h-full animate-spin" alt="fan icon" />
                        </div>
                        <div className="h-full w-1/2">
                            <div className="h-1/3 w-full flex justify-center items-center text-xl">
                                {wind.speed}&nbsp;m/s
                            </div>
                            <div className="h-1/3 w-full flex justify-center items-center">
                                <img
                                    src={navigation_icon}
                                    className={"mr-1 rotate-custorm-" + wind.deg}
                                    alt="eye icon"
                                />
                                {wind.deg}&deg;
                            </div>
                            <div className="h-1/3 w-full flex justify-center items-center">{DegToCard(wind.deg)}</div>
                        </div>
                    </div>
                    <div className="h-1/6 w-full flex items-center">
                        <div className="h-3/5 w-1/6">
                            <img src={eye_icon} className="w-full h-full" alt="eye icon" />
                        </div>
                        <div className="w-5/6 flex">
                            <div className="mr-auto">Visibility:</div>
                            <div>{basic.visibility}&nbsp;Km</div>
                        </div>
                    </div>
                    <div className="h-1/6 w-full flex items-center">
                        <div className="h-3/5 w-1/6">
                            <img src={waves_arrow_up_icon} className="w-full h-full" alt="wave arrow up icon" />
                        </div>
                        <div className="w-5/6 flex">
                            <div className="mr-auto">Sea Level:</div>
                            <div>{basic.sea_level}&nbsp;m</div>
                        </div>
                    </div>
                    <div className="h-1/6 w-full flex items-center">
                        <div className="h-3/5 w-1/6">
                            <img src={pressure_icon} className="w-full h-full" alt="pressure icon" />
                        </div>
                        <div className="w-5/6 flex">
                            <div className="mr-auto">Pressure:</div>
                            <div>{basic.pressure}&nbsp;Bar</div>
                        </div>
                    </div>
                </div>
                <div className="h-5/6 w-[calc(100%_/_3_-_2px)] bg-black bg-opacity-10 rounded-br-[inherit] p-1">
                    <div className="h-1/5 w-full flex items-center">
                        <div className="h-full w-1/2">
                            <img src={sunrise_icon} className="h-full w-full" alt="sunrise icon" />
                        </div>
                        <div className="w-1/2 flex flex-col">
                            <div>Sunrise</div>
                            <div>{timeformat.sunrise}</div>
                        </div>
                    </div>
                    <div className="h-1/5 w-full flex items-center">
                        <div className="h-full w-1/2">
                            <img src={sunset_icon} className="h-full w-full" alt="sunset icon" />
                        </div>
                        <div className="w-1/2 flex flex-col">
                            <div>Sunset</div>
                            <div>{timeformat.sunset}</div>
                        </div>
                    </div>
                    <div className="h-3/5 w-full">
                        <div className="h-full w-full flex justify-center">
                            <Clock gmt={timeformat.timezone} utc={utc} />
                        </div>
                    </div>
                </div>
            </div>
        );
    } else
        return (
            <div className="h-full sm:h-3/4 w-full md:w-3/4 max-w-3xl bg-black bg-opacity-10 rounded-xl z-10 px-4 flex justify-center items-center text-3xl text-white text-center">
                {r.data.message}
            </div>
        );
}
