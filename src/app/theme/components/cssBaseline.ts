import type { Components, Theme } from '@mui/material/styles';

export const cssBaseline: Components<Theme>['MuiCssBaseline'] = {
  styleOverrides: (theme) => ({
    html: { WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' },
    body: { backgroundColor: theme.palette.background.default },
    '*::-webkit-scrollbar': { width: 8, height: 8 },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.grey[300],
      borderRadius: theme.radius.full,
    },
  }),
};
