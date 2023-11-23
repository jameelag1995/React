import React from "react";
import "./tale.css";
import Child from "./Child";

export default function Mother() {
    const kids = [
        { name: "Ori", color: "red" },
        { name: "Ron", color: "blue" },
        { name: "Sigalit", color: "green" },
        { name: "Ruti", color: "yellow" },
        { name: "Alon", color: "purple" },
    ];
    return (
        <div>
            <h1>A Tale of Five Balloons</h1>
            <div className="balloons-container">
                {kids.map((kid) => {
                    return <Child name={kid.name} color={kid.color} />;
                })}
            </div>
        </div>
    );
}
