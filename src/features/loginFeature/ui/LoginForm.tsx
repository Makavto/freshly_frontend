import { useNavigate } from 'react-router';
import { loginFormVM, type ILoginForm } from '../model/loginFormVM.ts';
import { useForm } from 'react-hook-form';
import { Col } from '@shared/components/Col';
import { Button, TextField, Typography, useTheme } from '@mui/material';
import { observer } from 'mobx-react-lite';

export const LoginForm = observer(function LoginForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: ILoginForm) => {
    loginFormVM
      .submitLogin(values.email, values.password)
      .then(() => navigate('/'))
      .catch((error) => {
        console.error(error);
      });
  };

  const theme = useTheme();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Col sx={{ gap: 4 }}>
        <Col sx={{ position: 'relative', gap: 2 }}>
          <TextField
            {...register('email', {
              required: 'E-mail обязателен',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Некорректный e-mail',
              },
            })}
            label="E-mail"
            error={!!errors.email || !!loginFormVM.error}
            helperText={errors.email?.message}
          />
          <TextField
            {...register('password', {
              required: 'Пароль обязателен',
              minLength: {
                value: 8,
                message: 'Пароль должен быть не менее 8 символов',
              },
            })}
            label="Пароль"
            type="password"
            error={!!errors.password || !!loginFormVM.error}
            helperText={errors.password?.message}
          />

          {loginFormVM.error && (
            <Typography
              color="error"
              sx={{
                fontSize: 12,
                position: 'absolute',
                top: `calc(100% + ${theme.spacing(1)})`,
                left: 0,
              }}
            >
              {loginFormVM.error}
            </Typography>
          )}
        </Col>

        <Button type="submit" variant="contained">
          Войти
        </Button>
      </Col>
    </form>
  );
});
