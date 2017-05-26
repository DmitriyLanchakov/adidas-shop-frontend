import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Search from './Search';
import Nav from './Navigation';

const MenuButton = styled.button`
  display: inline-block;
  outline: 0;
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: 16px;
  width: 50px;
  height: 30px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-wrap: nowrap;
  width: 100%;
  padding-right: 23px;
  padding-left: 23px;
  background: #0e0e0e;
  height: ${p => (p.isActive ? 'auto' : '64px')};
  overflow: ${p => (p.isActive ? 'visible' : 'hidden')};
  @media (min-width: 768px) {
    width: 317px;
    height: auto;
  }
  @media (min-width: 992px) {
    width: 414px;
  }
`;

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
  }

  handleClick() {
    this.setState(prevState => ({ isActive: !prevState.isActive }));
  }

  render() {
    return (
      <Aside isActive={this.state.isActive}>
        <Logo />
        <MenuButton onClick={() => this.handleClick()}>
          <img src={require('./../assets/img/menu.png')} alt="menu button" />
        </MenuButton>
        <Search isActive={this.state.isActive} />
        <Nav />
      </Aside>
    );
  }
}
