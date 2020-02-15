import styled, { keyframes } from 'styled-components';

const load = keyframes`
  0% {

    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  opacity: ${props => (props.show ? props.show : 1)};
  text-indent: -9999em;
  border-radius: 50%;
  transition: opacity 0.5s linear;

  background: linear-gradient(
    to right,
    #7159c1 10%,
    rgba(255, 255, 255, 0) 42%
  );

  position: relative;
  animation: ${load} 1.5s infinite linear;
  transform: translateZ(0);

  &:before {
    width: 50%;
    height: 50%;
    background: #7159c1;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }
  &:after {
    background: #fff;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;
