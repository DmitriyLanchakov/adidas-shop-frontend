import React from 'react';
import styled from 'styled-components';
import { Item } from './styled';

const BigImage = styled.img`
  display: block;
  width: 80%;
  margin: 0 auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  margin-left: 30px;
`;

export default () => (
  <div>
    <div>
      <BigImage src={require('./../../../assets/img/shoes-3-big.jpg')} alt="shoe" />
    </div>
    <Container>
      <Item src={require('./../../../assets/img/shoes-3-small1.jpg')} alt="shoe" />
      <Item src={require('./../../../assets/img/shoes-3-small2.jpg')} alt="shoe" />
      <Item src={require('./../../../assets/img/shoes-3-small3.jpg')} alt="shoe" />
      <Item src={require('./../../../assets/img/shoes-3-small4.jpg')} isActive alt="shoe" />
      <Item src={require('./../../../assets/img/shoes-3-small2.jpg')} alt="shoe" />
    </Container>
  </div>
);
