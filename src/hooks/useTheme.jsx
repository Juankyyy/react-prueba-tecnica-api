import { useEffect, useState } from "react";

export const useTheme = () => {
    const [theme, setTheme] = useState(localStorage.theme);

    if (!theme) {
        setTheme(
            window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light"
        );
    }

    const toggleTheme = () => {
        const newTheme = theme == "dark" ? "light" : "dark";
        setTheme(newTheme);
    };

    useEffect(() => {
        const root = document.documentElement;
        root.setAttribute("theme", theme);

        localStorage.setItem("theme", theme);
    }, [theme]);

    return {
        theme,
        toggleTheme,
    };
};
