import type { TypographyVariantsOptions } from '@mui/material/styles';

/**
 * Типографика на Inter. Масштаб подобран под мобильный и десктопный UI:
 * h1/h2 — крупные заголовки экранов, h5/h6 — заголовки карточек и секций.
 */
export const typography: TypographyVariantsOptions = {
  fontFamily: [
    'Inter',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ].join(','),
  fontWeightLight: 400,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: { fontSize: 32, lineHeight: 40 / 32, fontWeight: 700, letterSpacing: -0.2 },
  h2: { fontSize: 28, lineHeight: 36 / 28, fontWeight: 600, letterSpacing: -0.2 },
  h3: { fontSize: 22, lineHeight: 30 / 22, fontWeight: 600 },
  h4: { fontSize: 18, lineHeight: 26 / 18, fontWeight: 600 },
  h5: { fontSize: 16, lineHeight: 22 / 16, fontWeight: 600 },
  h6: { fontSize: 14, lineHeight: 20 / 14, fontWeight: 600 },
  subtitle1: { fontSize: 16, lineHeight: 24 / 16, fontWeight: 500 },
  subtitle2: { fontSize: 14, lineHeight: 20 / 14, fontWeight: 500 },
  body1: { fontSize: 16, lineHeight: 24 / 16, fontWeight: 400 },
  body2: { fontSize: 14, lineHeight: 20 / 14, fontWeight: 400 },
  caption: { fontSize: 12, lineHeight: 16 / 12, fontWeight: 400 },
  overline: {
    fontSize: 11,
    lineHeight: 14 / 11,
    fontWeight: 600,
    letterSpacing: 0.4,
    textTransform: 'uppercase',
  },
  button: {
    fontSize: 14,
    lineHeight: 20 / 14,
    fontWeight: 600,
    textTransform: 'none',
  },
};
