import type { Components, Theme } from '@mui/material/styles';

const outlinedFieldRoot = (theme: Theme, notchedOutlineClass: string) => ({
  borderRadius: theme.radius.sm,
  backgroundColor: theme.palette.background.paper,
  [`& .${notchedOutlineClass}`]: {
    borderColor: theme.palette.grey[200],
  },
  [`&:hover .${notchedOutlineClass}`]: {
    borderColor: theme.palette.grey[300],
  },
  [`&.Mui-focused .${notchedOutlineClass}`]: {
    borderColor: theme.palette.primary.main,
    borderWidth: 1.5,
  },
  [`&.Mui-error .${notchedOutlineClass}`]: {
    borderColor: theme.palette.error.main,
  },
  '&.Mui-disabled': {
    backgroundColor: theme.palette.grey[50],
  },
});

const outlinedFieldInput = (theme: Theme) => ({
  '&::placeholder': {
    color: theme.palette.text.disabled,
    opacity: 0.8,
  },
});

export const textField: Components<Theme>['MuiTextField'] = {
  defaultProps: {
    variant: 'outlined',
    size: 'medium',
  },
};

export const pickersTextField: Components<Theme>['MuiPickersTextField'] = {
  defaultProps: {
    variant: 'outlined',
    size: 'medium',
  },
};

export const outlinedInput: Components<Theme>['MuiOutlinedInput'] = {
  styleOverrides: {
    root: ({ theme }) => outlinedFieldRoot(theme, 'MuiOutlinedInput-notchedOutline'),
    input: ({ theme }) => outlinedFieldInput(theme),
  },
};

export const pickersOutlinedInput: Components<Theme>['MuiPickersOutlinedInput'] = {
  styleOverrides: {
    root: ({ theme }) =>
      outlinedFieldRoot(theme, 'MuiPickersOutlinedInput-notchedOutline'),
    input: ({ theme }) => outlinedFieldInput(theme),
  },
};

export const inputLabel: Components<Theme>['MuiInputLabel'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.text.secondary,
      '&.Mui-focused': { color: theme.palette.primary.main },
      '&.Mui-error': { color: theme.palette.error.main },
    }),
  },
};

export const formHelperText: Components<Theme>['MuiFormHelperText'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      marginLeft: 0,
      marginTop: theme.spacing(0.5),
      fontSize: 12,
    }),
  },
};

export const select: Components<Theme>['MuiSelect'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: theme.radius.sm,
    }),
  },
};

export const menuItem: Components<Theme>['MuiMenuItem'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: theme.radius.xs,
      marginInline: theme.spacing(0.5),
      '&.Mui-selected': {
        backgroundColor: `${theme.palette.primary.main}1a`,
      },
    }),
  },
};

export const menu: Components<Theme>['MuiMenu'] = {
  styleOverrides: {
    paper: ({ theme }) => ({
      borderRadius: theme.radius.md,
      boxShadow: theme.customShadows.md,
      border: `1px solid ${theme.palette.grey[100]}`,
      padding: theme.spacing(0.5),
    }),
  },
};
