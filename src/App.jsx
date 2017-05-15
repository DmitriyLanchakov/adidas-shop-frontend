import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import List from './Products/List';
import Details from './Products/Details';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  width: 100%;
`;

export default () => (
  <Router>
    <Wrapper>
      <Sidebar />
      <Route exact path="/" component={List} />
      <Route path="/item" component={Details} />
    </Wrapper>
  </Router>
);
