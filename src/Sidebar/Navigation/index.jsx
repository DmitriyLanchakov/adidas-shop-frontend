import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';

const Nav = styled.nav`
  margin-top: 125px;
  font-size: 24px;
  text-align: center;
  @media (max-width: 768px) {
    margin-top: 30px;
    margin-bottom: 30px;
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
      <Link to="/football/shoes">Shoes</Link>
      <Link to="/football/clothing">
        Clothing
      </Link>
      <Link to="/football/accesories">
        Accesories
      </Link>
    </Menu>
    <Menu title="Running">
      <Link to="/running/shoes">Shoes</Link>
      <Link to="/running/clothing">
        Clothing
      </Link>
      <Link to="/running/accesories">
        Accesories
      </Link>
    </Menu>
    <Menu title="Basketball">
      <Link to="/basketball/shoes">Shoes</Link>
      <Link to="/basketball/clothing">
        Clothing
      </Link>
      <Link to="/basketball/accesories">
        Accesories
      </Link>
    </Menu>
  </Nav>
);
