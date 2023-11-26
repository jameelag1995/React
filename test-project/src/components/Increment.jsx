import React from "react";
import { useState } from "react";
export default function Increment() {
    const [counter, setCounter] = useState(0);
    function incrementCounter() {
        setCounter((counter) => counter + 1);
    }
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={incrementCounter}>increment</button>
        </div>
    );
}
