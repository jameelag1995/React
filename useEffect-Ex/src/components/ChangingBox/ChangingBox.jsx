import { useEffect, useState } from "react";
import "./ChangingBox.css";

export default function ChangingBox() {
    const colorArr = ["red", "green", "blue", "purple", "yellow"];
    let count = 0;
    const [color, setColor] = useState(colorArr[count]);
    useEffect(() => {
        const interval = setInterval(() => {
            if (count < colorArr.length-1) {
                count++;
                setColor(colorArr[count]);
            }else{
                setColor('circle')
            }
        }, 2000);
        console.log(count);
        return () => {
            clearInterval(interval);
        };
    }, [count]);

    return (
        <div className="ChangingBox">
            <div className={`new-box ${color}`}></div>
        </div>
    );
}
