import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { ProductList, LoaderHome } from './styles';
import formatPrice from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

import api from '../../services/api';

class Home extends Component {
  state = {
    products: [],
    loadingControl: 0,
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
      amount: 0,
    }));

    this.setState({ products: data });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  increaseCounterLoading = () => {
    this.setState(prevState => ({
      loadingControl: prevState.loadingControl + 1,
    }));
  };

  render() {
    const { products, loadingControl } = this.state;
    const { amount } = this.props;

    return (
      <ProductList show={loadingControl === products.length ? '1' : '0'}>
        {products.map(product => (
          <li key={product.id}>
            <LoaderHome
              play={loadingControl < products.length ? 'play' : 'paused'}
            />

            <img
              src={product.image}
              alt={product.title}
              onLoad={this.increaseCounterLoading}
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
