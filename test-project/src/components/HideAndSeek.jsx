import React from "react";
import { useState } from "react";
export default function HideAndSeek() {
    const [visible, setVisible] = useState(true);
    return (
        <div>
            <button onClick={() => setVisible((visible) => !visible)}>
                show/hide
            </button>
            {visible ? <div className="box"></div> : null}
        </div>
    );
}
