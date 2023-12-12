import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import WhatIsTime from "./components/WhatIsTime";
import Box from "./components/Box";
import CountriesOfTheWorld from "./components/CountriesOfTheWorld";
import ToggleApp from "./components/CancelRequest";
function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            {/* ex 20.1 */}
            {/* <Counter /> */}
            {/* ex 20.2 */}
            {/* <Todo/> */}
            {/* ex 20.3 */}
            {/* <WhatIsTime/> */}
            {/* ex 21.1 */}
            {/* <Box/> */}
            {/* ex 21.2 */}
            {/* <CountriesOfTheWorld/> */}
            {/* ex 21.3 */}
            <ToggleApp />
        </>
    );
}

export default App;
