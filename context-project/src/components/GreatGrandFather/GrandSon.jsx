import React from "react";
import { useGift } from "../context/GiftContext/GiftContext";

export default function GrandSon() {
    const gifts = useGift();

    return (
        <div>
            {gifts.map((gift, index) => {
                return <h1 key={index}>{gift}</h1>;
            })}
        </div>
    );
}
