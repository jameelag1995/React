import { useState } from "react";
import "./App.css";
import Increment from "./components/increment";
import HideAndSeek from "./components/HideAndSeek";
import IncrementAndDecrement from "./components/IncrementAndDecrement";
import Parent from "./components/childtoparent/Parent";

import Agreement from "./components/Checkbox/Agreement";
import Form from "./components/Form/Form";
import Main from "./components/Form/Main";
function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            {/* Ex 6.1 */}
            {/* <Increment/> */}
            {/* Ex 6.2 */}
            {/* <HideAndSeek /> */}
            {/* Ex 6.3 */}
            {/* <IncrementAndDecrement /> */}
            {/* Ex 7.1 */}
            {/* <Parent /> */}
            {/* Ex 7.2 */}
            {/* <Agreement /> */}
            {/* Ex 7.3 */}
            <Main/>
        </>
    );
}

export default App;
