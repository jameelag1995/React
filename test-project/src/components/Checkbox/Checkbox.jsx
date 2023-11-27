import React from "react";
import { useState } from "react";

export default function Checkbox({ children, startState, ...props }) {
    const [boxCheck, setBoxCheck] = useState(startState);
    return (
        <div>
            <p>
                <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={boxCheck}
                    onChange={() => setBoxCheck(boxCheck => !boxCheck)}
                    {...props}
                />{" "}
                {children}
            </p>
        </div>
    );
}
