import React from "react";
import Balloon from "./Balloon";
import "./tale.css";
export default function Child({ name, color }) {
    return (
        <div className="child">
            <h3>{name}</h3>
            <Balloon color={color} />
        </div>
    );
}
