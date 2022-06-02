import Search from '../icons/search.js';
import arrowup from '../image/arrowup.png';
import loader from '../icons/loader.svg'

export default function Welcome({loading}) {
    return (
        <div className="h-full sm:h-3/4 w-full md:w-3/4 max-w-3xl bg-black bg-opacity-10 rounded-xl z-10 flex items-center">
            <div className="h-full w-3/4 flex flex-col justify-center items-center text-center text-white text-xl">
                Welcome to<br />
                AllWeather App<br />
                To start, Write the name of the place in search box<br />
                <span>and press the <button type="submit" className="h-6 w-8 bg-white bg-opacity-30 px-2 py-1 rounded" id="submit" disabled><Search color="white" /></button> button.</span>
            </div>
            <div className="h-[90%] w-0.5 bg-white bg-opacity-50 inline-block"></div>
            <div className="h-full w-[calc(25%_-_0.125rem)] flex justify-center align-middle">
                <img src={loading ? loader : arrowup} className="h-1/2 my-auto" alt="ArrowUp" />
            </div>
        </div>
    );
}