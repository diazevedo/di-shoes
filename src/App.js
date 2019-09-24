import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Reset } from 'styled-reset';

import GlobalStyle from './styles/global';
import Routes from './routes';

import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Reset />
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
};

export default App;
