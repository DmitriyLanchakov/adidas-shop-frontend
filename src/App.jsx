import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import List from './List';
import Details from './Details';
import './App.css';

export default () => (
  <Router>
    <main className="main-area">
      <Sidebar />
      <Route exact path="/" component={List} />
      <Route path="/item" component={Details} />
    </main>
  </Router>
);
