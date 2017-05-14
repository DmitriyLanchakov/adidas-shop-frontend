import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Filter from './Filter';
import Card from './Card';
import './styles.css';

export default () => (
  <div className="catalog-container">
    <Filter />
    <Grid fluid>
      <div className="catalog">
        <Row>
          <Col xs={12} sm={6} md={4}>
            <Card />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card />
          </Col>
        </Row>
      </div>
    </Grid>
  </div>
);
