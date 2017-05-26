import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import List from './Products/List';
import Details from './Products/Details';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default () => (
  <Router>
    <Wrapper>
      <Sidebar />
      <Redirect from="/" to="/products/football/shoes" />
      <Route exact path="/products/:group/:type" component={List} />
      <Route exact path="/products/:group/:type/:id" component={Details} />
    </Wrapper>
  </Router>
);
