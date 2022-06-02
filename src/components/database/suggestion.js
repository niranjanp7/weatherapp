import React from "react";
import countries from "./countries.min.json";

function getMatches(keyword, selectFun) {
    let MAX_SUGGESTIONS = 50;

    let suggestions = new Set();

    for (let i in countries) {
        if (i.toLowerCase().includes(keyword.toLowerCase())) {
            suggestions.add(
                <button
                    type="button"
                    className="block w-full text-left hover:bg-sky-900 p-1"
                    key={i}
                    onClick={() => {
                        selectFun(i, i);
                    }}
                >
                    {i}
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
                            selectFun(j, i);
                        }}
                    >
                        {j + ", " + i}
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
    if (keyword === "") {
        return <></>;
    }
    let suggestions = getMatches(keyword, selectFun);

    if (suggestions.size === 0) {
        return <></>;
    }

    return (
        <div
            className="absolute max-h-[80vh] w-full min-w-max z-20 top-full sm:right-0 px-1 bg-sky-800 rounded divide-y overflow-y-auto"
            id="suggestionBox"
        >
            {suggestions}
        </div>
    );
}
