import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "../common/ThemeToggle";
import ColorPicker from "../common/ColorPicker";

/**
 * ThemeDemo Component
 * Demonstrates the theme system with various UI elements
 */
export default function ThemeDemo() {
  const { theme, isDark } = useTheme();

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              React Theme System
            </h1>
            <p className="text-muted-foreground">
              Based on Angular theme implementation with dark/light modes and
              customizable primary color
            </p>
          </div>
          <ThemeToggle />
        </header>

        {/* Theme Controls */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ColorPicker />

          <div className="rounded-lg bg-card p-4 shadow-md border border-border">
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Current Theme
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Mode:</span>
                <span className="font-medium text-foreground">
                  {isDark ? "Dark" : "Light"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Primary Color:</span>
                <div className="flex items-center gap-2">
                  <div
                    className="h-4 w-4 rounded-full border border-border"
                    style={{ backgroundColor: theme.color }}
                  />
                  <span className="font-medium text-foreground">
                    {theme.color}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography Showcase */}
        <section className="rounded-lg bg-card p-6 shadow-md border border-border">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Typography Showcase
          </h2>
          <div className="space-y-3">
            <h1 className="text-4xl font-bold text-foreground">
              Heading 1 - Bold 4xl
            </h1>
            <h2 className="text-3xl font-semibold text-foreground">
              Heading 2 - Semibold 3xl
            </h2>
            <h3 className="text-2xl font-semibold text-foreground">
              Heading 3 - Semibold 2xl
            </h3>
            <h4 className="text-xl font-medium text-foreground">
              Heading 4 - Medium xl
            </h4>
            <p className="text-base text-foreground">
              Body text - Regular base with Nunito font family
            </p>
            <p className="text-sm text-muted-foreground">
              Muted text - Regular sm
            </p>
            <p className="text-xs text-muted-foreground">
              Small text - Regular xs
            </p>
          </div>
        </section>

        {/* Button Variants */}
        <section className="rounded-lg bg-card p-6 shadow-md border border-border">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Button Variants
          </h2>

          <div className="space-y-6">
            {/* Primary Buttons */}
            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">
                Primary Buttons
              </h3>
              <div className="flex flex-wrap gap-3">
                <button className="px-5 py-2 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200">
                  Primary
                </button>
                <button className="px-5 py-2 text-sm font-semibold rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-all duration-200">
                  Primary Light
                </button>
                <button className="px-5 py-2 text-sm font-semibold rounded-lg bg-transparent text-primary hover:bg-primary/10 transition-all duration-200">
                  Primary Ghost
                </button>
              </div>
            </div>

            {/* Destructive Buttons */}
            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">
                Destructive Buttons
              </h3>
              <div className="flex flex-wrap gap-3">
                <button className="px-5 py-2 text-sm font-semibold rounded-lg bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-all duration-200">
                  Destructive
                </button>
                <button className="px-5 py-2 text-sm font-semibold rounded-lg bg-destructive/20 text-destructive hover:bg-destructive/30 transition-all duration-200">
                  Destructive Light
                </button>
              </div>
            </div>

            {/* Muted Buttons */}
            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">
                Muted Buttons
              </h3>
              <div className="flex flex-wrap gap-3">
                <button className="px-5 py-2 text-sm font-semibold rounded-lg bg-muted text-muted-foreground hover:bg-muted/80 transition-all duration-200">
                  Muted
                </button>
                <button className="px-5 py-2 text-sm font-semibold rounded-lg bg-muted/50 text-muted-foreground hover:bg-muted/70 transition-all duration-200">
                  Muted Light
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Card Variants */}
        <section className="rounded-lg bg-card p-6 shadow-md border border-border">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Card Variants
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="rounded-lg bg-background p-4 shadow-md border border-border">
              <h3 className="text-md font-semibold text-foreground mb-2">
                Default Card
              </h3>
              <p className="text-sm text-muted-foreground">
                This is a default card with elevation and border.
              </p>
            </div>

            <div className="rounded-lg bg-card p-4 shadow-md border border-border">
              <h3 className="text-md font-semibold text-foreground mb-2">
                Card Background
              </h3>
              <p className="text-sm text-muted-foreground">
                This card uses the card background color.
              </p>
            </div>

            <div className="rounded-lg bg-background p-4 border-2 border-primary">
              <h3 className="text-md font-semibold text-primary mb-2">
                Primary Border
              </h3>
              <p className="text-sm text-muted-foreground">
                This card has a primary colored border.
              </p>
            </div>
          </div>
        </section>

        {/* Form Elements */}
        <section className="rounded-lg bg-card p-6 shadow-md border border-border">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Form Elements
          </h2>

          <form className="space-y-4 max-w-md">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Text Input
              </label>
              <input
                type="text"
                placeholder="Enter text..."
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Email Input
              </label>
              <input
                type="email"
                placeholder="Enter email..."
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Textarea
              </label>
              <textarea
                rows={3}
                placeholder="Enter message..."
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Select
              </label>
              <select className="w-full">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="checkbox-demo" />
              <label
                htmlFor="checkbox-demo"
                className="text-sm text-foreground"
              >
                Checkbox option
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input type="radio" id="radio-demo" name="radio-group" />
              <label htmlFor="radio-demo" className="text-sm text-foreground">
                Radio option
              </label>
            </div>
          </form>
        </section>

        {/* Animations */}
        <section className="rounded-lg bg-card p-6 shadow-md border border-border">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Custom Animations
          </h2>

          <div className="flex flex-wrap gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg animate-wiggle mb-2" />
              <p className="text-sm text-muted-foreground">Wiggle</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg animate-float mb-2" />
              <p className="text-sm text-muted-foreground">Float</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg animate-fade-in-up mb-2" />
              <p className="text-sm text-muted-foreground">Fade In Up</p>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section className="rounded-lg bg-card p-6 shadow-md border border-border">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Color Palette
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="h-20 rounded-lg bg-background border border-border mb-2" />
              <p className="text-xs font-medium text-foreground">Background</p>
              <p className="text-xs text-muted-foreground">var(--background)</p>
            </div>

            <div>
              <div className="h-20 rounded-lg bg-card border border-border mb-2" />
              <p className="text-xs font-medium text-foreground">Card</p>
              <p className="text-xs text-muted-foreground">var(--card)</p>
            </div>

            <div>
              <div className="h-20 rounded-lg bg-primary mb-2" />
              <p className="text-xs font-medium text-foreground">Primary</p>
              <p className="text-xs text-muted-foreground">var(--primary)</p>
            </div>

            <div>
              <div className="h-20 rounded-lg bg-muted mb-2" />
              <p className="text-xs font-medium text-foreground">Muted</p>
              <p className="text-xs text-muted-foreground">var(--muted)</p>
            </div>

            <div>
              <div className="h-20 rounded-lg bg-destructive mb-2" />
              <p className="text-xs font-medium text-foreground">Destructive</p>
              <p className="text-xs text-muted-foreground">
                var(--destructive)
              </p>
            </div>

            <div>
              <div className="h-20 rounded-lg border-2 border-border mb-2" />
              <p className="text-xs font-medium text-foreground">Border</p>
              <p className="text-xs text-muted-foreground">var(--border)</p>
            </div>

            <div>
              <div className="h-20 rounded-lg bg-background border border-border flex items-center justify-center mb-2">
                <span className="text-foreground font-semibold">Aa</span>
              </div>
              <p className="text-xs font-medium text-foreground">Foreground</p>
              <p className="text-xs text-muted-foreground">var(--foreground)</p>
            </div>

            <div>
              <div className="h-20 rounded-lg bg-background border border-border flex items-center justify-center mb-2">
                <span className="text-muted-foreground">Aa</span>
              </div>
              <p className="text-xs font-medium text-foreground">Muted Text</p>
              <p className="text-xs text-muted-foreground">
                var(--muted-foreground)
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
