import styled from 'styled-components';
import image from './../../assets/img/icon-filter.png';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 11px 24px;
  border-bottom: 3px solid #e7e7e7;
  margin-bottom: 20px;
`;

export const Icon = styled.span`
  display: block;
  background: #ebebeb url(${image}) no-repeat 50% 50%;
  width: 55px;
  height: 55px;
  margin-right: 30px;
`;

export const Label = styled.span`
  padding-right: 16px;
  border: none;
  background: none;
  font-size: 24px;
  color: #d6d6d6;
  text-transform: uppercase;
`;

export const FilterSize = styled.div`
  border: none;
  background: none;
`;

export const FilterSex = styled.div`
  border: none;
  background: none;
  padding-right: 50px;
`;

export const Button = styled.button`
  font-family: 'AvenirNextBold';
  border: none;
  background: none;
  font-size: 24px;
  color: ${p => (p.isActive ? '#4d42f8' : '#d6d6d6')};
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  padding-top: 0;
  padding-right: 2px;
  padding-bottom: 0;
  padding-left: 2px;
  ${p => p.first && 'margin-right: 12px;'}
  &:hover {
    color: #4d42f8;
  }
`;
