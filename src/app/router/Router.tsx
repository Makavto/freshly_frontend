import { memo } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { HomePage } from '@pages/homePage/index.ts';
import { LoginPage } from '@pages/loginPage/index.ts';
import { RegisterPage } from '@pages/registerPage/index.ts';
import { RedirectIfRegistered } from './ui/RedirectIfRegistered.tsx';
import { RequireAuth } from './ui/RequireAuth.tsx';

const Router = memo(function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <RedirectIfRegistered>
              <LoginPage />
            </RedirectIfRegistered>
          }
        />
        <Route
          path="/register"
          element={
            <RedirectIfRegistered>
              <RegisterPage />
            </RedirectIfRegistered>
          }
        />
        <Route element={<RequireAuth />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
});

export default Router;
