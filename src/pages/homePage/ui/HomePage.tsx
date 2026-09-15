import { observer } from 'mobx-react-lite';
import { Link } from 'react-router';
import { useAuthStore } from '@entities/session/index.ts';
import { useUserStore } from '@entities/user/index.ts';

export const HomePage = observer(function HomePage() {
  const authStore = useAuthStore();
  const userStore = useUserStore();
  const user = userStore.user;

  const onLogout = () => {
    void authStore.logout();
  };

  return (
    <main>
      <h1>Freshly</h1>
      {user ? (
        <p>
          {user.nickname ?? user.email ?? `id ${user.id}`}
          {user.isGuest ? ' (гость)' : ''}
        </p>
      ) : null}
      {userStore.isGuest ? (
        <p>
          <Link to="/register">Создать аккаунт</Link>
        </p>
      ) : null}
      <button type="button" onClick={onLogout}>
        Выйти
      </button>
    </main>
  );
});
