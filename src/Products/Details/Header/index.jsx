import React from 'react';
import styled from 'styled-components';
import Left from './Left';
import Right from './Right';

const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  max-height: 40px;
`;

export default () => (
  <Wrapper>
    <Left />
    <Right />
  </Wrapper>
);
