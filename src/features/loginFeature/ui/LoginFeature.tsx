import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router';
import { getApiError } from '@shared/api/index.ts';
import { useAuthStore } from '@entities/session/index.ts';
import { submitLogin } from '../model/submitLogin.ts';

export function LoginFeature() {
  const authStore = useAuthStore();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);
    try {
      await submitLogin(authStore, { email, password });
      navigate('/');
    } catch (submitError) {
      setError(getApiError(submitError).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={(event) => void onSubmit(event)}>
      <label>
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </label>
      <label>
        Пароль
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </label>
      <button type="submit" disabled={isSubmitting}>
        Войти
      </button>
      {error ? <p>{error}</p> : null}
    </form>
  );
}
