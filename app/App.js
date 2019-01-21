import React from 'react';
import { Provider } from 'react-redux';

import { store } from 'react-shared-redux';

import { BASE_API_URL } from './appConstants';
import { Home } from './src/scenes';


const App = () => {
  const reduxStore = store({}, BASE_API_URL);

  return (
    <Provider store={reduxStore}>
      <Home />
    </Provider>
  );
};

export default App;
