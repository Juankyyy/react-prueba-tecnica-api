import { useTheme } from "../hooks/useTheme";
import "./Navbar.css";

export const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav>
            <button className="btn" onClick={toggleTheme}>
                {theme == "dark" ? "☀️" : "🌚"}
            </button>
        </nav>
    );
};
