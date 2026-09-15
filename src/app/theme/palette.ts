import type { PaletteOptions } from '@mui/material/styles';

/**
 * Примитивные цвета дизайн-системы Freshly.
 * Используются только для сборки семантической палитры ниже, напрямую в UI не применяются.
 */
export const primitives = {
  green: {
    50: '#F0F9F1',
    100: '#DCF0DE',
    200: '#BFE4C4',
    300: '#98D3A0',
    400: '#6FBE7C',
    500: '#4CA85B',
    600: '#3C8A49',
    700: '#2F6D39',
    800: '#24552C',
    900: '#1B4021',
  },
  neutral: {
    0: '#FFFFFF',
    25: '#FBFBF8',
    50: '#F6F5F2',
    100: '#EFEDE8',
    200: '#E2DFD8',
    300: '#CBC7BC',
    400: '#A8A398',
    500: '#858074',
    600: '#66625A',
    700: '#4C4941',
    800: '#34322C',
    900: '#1F1E1A',
  },
  yellow: {
    50: '#FBF3DC',
    100: '#F7E7B8',
    300: '#EFCB70',
    500: '#D9A625',
    700: '#A97C15',
    900: '#6B4D0D',
  },
  red: {
    50: '#FBE9E7',
    100: '#F5CCC7',
    300: '#E38F84',
    500: '#C85C4F',
    700: '#9C4137',
    900: '#692A23',
  },
  blue: {
    50: '#EAF1FA',
    100: '#CBDEF2',
    300: '#8FB4DE',
    500: '#4C7FB8',
    700: '#385F8A',
  },
} as const;

/**
 * Семантическая палитра. Статусы продуктов переиспользуют success/warning/error,
 * чтобы одни и те же токены работали и для карточек продуктов, и для форм/уведомлений.
 */
export const palette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: primitives.green[500],
    light: primitives.green[300],
    dark: primitives.green[700],
    contrastText: primitives.neutral[0],
  },
  secondary: {
    main: primitives.neutral[600],
    light: primitives.neutral[400],
    dark: primitives.neutral[800],
    contrastText: primitives.neutral[0],
  },
  // Статус «Свежий»
  success: {
    main: primitives.green[600],
    light: primitives.green[200],
    dark: primitives.green[800],
    contrastText: primitives.neutral[0],
  },
  // Статус «Скоро истекает»
  warning: {
    main: primitives.yellow[500],
    light: primitives.yellow[300],
    dark: primitives.yellow[700],
    contrastText: primitives.neutral[900],
  },
  // Статус «Просрочен»
  error: {
    main: primitives.red[500],
    light: primitives.red[300],
    dark: primitives.red[700],
    contrastText: primitives.neutral[0],
  },
  info: {
    main: primitives.blue[500],
    light: primitives.blue[300],
    dark: primitives.blue[700],
    contrastText: primitives.neutral[0],
  },
  grey: {
    50: primitives.neutral[50],
    100: primitives.neutral[100],
    200: primitives.neutral[200],
    300: primitives.neutral[300],
    400: primitives.neutral[400],
    500: primitives.neutral[500],
    600: primitives.neutral[600],
    700: primitives.neutral[700],
    800: primitives.neutral[800],
    900: primitives.neutral[900],
    A100: primitives.neutral[100],
    A200: primitives.neutral[200],
    A400: primitives.neutral[500],
    A700: primitives.neutral[700],
  },
  text: {
    primary: primitives.neutral[900],
    secondary: primitives.neutral[600],
    disabled: primitives.neutral[400],
  },
  divider: primitives.neutral[200],
  background: {
    default: primitives.neutral[25],
    paper: primitives.neutral[0],
  },
  action: {
    active: primitives.neutral[600],
    hover: 'rgba(76, 168, 91, 0.06)',
    selected: 'rgba(76, 168, 91, 0.1)',
    disabled: primitives.neutral[400],
    disabledBackground: primitives.neutral[100],
    focus: 'rgba(76, 168, 91, 0.16)',
  },
};
