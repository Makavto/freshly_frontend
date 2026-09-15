import type { Components, Theme } from '@mui/material/styles';

export const paper: Components<Theme>['MuiPaper'] = {
  defaultProps: { elevation: 0 },
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundImage: 'none',
      borderRadius: theme.radius.lg,
    }),
    outlined: ({ theme }) => ({
      borderColor: theme.palette.grey[200],
    }),
  },
};

export const card: Components<Theme>['MuiCard'] = {
  defaultProps: { elevation: 0 },
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: theme.radius.lg,
      border: `1px solid ${theme.palette.grey[100]}`,
      boxShadow: theme.customShadows.xs,
      transition: theme.transitions.create(['box-shadow', 'border-color']),
      '&:hover': {
        boxShadow: theme.customShadows.sm,
        borderColor: theme.palette.grey[200],
      },
    }),
  },
};

export const cardContent: Components<Theme>['MuiCardContent'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(2),
      '&:last-child': { paddingBottom: theme.spacing(2) },
    }),
  },
};

export const cardHeader: Components<Theme>['MuiCardHeader'] = {
  styleOverrides: {
    root: ({ theme }) => ({ padding: theme.spacing(2, 2, 0) }),
    title: ({ theme }) => ({ ...theme.typography.h6 }),
    subheader: ({ theme }) => ({ ...theme.typography.body2, color: theme.palette.text.secondary }),
  },
};

export const cardActions: Components<Theme>['MuiCardActions'] = {
  styleOverrides: {
    root: ({ theme }) => ({ padding: theme.spacing(2) }),
  },
};
