import { useState } from "react";
import "./App.css";
import { GiftContextProvider } from "./components/context/GiftContext/GiftContext";
import GrandFather from "./components/GreatGrandFather/GrandFather";
import {
    ThemeContextProvider,
    useTheme,
} from "./context/ThemeContext/ThemeContex";
import Header from "./components/context/Header/Header";
import Main from "./components/context/Main/Main";

function App() {
    const [count, setCount] = useState(0);
    const { theme, handleThemeSwitch } = useTheme();
    console.log(theme);
    console.log(handleThemeSwitch);
    return (
        <>
            {/* ex 19.1 */}
            {/* <GiftContextProvider>
            <GrandFather/>
          </GiftContextProvider> */}
            
                <div className={`App ${theme}`}>
                    <Header />
                    <Main pageTitle="Home" />
                </div>
            
        </>
    );
}

export default App;
