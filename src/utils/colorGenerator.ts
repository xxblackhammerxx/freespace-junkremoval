// Utility functions for generating color palettes from base colors

/**
 * Convert hex color to HSL values
 */
function hexToHsl(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }

  return [h * 360, s * 100, l * 100]
}

/**
 * Convert HSL values to hex color
 */
function hslToHex(h: number, s: number, l: number): string {
  h /= 360
  s /= 100
  l /= 100

  const c = (1 - Math.abs(2 * l - 1)) * s
  const x = c * (1 - Math.abs(((h * 6) % 2) - 1))
  const m = l - c / 2
  let r = 0
  let g = 0
  let b = 0

  if (0 <= h && h < 1 / 6) {
    r = c
    g = x
    b = 0
  } else if (1 / 6 <= h && h < 2 / 6) {
    r = x
    g = c
    b = 0
  } else if (2 / 6 <= h && h < 3 / 6) {
    r = 0
    g = c
    b = x
  } else if (3 / 6 <= h && h < 4 / 6) {
    r = 0
    g = x
    b = c
  } else if (4 / 6 <= h && h < 5 / 6) {
    r = x
    g = 0
    b = c
  } else if (5 / 6 <= h && h < 1) {
    r = c
    g = 0
    b = x
  }

  r = Math.round((r + m) * 255)
  g = Math.round((g + m) * 255)
  b = Math.round((b + m) * 255)

  const toHex = (c: number) => c.toString(16).padStart(2, '0')
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

/**
 * Generate a complete color palette from a base color
 */
export function generateColorPalette(baseColor: string) {
  const [h, s, l] = hexToHsl(baseColor)

  return {
    50: hslToHex(h, Math.max(s - 40, 10), Math.min(l + 45, 95)),
    100: hslToHex(h, Math.max(s - 30, 15), Math.min(l + 40, 90)),
    200: hslToHex(h, Math.max(s - 20, 20), Math.min(l + 30, 80)),
    300: hslToHex(h, Math.max(s - 10, 25), Math.min(l + 20, 70)),
    400: hslToHex(h, s, Math.min(l + 10, 60)),
    500: baseColor, // Base color
    600: hslToHex(h, Math.min(s + 5, 100), Math.max(l - 10, 40)),
    700: hslToHex(h, Math.min(s + 10, 100), Math.max(l - 20, 30)),
    800: hslToHex(h, Math.min(s + 15, 100), Math.max(l - 30, 20)),
    900: hslToHex(h, Math.min(s + 20, 100), Math.max(l - 40, 10)),
    950: hslToHex(h, Math.min(s + 25, 100), Math.max(l - 50, 5)),
  }
}

/**
 * Generate CSS custom properties for a color palette
 */
export function generateColorCSS(colorName: string, baseColor: string): string {
  const palette = generateColorPalette(baseColor)

  let css = `  --color-${colorName}: ${baseColor};\n`

  Object.entries(palette).forEach(([shade, color]) => {
    css += `  --color-${colorName}-${shade}: ${color};\n`
  })

  return css
}

/**
 * Generate complete theme CSS from business colors
 */
export function generateThemeCSS(colors: {
  primary: string
  secondary: string
  accent: string
  light: string
}): string {
  let css = '@theme {\n'

  css += generateColorCSS('primary', colors.primary)
  css += generateColorCSS('secondary', colors.secondary)
  css += generateColorCSS('accent', colors.accent)
  css += `  --color-brand-dark: ${colors.secondary};\n`
  css += `  --color-brand-light: ${colors.light};\n`

  css += '}\n'

  return css
}
