import React from "react";
import { useCount } from "../customHooks/useCount";
export default function Calculator() {
    const [count, addOne, removeOne, double, divide] = useCount();
    return (
        <>
            <h1>Calculator</h1>
            <h1>{count}</h1>
            <div className="buttons-container">
                <button onClick={addOne}>Plus One</button>
                <button onClick={removeOne}>Minus One</button>
                <button onClick={double}>Times Two</button>
                <button onClick={divide}>Divide By Two</button>
            </div>
        </>
    );
}
