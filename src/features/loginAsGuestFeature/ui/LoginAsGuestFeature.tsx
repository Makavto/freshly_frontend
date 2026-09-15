import { useState } from 'react';
import { useNavigate } from 'react-router';
import { getApiError } from '@shared/api/index.ts';
import { useAuthStore } from '@entities/session/index.ts';
import { submitLoginAsGuest } from '../model/submitLoginAsGuest.ts';

export function LoginAsGuestFeature() {
  const authStore = useAuthStore();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onGuest = async () => {
    setError(null);
    setIsSubmitting(true);
    try {
      await submitLoginAsGuest(authStore);
      navigate('/');
    } catch (submitError) {
      setError(getApiError(submitError).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button type="button" onClick={() => void onGuest()} disabled={isSubmitting}>
        Войти как гость
      </button>
      {error ? <p>{error}</p> : null}
    </>
  );
}
