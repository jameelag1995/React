import React from "react";
import { useTheme } from "../../../context/ThemeContext/ThemeContex";

export default function Header() {
    const { handleThemeSwitch, theme } = useTheme();
    return (
        <div className={theme}>
            <button onClick={handleThemeSwitch}>
                {theme === "light" ? "dark" : "light "}
            </button>
            <button>Home</button>
            <button>About</button>
        </div>
    );
}
