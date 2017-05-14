import React from 'react';
import styled from 'styled-components';

const Description = styled.p`
  margin-top: 30px;
  padding: 0;
  font-family: 'AvenirNextReg';
  font-weight: 800;
  font-size: 33px;
  line-height: 1.52;
  color: #d8d8d8;
`;

const Bold = styled.b`
  color: #6e6e6e;
  font-family: 'AvenirNextReg';
`;

export default () => (
  <Description>
    <Bold>Adidas</Bold> is a German multinational corporation, headquartered in Herzogenaurach,
    Germany, that designs and manufactures shoes, clothing and accessories.
  </Description>
);
