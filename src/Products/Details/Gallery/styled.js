import styled from 'styled-components';

export const Image = styled.img`
  width: 15%;
  height: 25%;
  outline-color: white;
  cursor: pointer;
  margin-top: 0;
  margin-right: 14px;
  margin-bottom: 0;
  margin-left: 14px;
  outline: ${p => (p.isActive ? '5px solid #e8e8ea' : 'none')};
  &:hover {
    outline: 5px solid #e8e8ea;
  }
`;

export const MoreButton = styled.button`
  border: none;
  padding-bottom: 30px;
  background: none;
  flex-basis: 40px;
  font-family: 'AvenirNextReg';
  color: #c0c0c0;
  font-size: 14px;
  text-align: left;
  cursor: pointer;
  width: 64px;
  &:focus {
    outline: 0;
    border: none;
  }
`;

export const MoreLabel = styled.span`
  width: 100%;
  background: #e7e7e7;
  height: 3px;
  border-radius: 1.5px;
  position: relative;
  &::before {
    content: '';
    display: block;
    position: relative;
    width: 100%;
    background: #e7e7e7;
    height: 3px;
    top: -6px;
    border-radius: 1.5px;
  }
  &::after {
    content: '';
    display: block;
    position: relative;
    width: 100%;
    background: #e7e7e7;
    height: 3px;
    top: 3px;
    border-radius: 1.5px;
  }
`;
