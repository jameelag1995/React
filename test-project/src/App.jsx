import { useState } from "react";
import "./App.css";
import Increment from "./components/increment";
import HideAndSeek from "./components/HideAndSeek";
import IncrementAndDecrement from "./components/IncrementAndDecrement";
import Parent from "./components/childtoparent/Parent";
import DataMassaging from "./components/DataMassaging/DataMassaging";
import Agreement from "./components/Checkbox/Agreement";
import Form from "./components/Form/Form";
import Main from "./components/Form/Main";
function App() {
    const [count, setCount] = useState(0);
    const [student, setStudent] = useState({ firstname: "", lastname: "" });

    // function handleInput(e) {
    //     console.log(e);
    //     // const {name,value} = e.target;
    //     // const name = e.target.name;
    //     // const value = e.target.value;
    //     setStudent({ ...student, [e.target.name]: e.target.value });
    //     console.log(student);
    // }

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
            {/* <Main/> */}
            {/* <form action="">
                <input
                    type="text"
                    name="firstname"
                    onChange={handleInput}
                />
                <input
                    type="text"
                    name="lastname"
                    onChange={handleInput}
                />
            </form> */}
            <DataMassaging />
        </>
    );
}

export default App;
