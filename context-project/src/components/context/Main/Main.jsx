import React from "react";
import { useTheme } from "../../../context/ThemeContext/ThemeContex";

export default function Main({ pageTitle }) {
    const { theme } = useTheme();
    return (
        <div className={theme}>
            <h1>{pageTitle}</h1>
        </div>
    );
}
