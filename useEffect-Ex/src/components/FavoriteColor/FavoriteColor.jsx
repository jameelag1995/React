import { useEffect, useState } from "react";
import "./FavoriteColor.css";

export default function FavoriteColor() {
    const [color, setColor] = useState("blue");
    useEffect(() => {
        setTimeout(() => {
            setColor("red");
            console.log("inside setTimeout");
        }, 1000);
    },[]);

    return (
        <div className="FavoriteColor">
            <h1>{`My favorite color is ${color}`}</h1>
        </div>
    );
}
