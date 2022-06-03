import React from "react";

/**
 * The JSON File contains:
 *      74861 City-Contry pairs
 *      152 Countries
 *
 * Data from sevelar cities and countries are not aviailable on OpenWeatherMap (API Used in this project)
 */
import countries from "./countries.min.json";

import "./suggestion.css";

function getMatches(keyword, selectFun) {
    let MAX_SUGGESTIONS = 50;

    let suggestions = new Set();

    for (let i in countries) {
        let [country, code] = [...i.split("_")];
        if (country.toLowerCase().includes(keyword.toLowerCase())) {
            suggestions.add(
                <button
                    type="button"
                    className="block w-full text-left hover:bg-sky-900 p-1"
                    key={i}
                    onClick={() => {
                        selectFun(country, code);
                    }}
                >
                    {country}
                </button>
            );
        }
        for (let j of countries[i]) {
            if (j.toLowerCase().includes(keyword.toLowerCase())) {
                suggestions.add(
                    <button
                        type="button"
                        className="block w-full text-left hover:bg-sky-900 p-1"
                        key={i + "_" + j}
                        onClick={() => {
                            selectFun(j, code);
                        }}
                    >
                        {j + ", " + country}
                    </button>
                );
            }
            if (suggestions.size >= MAX_SUGGESTIONS) {
                return suggestions;
            }
        }
    }

    return suggestions;
}

export function Suggestion({ keyword, selectFun }) {
    keyword = keyword.trim();
    if (keyword === "") {
        return <></>;
    }
    let suggestions = getMatches(keyword, selectFun);

    if (suggestions.size === 0) {
        return <></>;
    }

    return (
        <div
            className="absolute max-h-[80vh] w-full min-w-max z-20 top-full sm:right-0 px-1 bg-sky-800 rounded divide-y overflow-y-auto scroll-bar"
            id="suggestionBox"
        >
            {suggestions}
        </div>
    );
}
