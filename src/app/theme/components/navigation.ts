import type { Components, Theme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';
import { BOTTOM_MENU_HEIGHT } from '@shared/utils';

export const appBar: Components<Theme>['MuiAppBar'] = {
  defaultProps: { elevation: 0, color: 'inherit' },
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.background.paper,
      borderBottom: `1px solid ${theme.palette.grey[100]}`,
      color: theme.palette.text.primary,
    }),
  },
};

export const toolbar: Components<Theme>['MuiToolbar'] = {
  styleOverrides: {
    root: ({ theme }) => ({ gap: theme.spacing(1.5) }),
  },
};

/** Нижняя навигация — используется на мобильных ширинах (< md). */
export const bottomNavigation: Components<Theme>['MuiBottomNavigation'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      height: BOTTOM_MENU_HEIGHT,
      backgroundColor: theme.palette.background.paper,
      borderTop: `1px solid ${theme.palette.grey[100]}`,
      boxShadow: theme.shadows[8],
    }),
  },
};

export const bottomNavigationAction: Components<Theme>['MuiBottomNavigationAction'] =
  {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.text.secondary,
        '&.Mui-selected': {
          color: theme.palette.primary.main,
        },
      }),
      label: {
        fontSize: 14,
        '&.Mui-selected': { fontSize: 14 },
      },
    },
  };

/** Боковая навигация — десктопная адаптация вместо нижнего меню. */
export const drawer: Components<Theme>['MuiDrawer'] = {
  styleOverrides: {
    paper: ({ theme }) => ({
      backgroundColor: theme.palette.background.paper,
      borderRight: `1px solid ${theme.palette.grey[100]}`,
    }),
  },
};

export const listItemButton: Components<Theme>['MuiListItemButton'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: theme.radius.sm,
      marginBlock: 2,
      color: theme.palette.text.secondary,
      '&:hover': { backgroundColor: alpha(theme.palette.primary.main, 0.06) },
      '&.Mui-selected': {
        backgroundColor: alpha(theme.palette.primary.main, 0.1),
        color: theme.palette.primary.dark,
        '&:hover': { backgroundColor: alpha(theme.palette.primary.main, 0.14) },
      },
    }),
  },
};

export const tabs: Components<Theme>['MuiTabs'] = {
  styleOverrides: {
    indicator: ({ theme }) => ({
      backgroundColor: theme.palette.primary.main,
      height: 2.5,
      borderRadius: theme.radius.full,
    }),
  },
};

export const tab: Components<Theme>['MuiTab'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      textTransform: 'none',
      fontWeight: 600,
      minWidth: 'auto',
      color: theme.palette.text.secondary,
      '&.Mui-selected': { color: theme.palette.primary.main },
    }),
  },
};

export const divider: Components<Theme>['MuiDivider'] = {
  styleOverrides: {
    root: ({ theme }) => ({ borderColor: theme.palette.grey[200] }),
  },
};
