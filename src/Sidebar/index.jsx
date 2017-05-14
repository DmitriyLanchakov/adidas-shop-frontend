import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Search from './Search';
import Nav from './Navigation';

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-wrap: nowrap;
  width: 414px;
  min-height: 100%;
  padding-right: 23px;
  padding-left: 23px;
  background: #0e0e0e;
`;

export default () => (
  <Aside>
    <Logo />
    <Search />
    <Nav />
  </Aside>
);
