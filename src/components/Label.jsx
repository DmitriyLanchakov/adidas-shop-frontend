import React from 'react';
import styled from 'styled-components';

const Label = styled.span`
  display: block;
  margin-left: 30px;
  padding-top: 7px;
  padding-right: 20px;
  padding-bottom: 7px;
  padding-left: 20px;
  font-family: 'AvenirNextReg';
  font-weight: bold;
  background: #ff5c5c;
  text-transform: uppercase;
  font-size: 14px;
  color: white;
`;

export default () => <Label>Sale</Label>;
