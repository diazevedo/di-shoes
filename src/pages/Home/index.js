import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { ProductList } from './styles';
import formatPrice from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

import api from '../../services/api';

class Home extends Component {
  state = {
    products: [],
    loading: false,
    imageStatus: 'LOADING',
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
      amount: 0,
    }));

    this.setState({ products: data, loading: false });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  handleImageErrored() {
    this.setState({ imageStatus: 'failed to load' });
  }

  handleImageLoaded() {
    this.setState({ imageStatus: 'loaded' });
  }

  render() {
    const { products, loading } = this.state;
    const { amount } = this.props;

    return loading ? (
      <p>Loading</p>
    ) : (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img
              onLoad={() => this.handleImageLoaded}
              onError={() => this.handleImageErrored}
              src={product.image}
              loading="lazy"
              alt={product.title}
            />

            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>

            <button
              type="button"
              onClick={() => this.handleAddProduct(product.id)}
            >
              <div>
                <MdAddShoppingCart color="#fff" size={16} />
                <span>{amount[product.id] || 0}</span>
              </div>

              <span>add to cart</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

Home.propTypes = {
  addToCartRequest: PropTypes.func.isRequired,
  amount: PropTypes.shape({}),
};

Home.defaultProps = {
  amount: {},
};

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
