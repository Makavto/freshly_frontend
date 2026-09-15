import type { Components, Theme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

export const dialog: Components<Theme>['MuiDialog'] = {
  styleOverrides: {
    paper: ({ theme }) => ({
      borderRadius: theme.radius.xl,
      boxShadow: theme.customShadows.lg,
      padding: theme.spacing(0.5),
    }),
  },
};

export const dialogTitle: Components<Theme>['MuiDialogTitle'] = {
  styleOverrides: {
    root: ({ theme }) => ({ ...theme.typography.h4, padding: theme.spacing(2.5, 3, 1) }),
  },
};

export const dialogContent: Components<Theme>['MuiDialogContent'] = {
  styleOverrides: {
    root: ({ theme }) => ({ padding: theme.spacing(1, 3) }),
  },
};

export const dialogActions: Components<Theme>['MuiDialogActions'] = {
  styleOverrides: {
    root: ({ theme }) => ({ padding: theme.spacing(2, 3, 2.5), gap: theme.spacing(1) }),
  },
};

export const backdrop: Components<Theme>['MuiBackdrop'] = {
  styleOverrides: {
    root: ({ theme }) => ({ backgroundColor: alpha(theme.palette.grey[900], 0.4) }),
  },
};

const alertColor = (theme: Theme, color: string) => {
  const palette = theme.palette[color as 'success' | 'warning' | 'error' | 'info'];
  return { backgroundColor: palette.dark, color: theme.palette.common.white };
};

/** Тосты/уведомления об успехе, ошибке API, предупреждении — единый пастельный стиль. */
export const alert: Components<Theme>['MuiAlert'] = {
  defaultProps: { variant: 'filled' },
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      borderRadius: theme.radius.md,
      alignItems: 'center',
      ...(ownerState.variant === 'filled' &&
        ownerState.color &&
        alertColor(theme, ownerState.color)),
    }),
  },
};

export const snackbarContent: Components<Theme>['MuiSnackbarContent'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: theme.radius.md,
      backgroundColor: theme.palette.grey[900],
    }),
  },
};

export const tooltip: Components<Theme>['MuiTooltip'] = {
  styleOverrides: {
    tooltip: ({ theme }) => ({
      backgroundColor: theme.palette.grey[800],
      borderRadius: theme.radius.xs,
      fontSize: 12,
      padding: theme.spacing(0.75, 1),
    }),
    arrow: ({ theme }) => ({ color: theme.palette.grey[800] }),
  },
};

export const linearProgress: Components<Theme>['MuiLinearProgress'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: theme.radius.full,
      height: 6,
      backgroundColor: theme.palette.grey[100],
    }),
    bar: ({ theme }) => ({ borderRadius: theme.radius.full }),
  },
};

export const skeleton: Components<Theme>['MuiSkeleton'] = {
  styleOverrides: {
    root: ({ theme }) => ({ backgroundColor: theme.palette.grey[100] }),
  },
};
