import { createContext, useContext, useState, useEffect } from "react";

/**
 * Theme interface
 * @typedef {Object} Theme
 * @property {"light" | "dark"} mode - Theme mode
 * @property {string} color - Primary color (hex format)
 */

/**
 * Default theme configuration
 */
const DEFAULT_THEME = {
  mode: "light",
  color: "#6366f1", // Indigo/Purple as default primary color
};

/**
 * Preset color options for quick selection
 */
export const THEME_COLORS = [
  { value: "#6366f1", label: "Indigo", name: "indigo" },
  { value: "#8b5cf6", label: "Violet", name: "violet" },
  { value: "#ec4899", label: "Pink", name: "pink" },
  { value: "#ef4444", label: "Red", name: "red" },
  { value: "#f59e0b", label: "Amber", name: "amber" },
  { value: "#10b981", label: "Emerald", name: "emerald" },
  { value: "#3b82f6", label: "Blue", name: "blue" },
  { value: "#06b6d4", label: "Cyan", name: "cyan" },
];

/**
 * Theme Context
 */
const ThemeContext = createContext(undefined);

/**
 * ThemeProvider Component
 * Manages theme state and applies changes to DOM
 */
export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(DEFAULT_THEME);

  /**
   * Load theme from localStorage on mount
   */
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      try {
        const parsed = JSON.parse(storedTheme);
        setThemeState(parsed);
      } catch (error) {
        console.error("Failed to parse stored theme:", error);
      }
    }
  }, []);

  /**
   * Apply theme to DOM and persist to localStorage
   */
  useEffect(() => {
    const html = document.documentElement;

    // Set mode attribute (data-theme="dark" or remove for light)
    if (theme.mode === "dark") {
      html.setAttribute("data-theme", "dark");
    } else {
      html.removeAttribute("data-theme");
    }

    // Set primary color CSS variable
    html.style.setProperty("--primary", theme.color);

    // Persist to localStorage
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  /**
   * Check if current mode is dark
   */
  const isDark = theme.mode === "dark";

  /**
   * Toggle between light and dark mode
   */
  const toggleMode = () => {
    setThemeState((current) => ({
      ...current,
      mode: current.mode === "dark" ? "light" : "dark",
    }));
  };

  /**
   * Set specific primary color
   */
  const setColor = (color) => {
    setThemeState((current) => ({
      ...current,
      color,
    }));
  };

  /**
   * Set complete theme
   */
  const setTheme = (newTheme) => {
    setThemeState(newTheme);
  };

  /**
   * Reset theme to default
   */
  const resetTheme = () => {
    setThemeState(DEFAULT_THEME);
  };

  const value = {
    theme,
    isDark,
    toggleMode,
    setColor,
    setTheme,
    resetTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

/**
 * useTheme Hook
 * Access theme context in components
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
