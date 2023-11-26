import React from "react";
export default function CustomButton({ color, ...props }) {
    return (
        <button className={"color-" + color} {...props}>
            {color}
        </button>
    );
}
