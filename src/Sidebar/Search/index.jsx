import React from 'react';
import { Form, Input, Icon } from './styled';

export default () => (
  <Form action="#" method="get">
    <Icon src={require('./../../assets/img/icon-search.svg')} alt="" />
    <Input type="text" name="search" id="search" />
  </Form>
);
