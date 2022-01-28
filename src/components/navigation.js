import "./navigation.css";
import logo from '../logo.svg';
import Search from '../icons/search.js';
import Cloud from '../icons/cloud.js';

const fill = (
    <defs>
        <linearGradient id="fill0" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor:"#aaf"}} />
            <stop offset="80%" style={{stopColor:"#369cd4"}} />
            <stop offset="100%" style={{stopColor:"#258bc3"}} />
        </linearGradient>
        <linearGradient id="fill1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor:"#fffa"}} />
            <stop offset="100%" style={{stopColor:"#fffa"}} />
        </linearGradient>
        <linearGradient id="fill2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor:"#39fa"}} />
            <stop offset="100%" style={{stopColor:"#39dd"}} />
        </linearGradient>
    </defs>
);

const filter = (
    <defs>
        <filter id="filter0" x="0" y="0">
            <feGaussianBlur stdDeviation="0.5" />
        </filter>
        <filter id="filter1" x="0" y="0">
            <feGaussianBlur stdDeviation="0.8" />
        </filter>
    </defs>
);

function NavAnimation(){
    return (
        <div className="naveback absolute w-full h-full -z-10 overflow-hidden bg-gradient-to-b from-sky-700 to-sky-300">
            <svg width="0" height="0">
                {fill}
                {filter}
            </svg>
            <div className="absolute cloud1">
                <Cloud fillId="1" />
            </div>
            <div className="absolute cloud2">
                <Cloud fillId="0" />
            </div>
            <div className="absolute cloud3">
                <Cloud fillId="2" />
            </div>
            <div className="absolute cloud4">
                <Cloud fillId="1" />
            </div>
        </div>
    );
}

export default function Navigation() {
    return (
    <nav className=" h-20v relative">
        <NavAnimation />
        <div className="flex h-full min-w-max items-center px-4">
            <img src={logo} className="inline-block- h-2/4 hidden" alt="logo" />
            <span className="font-serif text-white">AllWeather</span>
            <form className="h-2/4 ml-auto flex items-center text-white min-w-max">
                <input type="search" className="input-nobg h-2/4 ml-4 px-1 rounded backdrop-blur" id="search" placeholder="Search..." />
                <button type="submit" className="h-2/4 bg-white bg-opacity-30 ml-1 px-2 py-1 rounded hover:bg-opacity-50 backdrop-blur" id="submit">
                    <Search color="white" />
                </button>
            </form>
        </div>
    </nav>
    );
}