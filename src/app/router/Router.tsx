import { memo } from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router';
import { LoginPage } from '@pages/loginPage';
import { RegisterPage } from '@pages/registerPage';
import { ProductsPage } from '@pages/productsPage';
import { StatisticsPage } from '@pages/statisticsPage';
import { ProfilePage } from '@pages/profilePage';
import { RedirectIfRegistered } from './ui/RedirectIfRegistered.tsx';
import { RequireAuth } from './ui/RequireAuth.tsx';
import { BasicLayout } from '@shared/components/basicLayout';
import { MobileNavigationWidget } from '@widgets/mobileNavigationWidget/index.ts';
import { RoutesEnum } from '@shared/utils';
import { CreateProductPage } from '@pages/createProductPage';
import { AppLayout } from '@shared/components/appLayout';

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
          <Route
            element={
              <AppLayout>
                <Outlet />
                <MobileNavigationWidget />
              </AppLayout>
            }
          >
            <Route
              path="/"
              element={<Navigate to={RoutesEnum.PRODUCTS} replace />}
            />
            <Route path={RoutesEnum.PRODUCTS}  >
              <Route index element={<ProductsPage />} />
              <Route path={RoutesEnum.CREATE} element={<CreateProductPage />} />
            </Route>
            <Route path={RoutesEnum.STATISTICS} element={<StatisticsPage />} />
            <Route path={RoutesEnum.PROFILE} element={<ProfilePage />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
});

export default Router;
