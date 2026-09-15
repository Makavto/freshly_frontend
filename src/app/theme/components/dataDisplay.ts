import type { Components, Theme } from '@mui/material/styles';

export const avatar: Components<Theme>['MuiAvatar'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.grey[100],
      color: theme.palette.text.secondary,
      fontWeight: 600,
    }),
  },
};

export const listItemIcon: Components<Theme>['MuiListItemIcon'] = {
  styleOverrides: {
    root: ({ theme }) => ({ minWidth: 36, color: theme.palette.text.secondary }),
  },
};

export const circularProgress: Components<Theme>['MuiCircularProgress'] = {
  defaultProps: { color: 'primary' },
};

export const container: Components<Theme>['MuiContainer'] = {
  defaultProps: { maxWidth: 'lg' },
};

export const link: Components<Theme>['MuiLink'] = {
  defaultProps: { underline: 'hover' },
  styleOverrides: {
    root: ({ theme }) => ({ color: theme.palette.success.dark, fontWeight: 500, cursor: 'pointer' }),
  },
};
