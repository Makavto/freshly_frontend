import type { ThemeOptions } from '@mui/material/styles';

/**
 * Шкала скруглений. `shape.borderRadius` в MUI хранит только одно число,
 * поэтому полную шкалу пробрасываем через модульную аугментацию темы (см. augmentation.ts).
 */
export const radius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
} as const;

export const shape: ThemeOptions['shape'] = {
  borderRadius: radius.md,
};
