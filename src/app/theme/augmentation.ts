import type {} from '@mui/x-date-pickers/themeAugmentation';
import type { radius } from './shape';
import type { customShadows } from './shadows';

type Radius = typeof radius;
type CustomShadows = typeof customShadows;

/**
 * Расширяем тему MUI собственными токенами дизайн-системы:
 * полной шкалой радиусов и именованными тенями.
 */
declare module '@mui/material/styles' {
  interface Theme {
    radius: Radius;
    customShadows: CustomShadows;
  }

  interface ThemeOptions {
    radius?: Radius;
    customShadows?: CustomShadows;
  }
}

export {};
