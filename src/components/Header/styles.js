import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

  h1 {
    color: #fff;
  }
`;

export const LinkHome = styled(Link)``;

export const Cart = styled(Link)`
  width: 140px;
  text-align: right;

  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  svg {
    margin-left: 10px;
    float: right;
  }

  strong {
    font-size: 1.4rem;
    width: 80px;
    color: #fff;
    margin-top: 5px;
  }

  span {
    font-size: 1.2rem;
    display: block;
    color: #999;
    margin-top: 5px;
  }
`;
