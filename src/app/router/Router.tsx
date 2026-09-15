import { memo } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { HomePage } from '@pages/homePage';
import { LoginPage } from '@pages/loginPage';
import { RegisterPage } from '@pages/registerPage';
import { RedirectIfRegistered } from './ui/RedirectIfRegistered.tsx';
import { RequireAuth } from './ui/RequireAuth.tsx';
import { BasicLayout } from '@shared/components/basicLayout';

const Router = memo(function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <RedirectIfRegistered>
              <BasicLayout>
                <LoginPage />
              </BasicLayout>
            </RedirectIfRegistered>
          }
        />
        <Route
          path="/register"
          element={
            <RedirectIfRegistered>
              <BasicLayout>
                <RegisterPage />
              </BasicLayout>
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
