import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-right: 0;
  margin-left: 0;
`;

const Button = styled.button`
  padding-top: 25px;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  border: none;
  background-color: transparent;
  font-size: 24px;
  font-weight: bold;
  outline: none;
  color: #fff;

  &:after {
    content: "";
    display: inline-block;
    width: 6px;
    height: 6px;
    border: 3px solid #fff;
    border-left: none;
    border-top: none;
    border-radius: 3px;
    transform: ${p => (p.isActive ? 'rotate(225deg)' : 'rotate(45deg)')};
    margin-bottom: 5px;
    margin-left: 10px;
  }
`;

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({ isActive: !prevState.isActive }));
  }

  render() {
    return (
      <Wrapper>
        <Button onClick={this.handleClick} isActive={this.state.isActive}>
          {this.props.title}
        </Button>
        {this.state.isActive && this.props.children}
      </Wrapper>
    );
  }
}
