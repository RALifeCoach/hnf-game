import * as React from 'react';
import Login from './components/login-usage';
import { Provider } from 'react-redux';

import store from './store';

interface iProps {
  cookies: any
}

const App: React.FC<iProps> = props => (
  <Provider store={store}>
    <Login />
  </Provider>
);

export default App;
