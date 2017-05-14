import React from 'react';
import './styles.css';

export default () => (
  <form className="filter" action="get">
    <span className="filter-icon" />
    <div className="filter-sex">
      <button className="button filter-button-active" type="button">
          Man
        </button>
      <button type="button">Woman</button>
    </div>
    <div className="filter-size">
      <span className="filter-title">Size</span>
      <button type="button">36</button>
      <button type="button">37</button>
      <button type="button">38</button>
      <button type="button">39</button>
      <button type="button">40</button>
      <button className="button filter-button-active" type="button">
          41
        </button>
      <button type="button">42</button>
    </div>
  </form>
  );
