import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Container, ProductTable, Total } from './styles';

const Cart = ({ cart, dispatch }) => {
  const handleDeleteItem = productId => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: productId,
    });
  };

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>product</th>
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
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button">
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.priceFormatted}</strong>
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
          <strong>$1,000.90</strong>
        </Total>
      </footer>
    </Container>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object),
};

Cart.defaultProps = {
  cart: [],
};

const mapStateToProps = state => ({ cart: state.cart });

export default connect(mapStateToProps)(Cart);
