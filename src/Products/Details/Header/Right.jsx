import React from 'react';
import styled from 'styled-components';
import Label from './../../../components/Label';
import ColorButtons from './ColorButtons';

const Wrapper = styled.div`
  align-items: flex-end;
  margin-top: 15px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const Price = styled.div`
  font-size: 80px;
  padding-top: 10px;
  padding-right: 0;
  padding-bottom: 10px;
  padding-left: 0;
  margin-top: 20px;
  margin-right: 0;
  margin-bottom: 20px;
  margin-left: 0;
  color: ${p => (p.color ? `${p.color};` : '#e2e2e2')};
`;

export default ({ color, pickColor }) => (
  <Wrapper>
    <Container>
      <ColorButtons pickColor={pickColor} />
      <Label />
    </Container>
    <Price color={color}>170$</Price>
  </Wrapper>
);
