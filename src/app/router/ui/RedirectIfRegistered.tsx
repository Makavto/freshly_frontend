import { observer } from 'mobx-react-lite';
import type { ReactNode } from 'react';
import { Navigate } from 'react-router';
import { useUserStore } from '@entities/user/index.ts';

export const RedirectIfRegistered = observer(function RedirectIfRegistered({
  children,
}: {
  children: ReactNode;
}) {
  const userStore = useUserStore();

  if (userStore.isRegistered) {
    return <Navigate to="/" replace />;
  }

  return children;
});
