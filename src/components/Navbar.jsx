import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import "./Navbar.css";

export const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav>
            <button className="btn" onClick={toggleTheme}>
                {theme == "dark" ? <Sun size={50} color="#F9F7F7" /> : <Moon size={50} color="#112D4E" />}
            </button>
        </nav>
    );
};
