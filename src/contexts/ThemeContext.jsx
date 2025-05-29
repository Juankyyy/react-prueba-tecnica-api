/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import { useTheme } from "../hooks/useTheme";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const { theme } = useTheme();

    return <ThemeContext value={{ theme }}>{children}</ThemeContext>;
};
