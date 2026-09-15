import { observer } from 'mobx-react-lite';
import { Navigate, Outlet } from 'react-router';
import { userModel } from '@entities/user/index.ts';

export const RequireAuth = observer(function RequireAuth() {
  if (userModel.user === null) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
});
