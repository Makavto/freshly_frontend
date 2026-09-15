import { observer } from 'mobx-react-lite';
import { Navigate, Outlet } from 'react-router';
import { useUserStore } from '@entities/user/index.ts';

export const RequireAuth = observer(function RequireAuth() {
  const userStore = useUserStore();

  if (userStore.user === null) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
});
