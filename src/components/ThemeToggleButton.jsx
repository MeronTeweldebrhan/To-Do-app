
import { useTheme } from "../context/ThemeContext";

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="flex justify-end "
      onClick={toggleTheme}
    >
      {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}

export default ThemeToggleButton;
