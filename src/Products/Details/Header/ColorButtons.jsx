import React from 'react';
import styled from 'styled-components';

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

export default ({ pickColor }) => (
  <div>
    <Button onClick={() => pickColor('#c5c5c5')} color={'#c5c5c5'} />
    <Button onClick={() => pickColor('#4d87ca')} color={'#4d87ca'} />
    <Button onClick={() => pickColor('#4a4a4a')} color={'#4a4a4a'} />
    <Button onClick={() => pickColor('#e0e0e0')} color={'#e0e0e0'} />
  </div>
);
