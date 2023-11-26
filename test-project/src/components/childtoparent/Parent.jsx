import React from "react";
import CustomButton from "./CustomButton";
import { useState } from "react";
export default function Parent() {
    const [currColor, setCurrColor] = useState("");
    const colors = ["blue", "red", "yellow"];
    return (
        <div>
            {colors.map((color, index) => (
                <CustomButton
                    color={color}
                    key={index}
                    onClick={() => setCurrColor(color)}
                />
            ))}
            <h1>The color selected is: {currColor}</h1>
        </div>
    );
}
