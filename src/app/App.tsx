import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from './providers/useStore.ts';
import Router from './router/Router.tsx';

const App = observer(function App() {
  const { auth } = useStore();

  useEffect(() => {
    void auth.bootstrap();
  }, [auth]);

  if (!auth.isBootstrapped) {
    return null;
  }

  return <Router />;
});

export default App;
