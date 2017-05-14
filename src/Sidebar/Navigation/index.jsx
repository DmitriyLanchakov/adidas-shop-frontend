import React from 'react';
import { MainNav, SubNav, MainNavItem, SubNavItem } from './styled';

export default () => (
  <MainNav>
    <MainNavItem to="/" isActive>Sports</MainNavItem>
    <SubNav>
      <SubNavItem to="/" isActive>Shoes</SubNavItem>
      <SubNavItem to="/">Clothing</SubNavItem>
      <SubNavItem to="/">Accessories</SubNavItem>
    </SubNav>
    <MainNavItem to="/">Brands</MainNavItem>
    <MainNavItem to="/">Micoah</MainNavItem>
  </MainNav>
);
