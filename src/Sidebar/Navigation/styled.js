import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainNav = styled.nav`
  padding-top: 125px;
  font-size: 24px;
  text-align: center;
`;

export const SubNav = styled.nav`
  font-family: 'AndaleMono';
`;

export const MainNavItem = styled(Link)`
  padding-top: 25px;
  padding-bottom: ${p => (p.isActive ? '15px' : '0')};
  margin-right: ${p => (p.isActive ? '5px' : '0')};
  text-decoration: none;
  text-transform: uppercase;
  display: block;
  color: ${p => (p.isActive ? '#fff' : '#3c3c3c')};
  &:hover {
    color: #fff;
  }
  &:after {
    content: ${p => (p.isActive ? '""' : 'none')};
    display: inline-block;
    width: 6px;
    height: 6px;
    border: 3px solid #fff;
    border-left: none;
    border-top: none;
    border-radius: 3px;
    transform: rotate(45deg);
    margin-bottom: 5px;
    margin-left: 10px;
  }
`;

export const SubNavItem = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  display: block;
  color: ${p => (p.isActive ? '#fff' : '#3c3c3c')};
  font-family: 'AndaleMono';
  padding-bottom: 25px;
  &:hover {
    color: #fff;
  }
`;
