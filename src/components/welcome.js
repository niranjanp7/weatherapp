import Search from '../icons/search.js';
import arrowup from '../image/arrowup.png';

export default function Welcome() {
    return (
        <header className="relative flex justify-center items-center h-60v bg-gradient-to-b from-sky-300 to-sky-700">
            <div className="h-3/4 w-3/4 bg-white bg-opacity-20 rounded-xl z-10 flex items-center">
                <div className="h-full w-3/4 flex flex-col justify-center items-center text-center text-white text-xl">
                    Welcome to<br />
                    AllWeather App<br />
                    To start, Write the name of the place in search box<br />
                    <span>and press the <button type="submit" className="h-6 w-8 bg-white bg-opacity-30 px-2 py-1 rounded" id="submit" disabled><Search color="white" /></button> button.</span>
                </div>
                <div className="h-[90%] w-0.5 bg-white bg-opacity-50 inline-block"></div>
                <div className="h-full w-[calc(25%_-_0.125rem)] flex justify-center">
                    <img src={arrowup} className="h-1/2 mt-4" alt="ArrowUp" />
                </div>
            </div>
        </header>
    );
}