import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default () => (
  <nav className="navigation">
    <Link to="/" className="navigation-item item-active">Sports</Link>
    <nav className="subnavigation">
      <Link to="/" className="subitem-active">Shoes</Link>
      <Link to="/">Clothing</Link>
      <Link to="/">Accesories</Link>
    </nav>
    <Link to="/" className="navigation-item">Brands</Link>
    <Link to="/" className="navigation-item">Micoach</Link>
  </nav>
);
