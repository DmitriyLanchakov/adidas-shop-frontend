import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 45px;
  padding-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
`;

export default () => (
  <Wrapper>
    <Link to="/">
      <img src={require('./../assets/img/logo.png')} alt="logo" />
    </Link>
  </Wrapper>
);
