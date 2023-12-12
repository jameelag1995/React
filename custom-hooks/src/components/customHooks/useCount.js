import { useState } from "react";
export function useCount(initialCount = 0) {
    const [count, setCount] = useState(initialCount);
    const addOne = () => {
        setCount((prevCount) => prevCount + 1);
    };
    const removeOne = () => {
        setCount((prevCount) => prevCount - 1);
    };
    const double = () => {
        setCount((prevCount) => prevCount * 2);
    };
    const divide = () => {
        setCount((prevCount) => prevCount / 2);
    };

    return [count, addOne, removeOne, double, divide];
}
