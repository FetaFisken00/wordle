import React from "react";
import "./Wordle.css";



interface LETTERLIST_INTERFACE {
    letterList: any[];
}

export default function wordle({ letterList }: LETTERLIST_INTERFACE) {
    return (
        <div className="guess-grid">
            {letterList!.map((tile) => (
                <div className="tile" key={tile.key} data-state={tile.state}>
                    {tile.char}
                </div>
            ))}
        </div>
    );
}
