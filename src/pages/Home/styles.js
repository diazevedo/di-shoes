import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;

  li {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      width: 100%;
      max-width: 200px;
    }

    > strong {
      font-size: 1.6rem;
      line-height: 2rem;
      color: #333;
      margin-top: 0.5rem;
    }

    > span {
      font-size: 2.1rem;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      padding: 0;

      display: flex;
      align-items: center;
      transition: all 0.2s;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
          align-self: left;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;
      }
    }
  }
`;
