import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Reset } from 'styled-reset';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

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
        <ToastContainer autoClose={3000} />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
