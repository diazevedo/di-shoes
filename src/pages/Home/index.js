import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

const Home = () => {
  return (
    <ProductList>
      <li>
        <img
          src="https://media.hypedc.com/media/catalog/product/cache/1/image/750x/9df78eab33525d08d6e5fb8d27136e95/e/e/ee6355_blk_hy02.jpg"
          alt="Adidas original NMD 360 Toddler"
        />

        <strong>Beautifull sneakers</strong>
        <span>$129.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart color="#fff" size={16} />
            <span>3</span>
          </div>

          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://media.hypedc.com/media/catalog/product/cache/1/image/750x/9df78eab33525d08d6e5fb8d27136e95/e/e/ee6355_blk_hy02.jpg"
          alt="Adidas original NMD 360 Toddler"
        />

        <strong>Beautifull sneakers</strong>
        <span>$129.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart color="#fff" size={16} />
            <span>3</span>
          </div>

          <span>Add to cart</span>
        </button>
      </li>
    </ProductList>
  );
};

export default Home;
