import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

/**
 * ThemeToggle Component
 * Provides a button to toggle between light and dark modes
 */
export default function ThemeToggle() {
  const { isDark, toggleMode } = useTheme();

  return (
    <button
      onClick={toggleMode}
      className="rounded-lg bg-card p-2.5 text-foreground shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg border border-border"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-primary" />
      ) : (
        <Moon className="h-5 w-5 text-primary" />
      )}
    </button>
  );
}
