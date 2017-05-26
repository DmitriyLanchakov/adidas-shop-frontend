import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: block;
  padding-top: 45px;
  padding-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  @media (max-width: 768px) {
    position: relative;
    display: inline-block;
    width: 45px;
    height: 52px;
    margin-left: 0;
  }
`;

const LogoImg = styled.img`
  @media (max-width: 768px) {
    width: inherit;
    position: absolute;
    top: 17px;
    right: 8px;
  }
`;

export default () => (
  <StyledLink to="/products/football/shoes">
    <LogoImg src={require('./../assets/img/logo.png')} alt="logo" />
  </StyledLink>
);
