import "./Card.css";
import React from "react";

export default function ({title,imgsrc,desc,link1,linkdesc1,link2,linkdesc2}) {
    return (
        <div className="card">
            <img src={imgsrc} alt={title} />
            <h3>{title}</h3>
            <p>{desc}</p>
            <a href={link1}>{linkdesc1}</a>
            <a href={link2}>{linkdesc2}</a>
        </div>
    );
}
