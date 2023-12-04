import { useEffect, useState } from "react";
import "./BoxAnimation.css";

export default function BoxAnimation() {
    const [boxNum, setBoxNum] = useState(0);
    useEffect(() => {
        console.log("inside useeffect");
        const intervalid = setInterval(() => {
            if (boxNum < 2) {
                setBoxNum((boxNum) => boxNum + 1);
            }
        }, 5000);
        return () => {
            clearInterval(intervalid);
        };
    }, [boxNum]);
    return (
        <div className="BoxAnimation">
            {/* <div className="box"></div> */}
            {boxNum === 0 ? <div className="box"></div> : ""}
            {boxNum === 1 ? <div className="box"></div> : ""}
            {boxNum === 2 ? <div className="box"></div> : ""}
        </div>
    );
}
