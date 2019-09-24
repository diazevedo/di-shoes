import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { Container, LinkHome, Cart } from './styles';

import logo from '../../assets/images/logo.svg';

const Header = () => (
  <Container>
    <LinkHome to="/">
      <img src={logo} alt="Logo Di Shoes" />
    </LinkHome>
    <Cart to="/cart">
      <MdShoppingBasket size={36} color="#fff" />
      <strong>Cart</strong>
      <span>0 Items</span>
    </Cart>
  </Container>
);

export default Header;
