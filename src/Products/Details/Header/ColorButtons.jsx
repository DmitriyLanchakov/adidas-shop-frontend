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
  background-color: ${p => `${p.color};`};
  &:focus {
    outline: 0;
  }
`;

export default ({ onPickColor }) => (
  <div>
    <Button onClick={() => onPickColor('#c5c5c5')} color={'#c5c5c5'} />
    <Button onClick={() => onPickColor('#4d87ca')} color={'#4d87ca'} />
    <Button onClick={() => onPickColor('#4a4a4a')} color={'#4a4a4a'} />
    <Button onClick={() => onPickColor('#e0e0e0')} color={'#e0e0e0'} />
  </div>
);
