import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import formatPrice from '../../util/format';
import { Container, ProductTable, Total } from './styles';

import * as CartActions from '../../store/modules/cart/actions';

const Cart = ({ cart, removeFromCart, updateAmount, total }) => {
  const handleDeleteItem = productId => {
    removeFromCart(productId);
  };

  const increment = ({ id, amount }) => updateAmount(id, amount + 1);
  const decrement = ({ id, amount }) => updateAmount(id, amount - 1);

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th> product</th>
            <th>quantity</th>
            <th>subtotal</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {cart.map(product => (
            <tr>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.priceFormatted}</strong>
                <span>{product.title}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(product)}>
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button" onClick={() => increment(product)}>
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subTotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => handleDeleteItem(product.id)}
                >
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">proceed to checkout</button>
        <Total>
          <span>total</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object),
  removeFromCart: PropTypes.func.isRequired,
  updateAmount: PropTypes.func.isRequired,
};

Cart.defaultProps = {
  cart: [],
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subTotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
