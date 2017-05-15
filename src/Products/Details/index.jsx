import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Gallery from './Gallery';
import Description from './Description';
import BuyNowButton from './BuyNowButton';

const Wrapper = styled.div`
  min-height: 100%;
  position: relative;
`;

const Product = styled.div`
  padding-top: 15px;
  padding-right: 32px;
  padding-bottom: 145px;
  padding-left: 32px;
`;

export default () => (
  <Wrapper>
    <Product>
      <Header />
      <Gallery />
      <Description />
    </Product>
    <BuyNowButton />
  </Wrapper>
);
