import { useTheme } from "../hooks/useTheme";
import "./Navbar.css";

export const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav>
            <button onClick={toggleTheme}>
                {theme == "dark" ? "Modo Claro ☀️" : "Modo Oscuro 🌚"}
            </button>
        </nav>
    );
};
