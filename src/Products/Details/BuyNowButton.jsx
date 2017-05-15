import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  height: 115px;
  text-align: center;
  text-transform: uppercase;
  position: fixed;
  bottom: 0;
  width: 100%;
  border: none;
  cursor: pointer;
  font-size: 32px;
  font-weight: bold;
  color: white;
  padding-top: 36px;
  padding-right: 390px;
  padding-bottom: 36px;
  padding-left: 0;
  text-align: center;
  background-image: linear-gradient(to right, #4949aa, #27275d);
  &:hover {
    background-image: linear-gradient(to right, #27275d, #4949aa);
  }
`;

export default () => <Button>Buy now</Button>;
