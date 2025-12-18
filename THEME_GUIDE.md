# React Theme System

A comprehensive theme system for React applications with dark/light mode support and customizable primary colors, based on Angular theme implementation patterns.

## Features

- 🌓 **Dark/Light Mode**: Seamless switching between light and dark themes
- 🎨 **Customizable Primary Color**: Choose from 8 preset colors or use custom colors
- 💾 **Persistent**: Theme preferences saved to localStorage
- ⚡ **Performance**: Efficient CSS variable-based theming
- 🎯 **Type-Safe**: Full TypeScript support (if using TypeScript)
- 🔧 **Easy Integration**: Simple Context API implementation

## Quick Start

### 1. Theme is Already Integrated

The theme system is already set up in your application. The `ThemeProvider` wraps your app in `src/main.jsx`.

### 2. Using the Theme in Components

Import and use the `useTheme` hook in any component:

```jsx
import { useTheme } from "./context/ThemeContext";

function MyComponent() {
  const { theme, isDark, toggleMode, setColor } = useTheme();

  return (
    <div>
      <p>Current mode: {isDark ? "Dark" : "Light"}</p>
      <button onClick={toggleMode}>Toggle Theme</button>
    </div>
  );
}
```

### 3. Theme Components

Use the pre-built theme components:

```jsx
import ThemeToggle from "./common/ThemeToggle";
import ColorPicker from "./common/ColorPicker";

function Header() {
  return (
    <header>
      <ThemeToggle />
      <ColorPicker />
    </header>
  );
}
```

## Available CSS Variables

The theme system provides the following CSS variables that automatically update when the theme changes:

### Colors

- `--background` - Main background color
- `--foreground` - Main text color
- `--card` - Card background color
- `--card-foreground` - Card text color
- `--primary` - Primary brand color (customizable)
- `--primary-foreground` - Text color on primary background
- `--muted` - Muted background color
- `--muted-foreground` - Muted text color
- `--destructive` - Destructive/error color
- `--destructive-foreground` - Text on destructive background
- `--border` - Border color

### Tailwind Utilities

Use Tailwind classes with theme colors:

```jsx
<div className="bg-background text-foreground">
  <button className="bg-primary text-primary-foreground">Primary Button</button>
  <p className="text-muted-foreground">Muted text</p>
</div>
```

## Theme API

### `useTheme()` Hook

Returns an object with:

- `theme` - Current theme object `{ mode: 'light' | 'dark', color: string }`
- `isDark` - Boolean indicating if dark mode is active
- `toggleMode()` - Function to toggle between light and dark modes
- `setColor(color)` - Function to set primary color (hex string)
- `setTheme(theme)` - Function to set complete theme object
- `resetTheme()` - Function to reset to default theme

### Preset Colors

Available in `THEME_COLORS` export:

- Indigo: `#6366f1` (default)
- Violet: `#8b5cf6`
- Pink: `#ec4899`
- Red: `#ef4444`
- Amber: `#f59e0b`
- Emerald: `#10b981`
- Blue: `#3b82f6`
- Cyan: `#06b6d4`

## Custom Animations

The theme system includes custom animations:

- `animate-wiggle` - Wiggle animation
- `animate-fade-in-down` - Fade in from top
- `animate-fade-out-down` - Fade out to bottom
- `animate-fade-in-up` - Fade in from bottom
- `animate-fade-out-up` - Fade out to top
- `animate-wave-slow` - Slow wave animation
- `animate-wave-medium` - Medium wave animation
- `animate-wave-fast` - Fast wave animation
- `animate-float` - Floating animation

## Demo Page

View the theme system in action by navigating to the ThemeDemo component:

```jsx
import ThemeDemo from "./pages/ThemeDemo";

// Add to your router or render directly
<ThemeDemo />;
```

## Form Styling

All form elements are automatically styled with theme colors:

- Text inputs, textareas, selects
- Checkboxes and radio buttons
- Focus states with primary color
- Consistent border and background colors

## Dark Mode Implementation

Dark mode is controlled via the `data-theme="dark"` attribute on the `<html>` element. The ThemeContext automatically manages this attribute based on the current theme mode.

## Browser Support

- Modern browsers with CSS custom properties support
- localStorage for persistence
- Graceful fallback for older browsers

## Troubleshooting

### Theme not persisting

- Check browser localStorage is enabled
- Verify ThemeProvider wraps your entire app

### Colors not updating

- Ensure you're using the CSS variable classes (e.g., `bg-background` not `bg-white`)
- Check that Tailwind is properly configured with the theme variables

### TypeScript errors

- The theme system works with JavaScript by default
- For TypeScript, add type definitions as needed

## Migration from Old Theme

If you had a previous theme system:

1. Replace old color variables with new theme variables
2. Update components to use `useTheme()` instead of old theme hooks
3. Replace hardcoded colors with theme CSS variables
4. Test all components in both light and dark modes

## Contributing

When adding new components:

1. Use theme CSS variables for colors
2. Test in both light and dark modes
3. Ensure proper contrast ratios
4. Follow existing component patterns
