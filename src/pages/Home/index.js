import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import propTypes from 'prop-types';
import { ProductList } from './styles';
import formatPrice from '../../util/format';

import api from '../../services/api';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct = product => {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  };

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />

            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>

            <button
              type="button"
              onClick={() => this.handleAddProduct(product)}
            >
              <div>
                <MdAddShoppingCart color="#fff" size={16} />
                <span>3</span>
              </div>

              <span>add to cart</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

export default connect()(Home);

Home.propTypes = {
  dispatch: propTypes.func.isRequired,
};
