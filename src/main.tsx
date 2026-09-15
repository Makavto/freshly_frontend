import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@app/App.tsx';
import { sessionModel, setupAuthInterceptors } from '@entities/session/index.ts';
import { theme } from './app/theme';
import './app/theme/fonts';

setupAuthInterceptors({
  refresh: () => sessionModel.refresh(),
  clearSession: () => {
    sessionModel.clearSession();
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
