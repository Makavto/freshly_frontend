import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Router from './router/Router.tsx';
import { sessionModel } from '@entities/session';

const App = observer(function App() {
  useEffect(() => {
    sessionModel.bootstrap();
  }, []);

  if (!sessionModel.isBootstrapped) {
    return null;
  }

  return <Router />;
});

export default App;
