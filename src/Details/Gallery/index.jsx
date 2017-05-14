import React from 'react';
import styled from 'styled-components';
import { Item, MoreButton, MoreLabel } from './styled';

const BigImage = styled.img`
  display: block;
  width: 80%;
  margin: 0 auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  height: 120px;
  cursor: pointer;
  padding-bottom: 20px;
  margin-right: 14px;
  margin-left: 14px;
`;

export default () => (
  <div>
    <div>
      <BigImage src={require('./../../assets/img/shoes-3-big.jpg')} alt="shoe" />
    </div>
    <Container>
      <Item src={require('./../../assets/img/shoes-3-small1.jpg')} alt="shoe" />
      <Item src={require('./../../assets/img/shoes-3-small2.jpg')} alt="shoe" />
      <Item src={require('./../../assets/img/shoes-3-small3.jpg')} alt="shoe" />
      <Item src={require('./../../assets/img/shoes-3-small4.jpg')} isActive alt="shoe" />
      <LabelWrapper>
        <MoreLabel />
      </LabelWrapper>
      <MoreButton>see more photos</MoreButton>
    </Container>
  </div>
);
