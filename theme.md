# Angular 20 Theme System - Complete Setup Guide

> **Replicate the Tailwind CSS 4 + Angular 20 Theme System**  
> This guide provides a complete step-by-step setup for creating a new Angular 20 project with the sophisticated theme system documented in `THEME_STYLING_GUIDE.md`.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Project Initialization](#project-initialization)
3. [Dependency Installation](#dependency-installation)
4. [Project Structure](#project-structure)
5. [Core Configuration Files](#core-configuration-files)
6. [Theme Service Implementation](#theme-service-implementation)
7. [Demo Components](#demo-components)
8. [Running the Application](#running-the-application)
9. [Verification Checklist](#verification-checklist)

---

## Prerequisites

Ensure you have the following installed:

```bash
node --version  # v20.x or higher
npm --version   # v10.x or higher
```

Install Angular CLI globally:

```bash
npm install -g @angular/cli@latest
```

---

## Project Initialization

### Step 1: Create New Angular 20 Project

```bash
# Create new Angular project with standalone components (default in v20)
ng new angular-theme-system --routing --style=css --skip-git

# Navigate to project directory
cd angular-theme-system
```

**Configuration Prompts:**

- ✅ Would you like to add Angular routing? → **Yes**
- ✅ Which stylesheet format would you like to use? → **CSS**

---

## Dependency Installation

### Step 2: Install Tailwind CSS 4 and Plugins

```bash
# Install Tailwind CSS 4 (beta)
npm install tailwindcss@^4.0.5 @tailwindcss/postcss@^4.0.3

# Install Tailwind plugins
npm install @tailwindcss/forms@^0.5.10
npm install @tailwindcss/typography@^0.5.16
npm install @tailwindcss/aspect-ratio@^0.4.2
npm install tailwind-scrollbar@^4.0.0

# Install PostCSS and Autoprefixer
npm install -D postcss@^8.5.3 autoprefixer@^10.4.7

# Install ngx-sonner for toast notifications (optional but used in original)
npm install ngx-sonner

# Install ApexCharts for charts (optional)
npm install apexcharts ng-apexcharts
```

### Step 3: Verify Installation

```bash
npm list tailwindcss @tailwindcss/postcss
```

Expected output should show Tailwind CSS 4.x.

---

## Project Structure

### Step 4: Create Recommended Folder Structure

```bash
# Create core directory structure
mkdir -p src/app/core/models
mkdir -p src/app/core/services
mkdir -p src/app/shared/components
mkdir -p src/app/features/demo
mkdir -p src/assets/styles
```

**Final Structure:**

```
src/
├── app/
│   ├── core/
│   │   ├── models/
│   │   │   └── theme.model.ts
│   │   └── services/
│   │       └── theme.service.ts
│   ├── shared/
│   │   └── components/
│   │       ├── button/
│   │       │   ├── button.component.ts
│   │       │   └── button.component.html
│   │       ├── card/
│   │       │   ├── card.component.ts
│   │       │   └── card.component.html
│   │       └── navbar/
│   │           ├── navbar.component.ts
│   │           └── navbar.component.html
│   ├── features/
│   │   └── demo/
│   │       ├── demo.component.ts
│   │       └── demo.component.html
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.config.ts
│   └── app.routes.ts
├── assets/
│   └── styles/
│       └── apexchart.css
├── styles.css
└── index.html
```

---

## Core Configuration Files

### Step 5: Configure `postcss.config.js`

Create `postcss.config.js` in the project root:

```javascript
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};
```

### Step 6: Create Global Styles (`src/styles.css`)

Replace the contents of `src/styles.css`:

```css
/* Import Poppins font from Google Fonts */
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap")
layer(base);

/* Import Tailwind CSS 4 */
@import "tailwindcss";

/* Load Tailwind plugins */
@plugin "@tailwindcss/forms";
@plugin "@tailwindcss/typography";
@plugin "@tailwindcss/aspect-ratio";
@plugin "tailwind-scrollbar";

/* Custom dark variant for Tailwind v4 */
@custom-variant dark (&:where(.dark, .dark *));

/* ==================== Tailwind Theme Configuration ==================== */
@theme {
  /* Reset default fonts */
  --font-*: initial;

  /* Font families */
  --font-poppins: Poppins, system-ui, sans-serif;
  --font-nunito: Nunito Sans, sans-serif;

  /* Map CSS variables to Tailwind utilities */
  --color-border: var(--border);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);

  /* Custom shadow */
  --shadow-custom: 0px 0px 50px 0px rgb(82 63 105 / 15%);

  /* Custom animations */
  --animate-wiggle: wiggle 1s ease-in-out infinite;
  --animate-fade-in-down: fade-in-down 0.3s ease-out;
  --animate-fade-out-down: fade-out-down 0.3s ease-out;
  --animate-fade-in-up: fade-in-up 0.3s ease-out;
  --animate-fade-out-up: fade-out-up 0.3s ease-out;
}

/* ==================== Base Theme Colors ==================== */
@layer base {
  /* Default theme (Base - Rose/Red) - Light Mode */
  :root {
    --background: #ffffff;
    --foreground: #0c1420;
    --card: #f1f5f9;
    --card-foreground: #000000;
    --primary: #e11d48;
    --primary-foreground: #ffffff;
    --muted: #cfd9e5;
    --muted-foreground: #64748b;
    --destructive: #cc0033;
    --destructive-foreground: #fafafa;
    --border: #e2e8f0;
  }

  /* Base Theme - Dark Mode */
  .dark {
    --background: #0a0a0a;
    --foreground: #f2f2f2;
    --card: #121212;
    --card-foreground: #262626;
    --muted: #262626;
    --muted-foreground: #a3a3a3;
    --border: #262626;
  }

  /* ==================== Violet Theme ==================== */
  :root[data-theme="violet"] {
    --primary: #6e56cf;
  }

  .dark[data-theme="violet"] {
    --background: #060815;
    --foreground: #f6f8fb;
    --card: #0b0f1a;
    --card-foreground: #f6f8fb;
    --primary-foreground: #f6f8fb;
    --muted: #232b3d;
    --muted-foreground: #a1a8bf;
    --border: #232b3d;
  }

  /* ==================== Red Theme ==================== */
  :root[data-theme="red"] {
    --primary: #cc0033;
  }

  .dark[data-theme="red"] {
    --primary-foreground: #ffe5e5;
  }

  /* ==================== Blue Theme ==================== */
  :root[data-theme="blue"] {
    --primary: #2490ff;
  }

  .dark[data-theme="blue"] {
    --background: #02080f;
    --foreground: #f8fafc;
    --card: #0b1117;
    --card-foreground: #f8fafc;
    --primary-foreground: #0f1729;
    --muted: #1e293b;
    --muted-foreground: #94a3b8;
    --border: #1e293b;
  }

  /* ==================== Orange Theme ==================== */
  :root[data-theme="orange"] {
    --primary: #ea580c;
  }

  .dark[data-theme="orange"] {
    --background: #0c0a09;
    --foreground: #fafaf9;
    --card: #141110;
    --card-foreground: #fafaf9;
    --primary-foreground: #fafaf9;
    --muted: #292524;
    --muted-foreground: #a8a29e;
    --border: #292524;
  }

  /* ==================== Yellow Theme ==================== */
  :root[data-theme="yellow"] {
    --primary: #facc15;
  }

  .dark[data-theme="yellow"] {
    --background: #0c0a09;
    --foreground: #fafaf9;
    --card: #141110;
    --card-foreground: #fafaf9;
    --primary: #facc15;
    --primary-foreground: #422006;
    --muted: #292524;
    --muted-foreground: #a8a29e;
    --border: #292524;
  }

  /* ==================== Green Theme ==================== */
  :root[data-theme="green"] {
    --primary: #22c55e;
  }

  .dark[data-theme="green"] {
    --primary: #22c55e;
    --primary-foreground: #052e16;
  }

  /* Border compatibility layer for Tailwind v4 */
  *,
  ::after,
  ::before,
  ::backdrop,
  ::file-selector-button {
    border-color: var(--color-gray-200, currentColor);
  }
}

/* ==================== Animation Keyframes ==================== */
@keyframes wiggle {
  0%,
  100% {
    transform: rotate(-3deg);
  }
  50% {
    transform: rotate(3deg);
  }
}

@keyframes fade-in-down {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-out-down {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(10px);
  }
}

@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-out-up {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-10px);
  }
}

/* ==================== Form Styling ==================== */
[type="text"],
[type="email"],
[type="password"],
[type="url"],
[type="number"],
[type="date"],
[type="datetime-local"],
[type="month"],
[type="week"],
[type="time"],
[type="search"],
[type="tel"],
textarea,
select {
  @apply w-full rounded-md border border-border bg-background text-xs text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-hidden focus:ring-1 focus:ring-primary;
}

[type="checkbox"],
[type="radio"] {
  @apply h-4 w-4 rounded-sm border-border bg-background checked:border-primary checked:bg-primary focus:ring-2 focus:ring-primary focus:ring-offset-0;
}

/* ==================== Custom Utilities ==================== */
@utility container {
  padding-inline: 1rem;

  @media (width >= theme(--breakpoint-sm)) {
    padding-inline: 2rem;
  }

  @media (width >= theme(--breakpoint-lg)) {
    padding-inline: 4rem;
  }

  @media (width >= theme(--breakpoint-xl)) {
    padding-inline: 5rem;
  }

  @media (width >= theme(--breakpoint-2xl)) {
    padding-inline: 6rem;
  }
}

@utility dropdown-content {
  @apply pointer-events-none scale-95 opacity-0 duration-100 ease-in;

  .dropdown:hover > & {
    @apply pointer-events-auto block scale-100 animate-fade-in-up opacity-100 duration-200;
  }
}

/* ==================== Scrollbar Styling ==================== */
.scrollbar-custom {
  @apply scrollbar-thin scrollbar-track-transparent scrollbar-thumb-muted scrollbar-thumb-rounded scrollbar-track-rounded;
}
```

### Step 7: Create ApexCharts Theme Override (`src/assets/styles/apexchart.css`)

```css
/* ApexCharts Theme Integration */
.apexcharts-tooltip {
  &.apexcharts-theme-dark {
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.2);
    border-radius: 0.475rem;
    border: 0 !important;
    background: var(--card) !important;
    color: var(--foreground);

    .apexcharts-tooltip-title {
      background: var(--card) !important;
      font-weight: 500;
      color: var(--foreground);
      border-bottom: 1px solid var(--border) !important;
    }

    .apexcharts-tooltip-series-group {
      background: var(--card) !important;
    }

    .apexcharts-tooltip-marker {
      margin-right: 10px;
    }
  }

  &.apexcharts-theme-light {
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
    border-radius: 0.475rem;
    border: 1px solid var(--border) !important;
    background: var(--background) !important;
    color: var(--foreground);

    .apexcharts-tooltip-title {
      background: var(--background) !important;
      font-weight: 500;
      color: var(--foreground);
      border-bottom: 1px solid var(--border) !important;
    }

    .apexcharts-tooltip-series-group {
      background: var(--background) !important;
    }
  }
}
```

### Step 8: Update `src/index.html`

```html
<!DOCTYPE html>
<html lang="en" data-theme="base" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <title>Angular Theme System</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
  </head>
  <body
    class="bg-background font-poppins text-foreground selection:bg-primary selection:text-primary-foreground"
  >
    <app-root></app-root>
  </body>
</html>
```

### Step 9: Update `angular.json`

Add ApexCharts styles to the build configuration:

```json
{
  "projects": {
    "angular-theme-system": {
      "architect": {
        "build": {
          "options": {
            "styles": ["src/styles.css", "src/assets/styles/apexchart.css"]
          }
        }
      }
    }
  }
}
```

---

## Theme Service Implementation

### Step 10: Create Theme Model (`src/app/core/models/theme.model.ts`)

```typescript
export interface Theme {
  mode: "light" | "dark";
  color: "base" | "violet" | "red" | "blue" | "orange" | "yellow" | "green";
  direction: "ltr" | "rtl";
}

export const THEME_COLORS = [
  { value: "base", label: "Base (Rose)", color: "#E11D48" },
  { value: "violet", label: "Violet", color: "#6E56CF" },
  { value: "red", label: "Red", color: "#CC0033" },
  { value: "blue", label: "Blue", color: "#2490FF" },
  { value: "orange", label: "Orange", color: "#EA580C" },
  { value: "yellow", label: "Yellow", color: "#FACC15" },
  { value: "green", label: "Green", color: "#22C55E" },
] as const;
```

### Step 11: Create Theme Service (`src/app/core/services/theme.service.ts`)

```typescript
import { Injectable, signal, effect } from "@angular/core";
import { Theme } from "../models/theme.model";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  // Signal for reactive theme state
  public theme = signal<Theme>({
    mode: "dark",
    color: "base",
    direction: "ltr",
  });

  constructor() {
    // Load theme from localStorage on initialization
    this.loadTheme();

    // Automatically apply theme changes
    effect(() => {
      this.applyTheme();
    });
  }

  /**
   * Load theme from localStorage
   */
  private loadTheme(): void {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      try {
        const parsed = JSON.parse(storedTheme) as Theme;
        this.theme.set(parsed);
      } catch (error) {
        console.error("Failed to parse stored theme:", error);
      }
    }
  }

  /**
   * Apply theme to DOM and persist to localStorage
   */
  private applyTheme(): void {
    const currentTheme = this.theme();
    const html = document.documentElement;

    // Set mode class (dark or remove for light)
    html.className = currentTheme.mode;

    // Set color theme data attribute
    html.setAttribute("data-theme", currentTheme.color);

    // Set direction attribute
    html.setAttribute("dir", currentTheme.direction);

    // Persist to localStorage
    localStorage.setItem("theme", JSON.stringify(currentTheme));
  }

  /**
   * Check if current mode is dark
   */
  get isDark(): boolean {
    return this.theme().mode === "dark";
  }

  /**
   * Toggle between light and dark mode
   */
  toggleMode(): void {
    this.theme.update((current) => ({
      ...current,
      mode: current.mode === "dark" ? "light" : "dark",
    }));
  }

  /**
   * Set specific color theme
   */
  setColor(color: Theme["color"]): void {
    this.theme.update((current) => ({
      ...current,
      color,
    }));
  }

  /**
   * Set text direction
   */
  setDirection(direction: Theme["direction"]): void {
    this.theme.update((current) => ({
      ...current,
      direction,
    }));
  }

  /**
   * Set complete theme
   */
  setTheme(theme: Theme): void {
    this.theme.set(theme);
  }

  /**
   * Reset theme to default
   */
  resetTheme(): void {
    this.theme.set({
      mode: "dark",
      color: "base",
      direction: "ltr",
    });
  }
}
```

---

## Demo Components

### Step 12: Create Button Component

**File:** `src/app/shared/components/button/button.component.ts`

```typescript
import {
  Component,
  input,
  output,
  ChangeDetectionStrategy,
} from "@angular/core";
import { NgClass } from "@angular/common";

type ButtonImpact = "bold" | "light" | "none";
type ButtonTone =
  | "primary"
  | "danger"
  | "success"
  | "warning"
  | "info"
  | "light";
type ButtonSize = "small" | "medium" | "large";
type ButtonShape = "square" | "rounded" | "pill";

@Component({
  selector: "app-button",
  template: `
    <button
      [type]="type()"
      [disabled]="disabled()"
      [class]="buttonClasses()"
      (click)="handleClick($event)"
    >
      <ng-content></ng-content>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass],
})
export class ButtonComponent {
  // Inputs
  impact = input<ButtonImpact>("bold");
  tone = input<ButtonTone>("primary");
  size = input<ButtonSize>("medium");
  shape = input<ButtonShape>("rounded");
  type = input<"button" | "submit" | "reset">("button");
  disabled = input<boolean>(false);
  fullWidth = input<boolean>(false);

  // Output
  clicked = output<MouseEvent>();

  /**
   * Compute button classes based on inputs
   */
  buttonClasses(): string {
    const baseClasses =
      "font-semibold transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-primary focus:ring-offset-2";

    const impactClasses = this.getImpactClasses();
    const sizeClasses = this.getSizeClasses();
    const shapeClasses = this.getShapeClasses();
    const widthClass = this.fullWidth() ? "w-full" : "";
    const disabledClass = this.disabled()
      ? "opacity-50 cursor-not-allowed"
      : "cursor-pointer";

    return `${baseClasses} ${impactClasses} ${sizeClasses} ${shapeClasses} ${widthClass} ${disabledClass}`.trim();
  }

  /**
   * Get impact-based classes
   */
  private getImpactClasses(): string {
    const tone = this.tone();
    const impact = this.impact();

    const toneColors = {
      primary: {
        bold: "bg-primary text-primary-foreground hover:bg-primary/90",
        light: "bg-primary/20 text-primary hover:bg-primary/30",
        none: "bg-transparent text-primary hover:bg-primary/10",
      },
      danger: {
        bold: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        light: "bg-destructive/20 text-destructive hover:bg-destructive/30",
        none: "bg-transparent text-destructive hover:bg-destructive/10",
      },
      success: {
        bold: "bg-green-500 text-white hover:bg-green-600",
        light: "bg-green-500/20 text-green-600 hover:bg-green-500/30",
        none: "bg-transparent text-green-600 hover:bg-green-500/10",
      },
      warning: {
        bold: "bg-yellow-500 text-yellow-950 hover:bg-yellow-600",
        light: "bg-yellow-500/20 text-yellow-600 hover:bg-yellow-500/30",
        none: "bg-transparent text-yellow-600 hover:bg-yellow-500/10",
      },
      info: {
        bold: "bg-violet-500 text-white hover:bg-violet-600",
        light: "bg-violet-500/20 text-violet-600 hover:bg-violet-500/30",
        none: "bg-transparent text-violet-600 hover:bg-violet-500/10",
      },
      light: {
        bold: "bg-muted text-muted-foreground hover:bg-muted/80",
        light: "bg-muted/50 text-muted-foreground hover:bg-muted/70",
        none: "bg-transparent text-muted-foreground hover:bg-muted/20",
      },
    };

    return toneColors[tone][impact];
  }

  /**
   * Get size-based classes
   */
  private getSizeClasses(): string {
    const sizeMap = {
      small: "px-3 py-1 text-xs",
      medium: "px-5 py-2 text-sm",
      large: "px-7 py-2.5 text-lg",
    };
    return sizeMap[this.size()];
  }

  /**
   * Get shape-based classes
   */
  private getShapeClasses(): string {
    const shapeMap = {
      square: "rounded-none",
      rounded: "rounded-lg",
      pill: "rounded-full",
    };
    return shapeMap[this.shape()];
  }

  /**
   * Handle button click
   */
  handleClick(event: MouseEvent): void {
    if (!this.disabled()) {
      this.clicked.emit(event);
    }
  }
}
```

### Step 13: Create Card Component

**File:** `src/app/shared/components/card/card.component.ts`

```typescript
import { Component, input, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-card",
  template: `
    <div [class]="cardClasses()">
      @if (title()) {
      <h3 class="text-md font-semibold text-foreground mb-3">
        {{ title() }}
      </h3>
      }

      <div class="text-sm text-muted-foreground">
        <ng-content></ng-content>
      </div>

      @if (hasFooter()) {
      <div class="mt-4 pt-4 border-t border-border">
        <ng-content select="[footer]"></ng-content>
      </div>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  // Inputs
  title = input<string>("");
  bordered = input<boolean>(false);
  elevated = input<boolean>(true);
  padding = input<"none" | "small" | "medium" | "large">("medium");
  hasFooter = input<boolean>(false);

  /**
   * Compute card classes
   */
  cardClasses(): string {
    const baseClasses = "bg-background rounded-lg";
    const borderClass = this.bordered() ? "border border-border" : "";
    const shadowClass = this.elevated() ? "shadow-md" : "";
    const paddingClass = this.getPaddingClass();

    return `${baseClasses} ${borderClass} ${shadowClass} ${paddingClass}`.trim();
  }

  /**
   * Get padding class based on size
   */
  private getPaddingClass(): string {
    const paddingMap = {
      none: "p-0",
      small: "p-4",
      medium: "p-6",
      large: "p-8",
    };
    return paddingMap[this.padding()];
  }
}
```

### Step 14: Create Navbar Component

**File:** `src/app/shared/components/navbar/navbar.component.ts`

```typescript
import { Component, ChangeDetectionStrategy, inject } from "@angular/core";
import { ThemeService } from "../../../core/services/theme.service";
import { THEME_COLORS } from "../../../core/models/theme.model";

@Component({
  selector: "app-navbar",
  template: `
    <nav class="bg-card border-b border-border px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center space-x-3">
          <div class="h-8 w-8 rounded-sm bg-primary"></div>
          <h1 class="text-xl font-bold text-foreground">Theme System</h1>
        </div>

        <!-- Theme Controls -->
        <div class="flex items-center space-x-4">
          <!-- Color Theme Selector -->
          <div class="flex items-center space-x-2">
            @for (themeColor of themeColors; track themeColor.value) {
            <button
              (click)="selectColor(themeColor.value)"
              [class]="getColorButtonClass(themeColor.value)"
              [style.background-color]="themeColor.color"
              [title]="themeColor.label"
              aria-label="Select {{ themeColor.label }} theme"
            ></button>
            }
          </div>

          <!-- Dark Mode Toggle -->
          <button
            (click)="toggleDarkMode()"
            class="rounded-md bg-muted p-2 text-muted-foreground hover:bg-muted/80 hover:text-foreground transition-all"
            [attr.aria-label]="
              themeService.isDark
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            "
          >
            @if (themeService.isDark) {
            <!-- Sun Icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            } @else {
            <!-- Moon Icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
            }
          </button>

          <!-- RTL Toggle -->
          <button
            (click)="toggleDirection()"
            class="rounded-md bg-muted px-3 py-2 text-xs font-semibold text-muted-foreground hover:bg-muted/80 hover:text-foreground transition-all"
            aria-label="Toggle text direction"
          >
            {{ themeService.theme().direction === "ltr" ? "RTL" : "LTR" }}
          </button>
        </div>
      </div>
    </nav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  themeService = inject(ThemeService);
  themeColors = THEME_COLORS;

  /**
   * Get color button classes with active state
   */
  getColorButtonClass(colorValue: string): string {
    const isActive = this.themeService.theme().color === colorValue;
    const baseClasses = "h-6 w-6 rounded-full transition-all duration-200";
    const activeClasses = isActive
      ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-110"
      : "hover:scale-110";

    return `${baseClasses} ${activeClasses}`;
  }

  /**
   * Select color theme
   */
  selectColor(color: string): void {
    this.themeService.setColor(color as any);
  }

  /**
   * Toggle dark/light mode
   */
  toggleDarkMode(): void {
    this.themeService.toggleMode();
  }

  /**
   * Toggle RTL/LTR direction
   */
  toggleDirection(): void {
    const currentDirection = this.themeService.theme().direction;
    this.themeService.setDirection(currentDirection === "ltr" ? "rtl" : "ltr");
  }
}
```

### Step 15: Create Demo Page Component

**File:** `src/app/features/demo/demo.component.ts`

```typescript
import { Component, ChangeDetectionStrategy, inject } from "@angular/core";
import { ButtonComponent } from "../../shared/components/button/button.component";
import { CardComponent } from "../../shared/components/card/card.component";
import { ThemeService } from "../../core/services/theme.service";

@Component({
  selector: "app-demo",
  template: `
    <div class="space-y-8">
      <!-- Typography Section -->
      <section>
        <h2 class="text-3xl font-bold text-foreground mb-4">
          Typography <span class="text-primary">Showcase</span>
        </h2>
        <p class="text-muted-foreground text-sm mb-6">
          Demonstrating the Poppins font family with various weights and sizes.
        </p>

        <div class="space-y-3">
          <h1 class="text-4xl font-bold text-foreground">
            Heading 1 - Bold 4xl
          </h1>
          <h2 class="text-3xl font-semibold text-foreground">
            Heading 2 - Semibold 3xl
          </h2>
          <h3 class="text-2xl font-semibold text-foreground">
            Heading 3 - Semibold 2xl
          </h3>
          <h4 class="text-xl font-medium text-foreground">
            Heading 4 - Medium xl
          </h4>
          <p class="text-sm text-muted-foreground">Body text - Regular sm</p>
          <p class="text-xs text-muted-foreground">Small text - Regular xs</p>
        </div>
      </section>

      <!-- Button Variants Section -->
      <section>
        <h2 class="text-2xl font-semibold text-foreground mb-4">
          Button Variants
        </h2>

        <!-- Impact Variants -->
        <div class="mb-6">
          <h3 class="text-md font-medium text-foreground mb-3">Impact: Bold</h3>
          <div class="flex flex-wrap gap-3">
            <app-button impact="bold" tone="primary">Primary</app-button>
            <app-button impact="bold" tone="danger">Danger</app-button>
            <app-button impact="bold" tone="success">Success</app-button>
            <app-button impact="bold" tone="warning">Warning</app-button>
            <app-button impact="bold" tone="info">Info</app-button>
            <app-button impact="bold" tone="light">Light</app-button>
          </div>
        </div>

        <div class="mb-6">
          <h3 class="text-md font-medium text-foreground mb-3">
            Impact: Light
          </h3>
          <div class="flex flex-wrap gap-3">
            <app-button impact="light" tone="primary">Primary</app-button>
            <app-button impact="light" tone="danger">Danger</app-button>
            <app-button impact="light" tone="success">Success</app-button>
          </div>
        </div>

        <div class="mb-6">
          <h3 class="text-md font-medium text-foreground mb-3">
            Impact: None (Ghost)
          </h3>
          <div class="flex flex-wrap gap-3">
            <app-button impact="none" tone="primary">Primary</app-button>
            <app-button impact="none" tone="danger">Danger</app-button>
            <app-button impact="none" tone="success">Success</app-button>
          </div>
        </div>

        <!-- Size Variants -->
        <div class="mb-6">
          <h3 class="text-md font-medium text-foreground mb-3">Sizes</h3>
          <div class="flex flex-wrap items-center gap-3">
            <app-button size="small">Small</app-button>
            <app-button size="medium">Medium</app-button>
            <app-button size="large">Large</app-button>
          </div>
        </div>

        <!-- Shape Variants -->
        <div class="mb-6">
          <h3 class="text-md font-medium text-foreground mb-3">Shapes</h3>
          <div class="flex flex-wrap gap-3">
            <app-button shape="square">Square</app-button>
            <app-button shape="rounded">Rounded</app-button>
            <app-button shape="pill">Pill</app-button>
          </div>
        </div>

        <!-- States -->
        <div>
          <h3 class="text-md font-medium text-foreground mb-3">States</h3>
          <div class="flex flex-wrap gap-3">
            <app-button>Normal</app-button>
            <app-button [disabled]="true">Disabled</app-button>
            <app-button [fullWidth]="true">Full Width</app-button>
          </div>
        </div>
      </section>

      <!-- Card Variants Section -->
      <section>
        <h2 class="text-2xl font-semibold text-foreground mb-4">
          Card Variants
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Default Card -->
          <app-card title="Default Card" [elevated]="true">
            <p>This is a default card with elevation and medium padding.</p>
          </app-card>

          <!-- Bordered Card -->
          <app-card title="Bordered Card" [bordered]="true" [elevated]="false">
            <p>This card has a border instead of elevation shadow.</p>
          </app-card>

          <!-- Large Padding -->
          <app-card title="Large Padding" padding="large">
            <p>This card uses large padding for more breathing room.</p>
          </app-card>

          <!-- Small Padding -->
          <app-card title="Small Padding" padding="small">
            <p>This card uses small padding for compact layouts.</p>
          </app-card>

          <!-- Card with Footer -->
          <app-card title="With Footer" [hasFooter]="true">
            <p>This card includes a footer section with a divider.</p>
            <div footer class="flex justify-end space-x-2">
              <app-button size="small" impact="none">Cancel</app-button>
              <app-button size="small">Save</app-button>
            </div>
          </app-card>

          <!-- No Title Card -->
          <app-card>
            <div class="flex items-center space-x-3">
              <div class="h-12 w-12 rounded-full bg-primary"></div>
              <div>
                <h4 class="font-semibold text-foreground">John Doe</h4>
                <p class="text-xs text-muted-foreground">john@example.com</p>
              </div>
            </div>
          </app-card>
        </div>
      </section>

      <!-- Form Elements Section -->
      <section>
        <h2 class="text-2xl font-semibold text-foreground mb-4">
          Form Elements
        </h2>

        <app-card title="Sample Form">
          <form class="space-y-4">
            <!-- Text Input -->
            <div>
              <label
                for="name"
                class="block text-sm font-medium text-foreground mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                class="w-full"
              />
            </div>

            <!-- Email Input -->
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-foreground mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                class="w-full"
              />
            </div>

            <!-- Textarea -->
            <div>
              <label
                for="message"
                class="block text-sm font-medium text-foreground mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Type your message here..."
                class="w-full"
              ></textarea>
            </div>

            <!-- Select -->
            <div>
              <label
                for="country"
                class="block text-sm font-medium text-foreground mb-1"
              >
                Country
              </label>
              <select id="country" class="w-full">
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
                <option>Australia</option>
              </select>
            </div>

            <!-- Checkbox -->
            <div class="flex items-center space-x-2">
              <input type="checkbox" id="terms" />
              <label for="terms" class="text-sm text-muted-foreground">
                I agree to the terms and conditions
              </label>
            </div>

            <!-- Radio Buttons -->
            <div>
              <p class="text-sm font-medium text-foreground mb-2">
                Subscription
              </p>
              <div class="space-y-2">
                <div class="flex items-center space-x-2">
                  <input type="radio" id="free" name="plan" />
                  <label for="free" class="text-sm text-muted-foreground"
                    >Free</label
                  >
                </div>
                <div class="flex items-center space-x-2">
                  <input type="radio" id="pro" name="plan" />
                  <label for="pro" class="text-sm text-muted-foreground"
                    >Pro</label
                  >
                </div>
              </div>
            </div>

            <!-- Submit Button -->
            <div class="pt-4">
              <app-button type="submit" [fullWidth]="true">
                Submit Form
              </app-button>
            </div>
          </form>
        </app-card>
      </section>

      <!-- Color Palette Section -->
      <section>
        <h2 class="text-2xl font-semibold text-foreground mb-4">
          Color Palette
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <!-- Primary -->
          <div class="space-y-2">
            <div class="h-20 rounded-lg bg-primary"></div>
            <p class="text-xs font-medium text-foreground">Primary</p>
          </div>

          <!-- Background -->
          <div class="space-y-2">
            <div
              class="h-20 rounded-lg bg-background border border-border"
            ></div>
            <p class="text-xs font-medium text-foreground">Background</p>
          </div>

          <!-- Card -->
          <div class="space-y-2">
            <div class="h-20 rounded-lg bg-card border border-border"></div>
            <p class="text-xs font-medium text-foreground">Card</p>
          </div>

          <!-- Muted -->
          <div class="space-y-2">
            <div class="h-20 rounded-lg bg-muted"></div>
            <p class="text-xs font-medium text-foreground">Muted</p>
          </div>

          <!-- Destructive -->
          <div class="space-y-2">
            <div class="h-20 rounded-lg bg-destructive"></div>
            <p class="text-xs font-medium text-foreground">Destructive</p>
          </div>

          <!-- Success -->
          <div class="space-y-2">
            <div class="h-20 rounded-lg bg-green-500"></div>
            <p class="text-xs font-medium text-foreground">Success</p>
          </div>

          <!-- Warning -->
          <div class="space-y-2">
            <div class="h-20 rounded-lg bg-yellow-500"></div>
            <p class="text-xs font-medium text-foreground">Warning</p>
          </div>

          <!-- Info -->
          <div class="space-y-2">
            <div class="h-20 rounded-lg bg-violet-500"></div>
            <p class="text-xs font-medium text-foreground">Info</p>
          </div>
        </div>
      </section>

      <!-- Current Theme Info -->
      <section>
        <app-card title="Current Theme Configuration">
          <div class="space-y-2 font-mono text-xs">
            <p><strong>Mode:</strong> {{ themeService.theme().mode }}</p>
            <p><strong>Color:</strong> {{ themeService.theme().color }}</p>
            <p>
              <strong>Direction:</strong> {{ themeService.theme().direction }}
            </p>
          </div>
        </app-card>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent, CardComponent],
})
export class DemoComponent {
  themeService = inject(ThemeService);
}
```

### Step 16: Update App Component

**File:** `src/app/app.component.ts`

```typescript
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";

@Component({
  selector: "app-root",
  template: `
    <div class="flex h-screen w-full flex-col overflow-hidden">
      <!-- Navbar -->
      <app-navbar />

      <!-- Main Content Area -->
      <main class="grow overflow-auto bg-card">
        <div class="mx-auto px-4 py-8 sm:px-8 lg:container">
          <router-outlet />
        </div>
      </main>

      <!-- Footer -->
      <footer class="border-t border-border bg-background px-6 py-4">
        <p class="text-center text-xs text-muted-foreground">
          Angular 20 Theme System © 2025
        </p>
      </footer>
    </div>
  `,
  imports: [RouterOutlet, NavbarComponent],
})
export class AppComponent {}
```

### Step 17: Configure Routes

**File:** `src/app/app.routes.ts`

```typescript
import { Routes } from "@angular/router";
import { DemoComponent } from "./features/demo/demo.component";

export const routes: Routes = [
  {
    path: "",
    component: DemoComponent,
    title: "Theme Demo",
  },
  {
    path: "**",
    redirectTo: "",
  },
];
```

---

## Running the Application

### Step 18: Start Development Server

```bash
# Start the Angular development server
ng serve

# Or with custom port
ng serve --port 4200

# Open automatically in browser
ng serve --open
```

Access the application at: `http://localhost:4200`

### Step 19: Build for Production

```bash
# Create production build
ng build --configuration production

# Output will be in dist/angular-theme-system/
```

---

## Verification Checklist

### ✅ Theme Functionality

- [ ] **Dark/Light Mode Toggle**: Click the sun/moon icon in navbar
- [ ] **Color Theme Switching**: Click colored circles to change theme
- [ ] **RTL Support**: Click RTL/LTR button to toggle text direction
- [ ] **LocalStorage Persistence**: Refresh page - theme should persist
- [ ] **Responsive Design**: Test on different screen sizes

### ✅ Component Variants

- [ ] **Button Variants**: All impact, tone, size, and shape variants render correctly
- [ ] **Card Variants**: Different padding, border, and elevation options work
- [ ] **Form Elements**: Inputs, textareas, selects, checkboxes, and radios styled correctly

### ✅ Visual Quality

- [ ] **Typography**: Poppins font loads correctly
- [ ] **Colors**: All theme colors apply correctly
- [ ] **Spacing**: Layout and component spacing follows design system
- [ ] **Animations**: Smooth transitions between themes
- [ ] **Hover States**: All interactive elements have hover feedback

### ✅ Accessibility

- [ ] **Focus States**: Visible focus rings on all interactive elements
- [ ] **Color Contrast**: Text readable in both light and dark modes
- [ ] **ARIA Labels**: Theme toggle buttons have descriptive labels
- [ ] **Keyboard Navigation**: All controls accessible via keyboard

### ✅ Performance

- [ ] **OnPush Change Detection**: All components use OnPush strategy
- [ ] **Signal-Based State**: Theme service uses Angular signals
- [ ] **No Unnecessary Re-renders**: Theme changes don't cause full app re-render

---

## Customization Guide

### Adding a New Color Theme

**Step 1:** Update `src/styles.css` with new theme colors:

```css
/* Add after existing themes */
:root[data-theme="pink"] {
  --primary: #ec4899;
}

.dark[data-theme="pink"] {
  --primary: #f472b6;
  --primary-foreground: #500724;
}
```

**Step 2:** Update `src/app/core/models/theme.model.ts`:

```typescript
export interface Theme {
  mode: "light" | "dark";
  color:
    | "base"
    | "violet"
    | "red"
    | "blue"
    | "orange"
    | "yellow"
    | "green"
    | "pink"; // Add 'pink'
  direction: "ltr" | "rtl";
}

export const THEME_COLORS = [
  // ... existing colors
  { value: "pink", label: "Pink", color: "#EC4899" },
] as const;
```

### Customizing Font

Replace Poppins with your preferred font in `src/styles.css`:

```css
/* Replace the import */
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap")
layer(base);

/* Update font configuration */
@theme {
  --font-*: initial;
  --font-inter: Inter, system-ui, sans-serif;
}
```

Update `src/index.html` body class:

```html
<body class="bg-background font-inter text-foreground ..."></body>
```

### Adding Custom Animations

Add new keyframes and animation utilities to `src/styles.css`:

```css
@keyframes slide-in-right {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@theme {
  --animate-slide-in-right: slide-in-right 0.4s ease-out;
}
```

Usage:

```html
<div class="animate-slide-in-right">Content</div>
```

---

## Troubleshooting

### Tailwind CSS Not Working

**Issue:** Styles not applying

**Solution:**

1. Ensure `postcss.config.js` exists in root
2. Verify `@import 'tailwindcss';` in `src/styles.css`
3. Check `angular.json` includes `src/styles.css` in build styles
4. Clear cache: `rm -rf node_modules/.cache`

### Theme Not Persisting

**Issue:** Theme resets on page refresh

**Solution:**

1. Check browser console for localStorage errors
2. Verify `ThemeService` is provided at root level
3. Ensure effect is running: check browser DevTools

### Dark Mode Not Working

**Issue:** Dark mode toggle doesn't change colors

**Solution:**

1. Verify HTML element receives `.dark` class
2. Check CSS custom properties defined for `.dark` selector
3. Inspect elements to confirm CSS variables update

### Font Not Loading

**Issue:** Poppins font not displaying

**Solution:**

1. Check network tab for font loading errors
2. Verify `@import` statement in `src/styles.css`
3. Ensure no ad blockers are blocking Google Fonts

---

## Production Optimization

### Reducing Bundle Size

```bash
# Analyze bundle
ng build --stats-json
npx webpack-bundle-analyzer dist/angular-theme-system/stats.json
```

### Lazy Loading

For larger applications, lazy load feature modules:

```typescript
// app.routes.ts
export const routes: Routes = [
  {
    path: "demo",
    loadComponent: () =>
      import("./features/demo/demo.component").then((m) => m.DemoComponent),
  },
];
```

### Performance Tips

1. **Use OnPush Change Detection** (already implemented)
2. **Lazy Load Images**: Use `NgOptimizedImage` directive
3. **Minimize CSS**: Tailwind automatically purges unused styles in production
4. **Use Signals**: Already using Angular signals for reactive state

---

## Summary

You now have a complete Angular 20 project with:

✅ **Tailwind CSS 4** with custom theme system  
✅ **Dark/Light Mode** with toggle  
✅ **6 Color Themes** (Base, Violet, Red, Blue, Orange, Yellow, Green)  
✅ **RTL Support** for internationalization  
✅ **Reusable Components** (Button, Card, Navbar)  
✅ **Form Styling** with consistent design  
✅ **Theme Persistence** via localStorage  
✅ **Angular Signals** for reactive state  
✅ **OnPush Change Detection** for performance  
✅ **Accessibility** with focus states and ARIA labels

### Next Steps

1. **Add More Components**: Create modals, dropdowns, tooltips
2. **Integrate Backend**: Connect to APIs for real data
3. **Add Testing**: Write unit tests for components and services
4. **Deploy**: Host on Vercel, Netlify, or Firebase
5. **Extend Themes**: Add more color variants and customizations

---

**Document Version:** 1.0  
**Angular Version:** 20.x  
**Tailwind CSS Version:** 4.0.5  
**Last Updated:** November 13, 2025
