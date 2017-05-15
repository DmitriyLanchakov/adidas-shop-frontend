import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  background: #f4f4f4;
  padding-top: 6px;
  padding-right: 8.5px;
  padding-bottom: 9px;
  padding-left: 8.5px;
  margin-bottom: 15px;
  margin-right: 15px;
  text-align: center;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
`;

export const MainLink = styled(Link)`
  display: block;
  font-size: 30px;
  color: ${p => (p.sale ? 'white' : 'black')};
  background: white;
  text-decoration: none;
  padding-top: 23px;
  padding-right: 0;
  padding-bottom: 27px;
  padding-left: 0;
  margin-top: 8px;
  background-image: ${p => (p.sale ? 'linear-gradient(107deg, #0c09bf, #966dd8)' : 'none')};
  &:hover {
    background-image: linear-gradient(107deg, #0c09bf, #966dd8);
    color: white;
  }
`;

export const LabelWrapper = styled.span`
  position: absolute;
  top: 13px;
  right: 16px;
`;
