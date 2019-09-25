import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

const Home = () => {
  return (
    <ProductList>
      <li>
        <img src="" alt="" />

        <strong>Beautifull sneakers</strong>
        <span>$129.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart color="#fff" size={16} />
            <span>3</span>
          </div>

          {/* <MdAddShoppingCart color="#fff" size={16} />
          <span>3</span>
          <span>Add to cart</span> */}

          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <img src="" alt="" />

        <strong>Beautifull sneakers</strong>
        <span>$129.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart color="#fff" size={16} />
            <span>3</span>
          </div>

          {/* <MdAddShoppingCart color="#fff" size={16} />
          <span>3</span>
          <span>Add to cart</span> */}

          <span>Add to cart</span>
        </button>
      </li>
    </ProductList>
  );
};

export default Home;
