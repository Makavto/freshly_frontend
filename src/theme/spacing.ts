/**
 * Базовая единица spacing — 8px (значение MUI по умолчанию, задано явно для наглядности).
 * `theme.spacing(n)` умножает на неё, поэтому шкала ниже — это множители для `theme.spacing()`.
 */
export const spacingUnit = 8;

export const space = {
  '2xs': 0.25, // 2px
  xs: 0.5, // 4px
  sm: 1, // 8px
  md: 1.5, // 12px
  lg: 2, // 16px
  xl: 2.5, // 20px
  '2xl': 3, // 24px
  '3xl': 4, // 32px
  '4xl': 5, // 40px
  '5xl': 6, // 48px
  '6xl': 8, // 64px
} as const;
