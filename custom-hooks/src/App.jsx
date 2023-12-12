import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import { Routes, Route } from "react-router-dom";
import Calculator from "./components/Calculator/Calculator";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Counter" element={<Counter />} />
                <Route path="/Calculator" element={<Calculator />} />
            </Routes>
        </>
    );
}

export default App;
