import React from 'react';
import Logo from './Logo';
import Search from './Search';
import Nav from './Navigation';
import './styles.css';

export default () => (
  <aside className="sidebar">
    <Logo />
    <Search />
    <Nav />
  </aside>
);
