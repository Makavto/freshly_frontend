import { Link } from 'react-router';
import { LoginFeature } from '@features/loginFeature/index.ts';
import { LoginAsGuestFeature } from '@features/loginAsGuestFeature/index.ts';

export function LoginPage() {
  return (
    <main>
      <h1>Вход</h1>
      <LoginFeature />
      <LoginAsGuestFeature />
      <p>
        <Link to="/register">Регистрация</Link>
      </p>
    </main>
  );
}
