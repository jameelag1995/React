import React from "react";
import { useState, useRef } from "react";

export default function ImageToggle({ bwImg, orgImg }) {
    const imageRef = useRef(null);

    const handleMouseOver = () => {
        imageRef.current.src = orgImg;
    };
    const handleMouseOut = () => {
        imageRef.current.src = bwImg;
    };

    return (
        <img
            src={bwImg}
            ref={imageRef}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        />
    );
}
