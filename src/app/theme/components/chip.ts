import type { Components, Theme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';
import type { ChipOwnerState } from '@mui/material/Chip';

/**
 * Заливка чипов — не сплошной цвет MUI по умолчанию, а мягкий пастельный тон
 * (используется для статусов "Свежий/Скоро истекает/Просрочен" и общих тегов).
 */
const softFilled = (main: string, dark: string) => ({
  backgroundColor: alpha(main, 0.14),
  color: dark,
  border: `1px solid ${alpha(main, 0.28)}`,
  '& .MuiChip-deleteIcon': { color: alpha(dark, 0.6), '&:hover': { color: dark } },
  '& .MuiChip-icon': { color: dark },
});

const colorStyle = (theme: Theme, color: ChipOwnerState['color']) => {
  switch (color) {
    case 'primary':
      return softFilled(theme.palette.primary.main, theme.palette.primary.dark);
    case 'success':
      return softFilled(theme.palette.success.main, theme.palette.success.dark);
    case 'warning':
      return softFilled(theme.palette.warning.dark, theme.palette.warning.dark);
    case 'error':
      return softFilled(theme.palette.error.main, theme.palette.error.dark);
    case 'info':
      return softFilled(theme.palette.info.main, theme.palette.info.dark);
    default:
      return softFilled(theme.palette.grey[500], theme.palette.text.primary);
  }
};

export const chip: Components<Theme>['MuiChip'] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      borderRadius: theme.radius.full,
      fontWeight: 600,
      fontSize: 12,
      ...(ownerState.variant === 'filled' && colorStyle(theme, ownerState.color)),
    }),
    outlined: ({ theme }) => ({
      borderColor: theme.palette.grey[200],
    }),
  },
};

export const badge: Components<Theme>['MuiBadge'] = {
  styleOverrides: {
    badge: ({ theme }) => ({
      fontWeight: 700,
      border: `2px solid ${theme.palette.background.paper}`,
    }),
  },
};
