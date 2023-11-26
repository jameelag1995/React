import React from "react";
import { useState } from "react";

export default function Checkbox() {
    const [boxCheck, setBoxCheck] = useState(true);
    return (
        <div>
            <p>
                <input
                    type="checkbox"
                    name=""
                    id=""
                    onClick={()=>setBoxCheck(!boxCheck)}
                />{" "}
                I read the term of the app
            </p>
            <p>
                <input
                    type="checkbox"
                    name=""
                    id=""
                    onClick={()=>setBoxCheck(!boxCheck)}
                />{" "}
                I accept the term of the app
            </p>
            <p>
                <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={boxCheck}
                    onClick={()=>setBoxCheck(!boxCheck)}
                />{" "}
                I want to get the weekly news letter
            </p>
            <p>
                <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={boxCheck}
                    onClick={()=>setBoxCheck(!boxCheck)}
                />{" "}
                I want to get sales and offers
            </p>
        </div>
    );
}
