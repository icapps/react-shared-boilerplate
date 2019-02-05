import React from 'react';
import { Provider } from 'react-redux';

import store from '../shared/redux/createStore';
import { Home } from './src/scenes';


const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default App;
