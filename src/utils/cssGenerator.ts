// Dynamic CSS generation for business theme
import { BusinessConfig } from '@/config/types'
import { generateThemeCSS } from './colorGenerator'

/**
 * Generate dynamic CSS based on business configuration
 */
export function generateBusinessCSS(config: BusinessConfig): string {
  const { branding } = config

  // Generate color theme
  const themeCSS = generateThemeCSS(branding.colors)

  // Generate font CSS
  const fontCSS = `
:root {
  --font-mono: 'Roboto Mono', monospace;
  --font-heading: '${branding.fonts.heading}', sans-serif;
  --font-body: '${branding.fonts.body}', sans-serif;
}

/* Apply fonts to default elements */
body {
  font-family: var(--font-body);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 700;
  text-transform: uppercase;
}
`

  return themeCSS + fontCSS
}

/**
 * Write dynamic CSS to a file (for build-time generation)
 */
export function writeBusinessCSS(config: BusinessConfig, outputPath: string) {
  const css = `@import 'tailwindcss';

${generateBusinessCSS(config)}

/* iOS/Safari specific fixes for mobile responsiveness */
html {
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}

body {
  -webkit-overflow-scrolling: touch;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Fix for iOS Safari floating line/border issues */
* {
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}

/* Prevent iOS Safari zoom on form inputs */
input, select, textarea {
  font-size: 16px;
}

/* Fix for iOS Safari viewport issues */
@supports (-webkit-touch-callout: none) {
  .min-h-screen {
    min-height: -webkit-fill-available;
  }
}
`

  return css
}
