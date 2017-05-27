import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import List from './Products/List';
import Details from './Products/Details';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
    min-height: 100vh;
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
