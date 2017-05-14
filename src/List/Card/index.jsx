import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default () => (
  <div className="catalog-item">
    <img className="catalog-item-img" src={require('./shoes-1.jpg')} alt="shoe" />
    <Link className="catalog-item-link on-sale" to="/item">170$</Link>
    <span className="sale-flag">Sale</span>
  </div>
);
