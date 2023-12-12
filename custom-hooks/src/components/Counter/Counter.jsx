import React from "react";
import { useCount } from "../customHooks/useCount";

export default function Counter() {
    const [count,addOne,removeOne,double,divide] = useCount()
    return (
        <>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <div className="buttons-container">
                <button onClick={addOne}>Add One</button>
                <button onClick={removeOne}>Remove One</button>
                <button onClick={double}>Double</button>
                <button onClick={divide}>Divide</button>
            </div>

        </>
    );
}
