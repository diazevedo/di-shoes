import { createGlobalStyle } from 'styled-components';

import background from '../assets/images/background-image.svg';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body{
    background: #191920 url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased;
    font-size: 1.4rem;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
    box-sizing: border-box;
  }

  button, a {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;
