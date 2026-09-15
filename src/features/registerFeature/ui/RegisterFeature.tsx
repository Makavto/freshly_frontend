import { TextField } from '@mui/material';
import { Col } from '@shared/components/Col';
import { getApiError } from '@shared/api/index.ts';
import { useAuthStore } from '@entities/session/index.ts';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { submitRegister } from '../model/submitRegister.ts';

type RegisterFormValues = {
  email: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
};

export function RegisterFeature() {
  const authStore = useAuthStore();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<RegisterFormValues>();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (values: RegisterFormValues) => {
    if (values.password !== values.passwordConfirm) {
      setError('Пароли не совпадают');
      return;
    }

    setError(null);
    setIsSubmitting(true);
    try {
      await submitRegister(authStore, {
        email: values.email,
        nickname: values.nickname,
        password: values.password,
      });
      navigate('/');
    } catch (submitError) {
      setError(getApiError(submitError).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={(event) => void handleSubmit(onSubmit)(event)}>
      <Col sx={{ gap: 2 }}>
        <TextField {...register('email')} label="E-mail" />
        <TextField {...register('nickname')} label="Имя пользователя" />
        <TextField {...register('password')} label="Пароль" type="password" />
        <TextField
          {...register('passwordConfirm')}
          label="Повторите пароль"
          type="password"
        />
        <button type="submit" disabled={isSubmitting}>
          Зарегистрироваться
        </button>
        {error ? <p>{error}</p> : null}
      </Col>
    </form>
  );
}
