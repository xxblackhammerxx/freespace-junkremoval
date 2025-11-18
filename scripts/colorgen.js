import { oklch } from 'culori'

/**
 * @typedef {Object} ColorScale
 * @property {string} 50
 * @property {string} 100
 * @property {string} 200
 * @property {string} 300
 * @property {string} 400
 * @property {string} 500
 * @property {string} 600
 * @property {string} 700
 * @property {string} 800
 * @property {string} 900
 * @property {string} 950
 */

/**
 * @typedef {Object} OklchColor
 * @property {number} l
 * @property {number} c
 * @property {number} h
 */

/**
 * Converts a hex color to OKLCH format
 * @param {string} hexColor - The hex color string
 * @returns {OklchColor} The OKLCH color object
 */
export function hexToOklch(hexColor) {
  const color = oklch(hexColor)
  if (!color) {
    throw new Error(`Invalid hex color: ${hexColor}`)
  }

  return {
    l: color.l || 0,
    c: color.c || 0,
    h: color.h || 0,
  }
}

/**
 * Converts OKLCH color object to CSS OKLCH string format
 * @param {OklchColor} color - The OKLCH color object
 * @returns {string} CSS OKLCH string format
 */
export function oklchToString(color) {
  const { l, c, h } = color
  return `oklch(${(l * 100).toFixed(2)}% ${c.toFixed(4)} ${h.toFixed(2)})`
}

/**
 * Generates a complete color scale from a base hex color in OKLCH format
 * @param {string} baseHex - The base hex color
 * @returns {ColorScale} Complete color scale object
 */
export function generateColorScale(baseHex) {
  const baseOklch = hexToOklch(baseHex)

  // Define lightness values for each scale step
  // These values are carefully chosen to create visually pleasing progressions
  const lightnessMap = {
    50: 0.97, // Very light
    100: 0.94, // Light
    200: 0.87, // Light-medium
    300: 0.76, // Medium-light
    400: 0.64, // Medium
    500: baseOklch.l, // Base color (unchanged)
    600: Math.max(0.45, baseOklch.l * 0.8), // Medium-dark
    700: Math.max(0.35, baseOklch.l * 0.65), // Dark
    800: Math.max(0.28, baseOklch.l * 0.5), // Darker
    900: Math.max(0.22, baseOklch.l * 0.4), // Very dark
    950: Math.max(0.12, baseOklch.l * 0.25), // Darkest
  }

  // Generate chroma adjustments for better color progression
  const chromaAdjustments = {
    50: Math.max(0.01, baseOklch.c * 0.1),
    100: Math.max(0.02, baseOklch.c * 0.2),
    200: Math.max(0.03, baseOklch.c * 0.4),
    300: Math.max(0.04, baseOklch.c * 0.6),
    400: Math.max(0.05, baseOklch.c * 0.8),
    500: baseOklch.c, // Base chroma
    600: Math.min(0.37, baseOklch.c * 1.1),
    700: Math.min(0.37, baseOklch.c * 1.05),
    800: Math.min(0.37, baseOklch.c * 0.9),
    900: Math.min(0.37, baseOklch.c * 0.8),
    950: Math.min(0.37, baseOklch.c * 0.6),
  }

  const scale = {}

  // Generate each color in the scale
  Object.entries(lightnessMap).forEach(([key, lightness]) => {
    const scaleKey = key
    const chroma = chromaAdjustments[scaleKey]

    const oklchColor = {
      l: lightness,
      c: chroma,
      h: baseOklch.h, // Keep the same hue
    }

    scale[scaleKey] = oklchToString(oklchColor)
  })

  return scale
}

/**
 * Generates CSS custom properties for a color scale
 * @param {string} colorType - Either 'primary' or 'accent'
 * @param {string} baseHex - The base hex color to generate variations from
 * @returns {string} CSS custom properties string
 */
export function generateCSSVariables(colorType, baseHex) {
  const scale = generateColorScale(baseHex)

  let cssVars = ''

  // Add the base color variable using the 500 value
  cssVars += `--color-${colorType}: ${scale['500']};\n`

  // Add all the scale variations
  Object.entries(scale).forEach(([key, oklchValue]) => {
    cssVars += `--color-${colorType}-${key}: ${oklchValue};\n`
  })

  return cssVars
}

/**
 * Generates a color palette object with both OKLCH strings and raw values
 * @param {string} baseHex - The base hex color
 * @returns {Object} Color palette with base color info, scale, and CSS variables function
 */
export function generateColorPalette(baseHex) {
  const scale = generateColorScale(baseHex)
  const baseOklch = hexToOklch(baseHex)

  return {
    base: {
      hex: baseHex,
      oklch: baseOklch,
      oklchString: oklchToString(baseOklch),
    },
    scale,
    cssVariables: (colorType) => generateCSSVariables(colorType, baseHex),
  }
}

/**
 * Utility function to validate hex color format
 * @param {string} hexColor - The hex color to validate
 * @returns {boolean} Whether the hex color is valid
 */
export function isValidHex(hexColor) {
  const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
  return hexRegex.test(hexColor)
}

/**
 * Generates primary color CSS variables
 * @param {string} baseHex - The base hex color for primary colors
 * @returns {string} CSS variables for primary colors
 */
export function generatePrimaryColors(baseHex) {
  return generateCSSVariables('primary', baseHex)
}

/**
 * Generates accent color CSS variables
 * @param {string} baseHex - The base hex color for accent colors
 * @returns {string} CSS variables for accent colors
 */
export function generateaccentColors(baseHex) {
  return generateCSSVariables('accent', baseHex)
}

/**
 * Example usage function that demonstrates how to use the color generation
 */
export function example() {
  const exampleHex = '#2dcc53'

  console.log('=== Color Generation Example ===')
  console.log(`Input: ${exampleHex}`)

  // Generate the complete palette
  const palette = generateColorPalette(exampleHex)

  console.log('\nBase OKLCH:', palette.base.oklchString)
  console.log('\nComplete Scale:')

  Object.entries(palette.scale).forEach(([key, value]) => {
    console.log(`  ${key}: ${value}`)
  })

  console.log('\nCSS Variables (Primary):')
  console.log(palette.cssVariables('primary'))

  console.log('\nCSS Variables (accent):')
  console.log(palette.cssVariables('accent'))

  return palette
}
