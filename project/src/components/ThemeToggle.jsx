import { useAppContext } from "../hooks/useAppContext";
import { MoonFillIcon, MoonIcon } from "../script/icons";

function ThemeToggle() {
  const { isDarkMode, setDarkMode } = useAppContext();

  return (
    <button
      className={`theme-toggle ${isDarkMode ? "theme-toggle--dark" : ""}`}
      onClick={() => setDarkMode((prev) => !prev)}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      {isDarkMode ? MoonFillIcon : MoonIcon}
    </button>
  );
}

export default ThemeToggle;
