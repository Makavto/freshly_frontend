import type { Shadows } from '@mui/material/styles';
import { primitives } from './palette';

const shadowColor = primitives.neutral[900];

const soft = (y: number, blur: number, alpha: number, spread = 0) =>
  `0px ${y}px ${blur}px ${spread}px ${hexToRgba(shadowColor, alpha)}`;

function hexToRgba(hex: string, alpha: number) {
  const n = parseInt(hex.replace('#', ''), 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/**
 * Именованные тени для точечного использования в компонентах (карточки, поповеры, модалки).
 */
export const customShadows = {
  xs: soft(1, 2, 0.05),
  sm: soft(2, 8, 0.07),
  md: soft(4, 16, 0.09),
  lg: soft(8, 24, 0.12),
  focus: `0px 0px 0px 3px ${hexToRgba(primitives.green[500], 0.25)}`,
} as const;

/**
 * Полная шкала MUI elevation (25 значений). Мягкая, без резких теней —
 * первые уровни почти незаметны, верхние используются только в модалках/меню.
 */
export const shadows: Shadows = [
  'none',
  customShadows.xs,
  customShadows.xs,
  customShadows.sm,
  customShadows.sm,
  customShadows.sm,
  customShadows.sm,
  customShadows.md,
  customShadows.md,
  customShadows.md,
  customShadows.md,
  customShadows.md,
  customShadows.md,
  customShadows.md,
  customShadows.md,
  customShadows.md,
  customShadows.lg,
  customShadows.lg,
  customShadows.lg,
  customShadows.lg,
  customShadows.lg,
  customShadows.lg,
  customShadows.lg,
  customShadows.lg,
  customShadows.lg,
];
