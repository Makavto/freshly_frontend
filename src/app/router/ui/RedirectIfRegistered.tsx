import { observer } from 'mobx-react-lite';
import type { ReactNode } from 'react';
import { Navigate } from 'react-router';
import { userModel } from '@entities/user/index.ts';

export const RedirectIfRegistered = observer(function RedirectIfRegistered({
  children,
}: {
  children: ReactNode;
}) {
  if (userModel.isRegistered) {
    return <Navigate to="/" replace />;
  }

  return children;
});
