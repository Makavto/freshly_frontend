import { observer } from 'mobx-react-lite';
import { Link } from 'react-router';
import { userModel } from '@entities/user';
import { sessionModel } from '@entities/session';

export const HomePage = observer(function HomePage() {
  const user = userModel.user;

  const onLogout = () => {
    void sessionModel.logout();
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
      {userModel.isGuest ? (
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
