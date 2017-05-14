import React from 'react';
import styled from 'styled-components';

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

const Button = styled.button`
  border: none;
  width: 18px;
  height: 18px;
  border-radius: 100%;
  cursor: pointer;
  background: none;
  margin-left: 12px;
  background-color: ${p => (p.color ? `${p.color};` : 'black;')};
  &:focus {
    outline: 0;
  }
`;

const Label = styled.span`
  font-family: 'AvenirNextReg';
  font-weight: bold;
  display: block;
  margin-left: 30px;
  padding-top: 7px;
  padding-right: 20px;
  padding-bottom: 7px;
  padding-left: 20px;
  background: #ff5c5c;
  text-transform: uppercase;
  font-size: 14px;
  color: white;
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
  color: #e2e2e2;
`;

export default () => (
  <Wrapper>
    <Container>
      <Button color="#c5c5c5" />
      <Button color="#4d87ca" />
      <Button color="#4a4a4a" />
      <Button color="#e0e0e0" />
      <Label>Sale</Label>
    </Container>
    <Price>170$</Price>
  </Wrapper>
);
