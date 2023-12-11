import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import "./ThemeContext.css";

export const ThemeContext = createContext({
    theme: "light",
    handleThemeSwitch: () => {},
});

export function ThemeContextProvider({ children }) {
    const [showDarkTheme, setShowDarkTheme] = useState(false);
    const [theme, setTheme] = useState("light");
    const handleThemeSwitch = () => {
        console.log("switch clicked");
        setShowDarkTheme((prev) => !prev);
        setTheme(showDarkTheme ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{ theme, handleThemeSwitch }}>
            {children}
        </ThemeContext.Provider>
    );
}
export const useTheme = () => {
    return useContext(ThemeContext);
};
