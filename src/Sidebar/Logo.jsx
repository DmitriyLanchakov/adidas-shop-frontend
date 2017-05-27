import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  position: relative;
  display: inline-block;
  width: 45px;
  height: 52px;
  padding-top: 45px;
  padding-bottom: 30px;
  margin-left: 0;
  @media (min-width: 768px) {
    display: block;
    height: auto;
    width: auto;
    margin-right: auto;
    margin-left: auto;
  }
`;

const LogoImg = styled.img`
  width: inherit;
  position: absolute;
  top: 17px;
  right: 8px;
  @media (min-width: 768px) {
    position: inherit;
    top: 0px;
    right: 0px;
  }
`;

export default () => (
  <StyledLink to="/products/football/shoes">
    <LogoImg src={require('./../assets/img/logo.png')} alt="logo" />
  </StyledLink>
);
