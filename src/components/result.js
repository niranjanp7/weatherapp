import Cloud from '../icons/cloud.js';

function TempKtoC(F) {
    return (F-273.15).toFixed(2);
}

export default function Generate(r) {
    if (Object.keys(r.data).length === 1)
        return (
            <div className="h-3/4 w-3/4 max-w-3xl bg-white bg-opacity-20 rounded-xl z-10 px-4 flex justify-center items-center text-3xl text-white">
                Welcome
            </div>
        )
    if (r.data?.cod === "404")
        return (
            <div className="h-3/4 w-3/4 max-w-3xl bg-white bg-opacity-20 rounded-xl z-10 px-4 flex justify-center items-center text-3xl text-white">
                {r.message}
            </div>
        );
    if (r.data.cod == "200")
        return (
            <div className="h-3/4 w-3/4 max-w-3xl rounded-xl z-10 flex flex-wrap text-white">
            <div className="h-[calc(100%_/_6_-_4px)] w-full bg-black bg-opacity-10 text-2xl flex items-center px-4 mb-[4px] rounded-tl-[inherit] rounded-tr-[inherit]">
                {r.data.name}, {r.data.sys.country}
                <span className="ml-2 text-lg">(&nbsp;{r.data.coord.lon}N,&nbsp;{r.data.coord.lat}E&nbsp;)</span>
            </div>
                <div className="h-5/6 w-[calc(100%_/_3_-_2px)] bg-black bg-opacity-10 rounded-bl-[inherit] p-1 text-lg">
                    <div className="h-2/5 w-full relative">
                        <Cloud />
                        <span className="absolute bottom-1 right-1 capitalize backdrop-blur">{r.data.weather[0].description}</span>
                    </div>
                    <div className="h-2/5 w-full flex">
                        <div className="h-full w-1/6 inline-block"></div>
                        <div className="h-full w-5/6 inline-block">
                            <div className="h-1/4 w-full">Temperature:</div>
                            <div className="h-1/4 w-full text-center">{TempKtoC(r.data.main.temp)}&deg;C&nbsp;/&nbsp;{TempKtoC(r.data.main.feels_like)}&deg;C</div>
                            <div className="h-2/4 w-full">
                                <div className="h-1/2 flex">
                                    <div className="mr-auto">Min:</div>
                                    <div>{TempKtoC(r.data.main.temp_min)}&deg;C</div>
                                </div>
                                <div className="h-1/2 flex">
                                    <div className="mr-auto">Max:</div>
                                    <div>{TempKtoC(r.data.main.temp_max)}&deg;C</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-1/5 w-full flex">
                        <div className="h-full w-1/6 inline-block"></div>
                        <div className="h-full w-5/6 inline-block">
                            <div className="h-1/2 flex">
                                <div className="mr-auto">Humidity:</div>
                                <div>{r.data.main.humidity}&nbsp;%</div>
                            </div>
                            <div className="h-1/2 flex">
                                <div className="mr-auto">Pressure:</div>
                                <div>{r.data.main.pressure}&nbsp;Bar</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-5/6 w-[calc(100%_/_3_-_4px)] bg-black bg-opacity-10 flex mx-[4px] p-1">
                    {r.data.coord.lon}<br />
                    {r.data.coord.lat}
                </div>
                <div className="h-5/6 w-[calc(100%_/_3_-_2px)] bg-black bg-opacity-10 flex rounded-br-[inherit] p-1">
                    {r.data.coord.lon}<br />
                    {r.data.cod}
                </div>
            </div>
        );
}