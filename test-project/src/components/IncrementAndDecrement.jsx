import React from "react";
import { useState } from "react";
export default function IncrementAndDecrement() {
    const [counter, setCounter] = useState(0);
    let cssClass = "";
    if (counter > 0) {
        cssClass = "green";
    } else if (counter == 0) {
        cssClass = "black";
    } else {
        cssClass = "red";
    }

    return (
        <div>
            <h1 className={cssClass}>{counter}</h1>
            <button
                onClick={() => {
                    counter < 10 ? setCounter((counter) => counter + 1) : null;
                }}
            >
                increment
            </button>
            <button
                onClick={() => {
                    counter > -10 ? setCounter((counter) => counter - 1) : null;
                }}
            >
                decrement
            </button>
        </div>
    );
}
