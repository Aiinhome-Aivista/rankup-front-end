import { useTheme, THEME_COLORS } from "../context/ThemeContext";
import { Check } from "lucide-react";

/**
 * ColorPicker Component
 * Allows users to select a primary color from preset options
 */
export default function ColorPicker() {
  const { theme, setColor } = useTheme();

  return (
    <div className="rounded-lg bg-card p-4 shadow-md border border-border">
      <h3 className="text-sm font-semibold text-foreground mb-3">
        Primary Color
      </h3>
      <div className="flex flex-wrap gap-2">
        {THEME_COLORS.map((color) => (
          <button
            key={color.value}
            onClick={() => setColor(color.value)}
            className="relative h-8 w-8 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            style={{ backgroundColor: color.value }}
            aria-label={`Select ${color.label} color`}
            title={color.label}
          >
            {theme.color === color.value && (
              <Check className="h-4 w-4 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
