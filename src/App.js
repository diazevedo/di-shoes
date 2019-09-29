import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Reset } from 'styled-reset';
import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';
import Routes from './routes';
import './config/ReactotronConfig';
import store from './store';

import Header from './components/Header';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Reset />
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
