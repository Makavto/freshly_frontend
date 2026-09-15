import { createTheme } from '@mui/material/styles';
import './augmentation';
import { palette } from './palette';
import { typography } from './typography';
import { shape, radius } from './shape';
import { shadows, customShadows } from './shadows';
import { spacingUnit } from './spacing';
import { components } from './components';

export const theme = createTheme({
  palette,
  typography,
  shape,
  shadows,
  spacing: spacingUnit,
  radius,
  customShadows,
  components,
});

export { radius } from './shape';
export { space, spacingUnit } from './spacing';
export { customShadows } from './shadows';
export { primitives } from './palette';
