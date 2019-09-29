import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Container, LinkHome, Cart } from './styles';
import logo from '../../assets/images/logo.svg';

const Header = ({ cartSize }) => {
  return (
    <Container>
      <LinkHome to="/">
        <img src={logo} alt="Logo Di Shoes" />
      </LinkHome>
      <Cart to="/cart">
        <MdShoppingBasket size={36} color="#fff" />
        <strong>Cart</strong>
        <span>{cartSize} Items</span>
      </Cart>
    </Container>
  );
};

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);

Header.propTypes = {
  cartSize: propTypes.number.isRequired,
};
