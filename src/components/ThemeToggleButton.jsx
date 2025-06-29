
import { useTheme } from "../context/ThemeContext";

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="mb-4 px-4 py-2 rounded bg-gray-700 text-white hover:bg-gray-600"
      onClick={toggleTheme}
    >
      Switch to {theme === "dark" ? "Light" : "Dark"} Mode
    </button>
  );
}

export default ThemeToggleButton;
