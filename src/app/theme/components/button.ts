import type { Components, Theme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    soft: true;
  }
}

export const button: Components<Theme>['MuiButton'] = {
  defaultProps: {
    disableElevation: true,
    disableRipple: false,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: theme.radius.md,
      fontWeight: theme.typography.fontWeightBold ?? 600,
      paddingInline: theme.spacing(2),
      paddingBlock: theme.spacing(1.25),
    }),
    sizeSmall: ({ theme }) => ({
      paddingInline: theme.spacing(1.5),
      paddingBlock: theme.spacing(1),
      fontSize: 13,
    }),
    sizeLarge: ({ theme }) => ({
      paddingInline: theme.spacing(3),
      paddingBlock: theme.spacing(1.5),
      fontSize: 17,
    }),
    text: ({ theme }) => ({
      '&:hover': {
        backgroundColor: alpha(theme.palette.primary.main, 0.06),
      },
    }),
  },
  variants: [
    {
      // Мягкая заливка — для второстепенных действий, не требующих акцента контурной или контрастной кнопки
      props: { variant: 'soft' },
      style: ({ theme }) => ({
        backgroundColor: alpha(theme.palette.primary.main, 0.1),
        color: theme.palette.primary.dark,
        '&:hover': { backgroundColor: alpha(theme.palette.primary.main, 0.18) },
      }),
    },
    {
      props: { variant: 'soft', color: 'error' },
      style: ({ theme }) => ({
        backgroundColor: alpha(theme.palette.error.main, 0.1),
        color: theme.palette.error.dark,
        '&:hover': { backgroundColor: alpha(theme.palette.error.main, 0.18) },
      }),
    },
  ],
};
