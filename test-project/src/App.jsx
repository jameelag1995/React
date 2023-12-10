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
import VideoPlayer from "./components/PlayPauseVideo/VideoPlayer";
import ImageToggle from "./components/ImageToggle/ImageToggle";
import originalImg from "/firstimage.jpg";
import originalImgbw from "/firstimagebw.jpg";
import secondOriginalImg from "/secondimage.jpg";
import secondOriginalImgbw from "/secondimagebw.jpg";
import { Avatar } from "./components/Avatar/Avatar";
function App() {
    // const [count, setCount] = useState(0);
    // const [student, setStudent] = useState({ firstname: "", lastname: "" });

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
            {/* Ex 9.1 */}
            {/* <DataMassaging /> */}
            {/* Ex 10.1 */}
            {/* <VideoPlayer/> */}
            {/* Ex 10.2 */}
            {/* <ImageToggle bwImg={originalImgbw} orgImg={originalImg} />
            <ImageToggle
                bwImg={secondOriginalImgbw}
                orgImg={secondOriginalImg}
            /> */}
            <Avatar />
            
        </>
    );
}

export default App;
