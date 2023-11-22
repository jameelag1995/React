import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const data = ["hello", "world"];
    const number1 = 5;
    const number2 = 6;
    const string = "I love React!"
    return <>
    <h1>Q1: {data[0][0].toUpperCase()+data[0].slice(1)} {data[1][0].toUpperCase()+data[1].slice(1)}</h1>
    <h2>Q2: {number1+number2}</h2>
    <h3>The string's length is {string.length}</h3>


    </>;
}

export default App;
