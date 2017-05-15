import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  max-width: 80px;
  font-size: 64px;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
`;

const Save = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  width: 75px;
  height: 75px;
  color: white;
  background: #e3e3e3;
  border-radius: 100%;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  margin-top: 10px;
  outline: 0;
  border: none;
  font-family: 'AvenirNextBold';
  &:focus {
    outline: 0;
  }
`;

export default () => (
  <div>
    <Title>Ultra boost</Title>
    <Save>Save</Save>
  </div>
);
