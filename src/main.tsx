import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@app/App.tsx';
import { StoreProvider } from '@app/providers/StoreProvider.tsx';
import { rootStore } from '@app/stores/rootStore.ts';
import { setupAuthInterceptors } from '@entities/session/index.ts';
import { theme } from './app/theme';
import './app/theme/fonts';

setupAuthInterceptors({
  refresh: () => rootStore.auth.refresh(),
  clearSession: () => {
    rootStore.auth.clearSession();
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StoreProvider>
        <App />
      </StoreProvider>
    </ThemeProvider>
  </StrictMode>,
);
