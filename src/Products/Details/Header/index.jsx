import React from 'react';
import styled from 'styled-components';
import Left from './Left';
import Right from './Right';

const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  max-height: 40px;
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: '#e3e3e3' };
    this.handlePickColor = this.handlePickColor.bind(this);
  }

  handlePickColor(color) {
    this.setState({ color });
  }

  render() {
    return (
      <Wrapper>
        <Left color={this.state.color} />
        <Right onPickColor={this.handlePickColor} color={this.state.color} />
      </Wrapper>
    );
  }
}
