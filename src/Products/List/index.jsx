import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Filter from './Filter';
import Card from './Card';

const CardCol = ({ children }) => (
  <Col xs={12} sm={6} md={4}>
    {children}
  </Col>
);

const Wrapper = styled.div`
  padding-right: 0;
  padding-left: 0;
  margin-right: -20px;
`;

function generateRandomId() {
  return Date.now().toString().slice(7);
}

export default ({ match }) => (
  <div>
    <Filter />
    <Grid fluid>
      <Wrapper>
        <Row>
          <CardCol>
            <Card
              sale
              img={require('./../../assets/img/shoes-1.jpg')}
              price="270$"
              to={`${match.url}/${generateRandomId()}`}
            />
          </CardCol>
          <CardCol>
            <Card
              img={require('./../../assets/img/shoes-2.jpg')}
              price="220$"
              to={`${match.url}/${generateRandomId()}`}
            />
          </CardCol>
          <CardCol>
            <Card
              img={require('./../../assets/img/shoes-3.jpg')}
              price="290$"
              to={`${match.url}/${generateRandomId()}`}
            />
          </CardCol>
          <CardCol>
            <Card
              img={require('./../../assets/img/shoes-1.jpg')}
              price="270$"
              to={`${match.url}/${generateRandomId()}`}
            />
          </CardCol>
          <CardCol>
            <Card
              sale
              img={require('./../../assets/img/shoes-2.jpg')}
              price="220$"
              to={`${match.url}/${generateRandomId()}`}
            />
          </CardCol>
          <CardCol>
            <Card
              sale
              img={require('./../../assets/img/shoes-3.jpg')}
              price="290$"
              to={`${match.url}/${generateRandomId()}`}
            />
          </CardCol>
        </Row>
      </Wrapper>
    </Grid>
  </div>
);
