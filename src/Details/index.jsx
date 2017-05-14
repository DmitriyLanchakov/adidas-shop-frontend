import React from 'react';
import './styles.css';

export default () => (
  <div className="product">
    <div className="product-container">
      <header className="product-header">
        <div className="product-header-title">
          <h1>Ultra Boost</h1>
          <span className="label-save">Save</span>
        </div>
        <div className="product-header-options">
          <div className="product-header-color-panel">
            <button className="color-panel-button background-gray" type="button" />
            <button className="color-panel-button background-blue" type="button" />
            <button className="color-panel-button background-brown" type="button" />
            <button className="color-panel-button background-light-gray" type="button" />
            <span className="sale-flag">Sale</span>
          </div>
          <div className="product-header-price">170$</div>
        </div>
      </header>
      <div className="product-gallery">
        <div className="gallery-items-big">
          <img src={require('./img/shoes-3-big.jpg')} alt="shoe" />
        </div>
        <div className="product-gallery-items">
          <img src={require('./img/shoes-3-small1.jpg')} alt="shoe" />
          <img src={require('./img/shoes-3-small2.jpg')} alt="shoe" />
          <img src={require('./img/shoes-3-small3.jpg')} alt="shoe" />
          <img
            className="gallery-items-active"
            src={require('./img/shoes-3-small4.jpg')}
            alt="shoe"
          />
          <div className="items-more-label"><span /></div>
          <button className="items-more-button">see more photos</button>
        </div>
      </div>
      <p className="product-about">
        <b>Adidas</b>
        is a German multinational corporation, headquarted in Herzogenauracn,
        Germany, that designs and manufactures shoes, clothing and accessories.
      </p>
    </div>
    <button className="product-buy-button" type="button">Buy now</button>
  </div>
);
