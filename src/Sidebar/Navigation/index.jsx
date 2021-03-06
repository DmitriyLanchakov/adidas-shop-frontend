import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';

const Nav = styled.nav`
  text-align: center;
  font-size: 24px;
  margin-top: 30px;
  margin-bottom: 30px;
  @media (min-width: 768px) {
    margin-top: 125px;
    text-align: center;
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  display: block;
  color: ${p => (p.isActive ? '#fff' : '#3c3c3c')};
  font-family: 'AndaleMono';
  padding-top: 11px;
  padding-bottom: 11px;
  padding-right: 15px;
  &.active {
    color: #fff
  }
  &:hover {
    color: #fff;
  }
  &:last-child {
    padding-bottom: 30px;
  }
`;

export default () => (
  <Nav>
    <Menu title="Football">
      <Link to="/products/football/shoes">Shoes</Link>
      <Link to="/products/football/clothing">
        Clothing
      </Link>
      <Link to="/products/football/accesories">
        Accesories
      </Link>
    </Menu>
    <Menu title="Running">
      <Link to="/products/running/shoes">Shoes</Link>
      <Link to="/products/running/clothing">
        Clothing
      </Link>
      <Link to="/products/running/accesories">
        Accesories
      </Link>
    </Menu>
    <Menu title="Basketball">
      <Link to="/products/basketball/shoes">Shoes</Link>
      <Link to="/products/basketball/clothing">
        Clothing
      </Link>
      <Link to="/products/basketball/accesories">
        Accesories
      </Link>
    </Menu>
  </Nav>
);
