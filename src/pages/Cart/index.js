import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

const Cart = () => {
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
          <tr>
            <td>
              <img
                src="https://media.hypedc.com/media/catalog/product/cache/1/image/750x/9df78eab33525d08d6e5fb8d27136e95/e/e/ee6355_blk_hy02.jpg"
                alt="Adidas original NMD 360 Toddler"
              />
            </td>
            <td>
              <strong>$258,10</strong>
              <span>Nice Adidas</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>$258,10</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://media.hypedc.com/media/catalog/product/cache/1/image/750x/9df78eab33525d08d6e5fb8d27136e95/e/e/ee6355_blk_hy02.jpg"
                alt="Adidas original NMD 360 Toddler"
              />
            </td>
            <td>
              <strong>$258,10</strong>
              <span>Nice Adidas</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>$258,10</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
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

export default Cart;
