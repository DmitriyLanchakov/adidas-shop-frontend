import React from 'react';
import styled from 'styled-components';

const Heading = styled.div`

  display: block;
  padding-top: 25px;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;

  color: ${p => (p.isActive ? '#fff' : '#3c3c3c')};

  &:hover {
    color: #fff;
  }

  &:after {
    content: "";
    display: inline-block;
    width: 6px;
    height: 6px;
    border: 3px solid ${p => (p.isActive ? '#fff' : '#3c3c3c')};
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
      <div>
        <Heading onClick={this.handleClick} isActive={this.state.isActive}>
          {this.props.title}
        </Heading>
        {this.state.isActive && this.props.children}
      </div>
    );
  }
}
