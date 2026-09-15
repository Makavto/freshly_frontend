import { Button, TextField, Typography, useTheme } from '@mui/material';
import { Col } from '@shared/components/Col';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { registerFormVM, type IRegisterForm } from '../model/registerFormVM';
import { observer } from 'mobx-react-lite';

export const RegisterForm = observer(function RegisterForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IRegisterForm>({
    defaultValues: {
      email: '',
      nickname: '',
      password: '',
      passwordConfirm: '',
    },
  });

  const onSubmit = (values: IRegisterForm) => {
    registerFormVM
      .submitRegister(values)
      .then(() => navigate('/'))
      .catch((error) => {
        console.error(error);
      });
  };

  const theme = useTheme();

  return (
    <form onSubmit={(event) => void handleSubmit(onSubmit)(event)}>
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
            error={!!errors.email || !!registerFormVM.error}
            helperText={errors.email?.message}
          />
          <TextField
            {...register('nickname', {
              required: 'Имя пользователя обязательно',
              minLength: {
                value: 3,
                message: 'Имя пользователя должно быть не менее 3 символов',
              },
            })}
            label="Имя пользователя"
            error={!!errors.nickname || !!registerFormVM.error}
            helperText={errors.nickname?.message}
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
            error={!!errors.password || !!registerFormVM.error}
            helperText={errors.password?.message}
          />
          <TextField
            {...register('passwordConfirm', {
              required: 'Повторите пароль',
              validate: (value) =>
                value === watch('password') || 'Пароли не совпадают',
            })}
            label="Повторите пароль"
            type="password"
            error={!!errors.passwordConfirm || !!registerFormVM.error}
            helperText={errors.passwordConfirm?.message}
          />

          {registerFormVM.error && (
            <Typography
              color="error"
              sx={{
                fontSize: 12,
                position: 'absolute',
                top: `calc(100% + ${theme.spacing(1)})`,
                left: 0,
              }}
            >
              {registerFormVM.error}
            </Typography>
          )}
        </Col>
        <Button
          type="submit"
          disabled={registerFormVM.isPending}
          variant="contained"
        >
          Зарегистрироваться
        </Button>
      </Col>
    </form>
  );
});
