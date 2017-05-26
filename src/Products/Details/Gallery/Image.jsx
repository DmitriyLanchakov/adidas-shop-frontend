import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 4px solid ${p => (p.isActive ? '#e8e8ea' : 'transparent')};
  width: 20%;
  height: 25%;
  outline-color: white;
  cursor: pointer;
  margin-top: 0;
  margin-right: 14px;
  margin-bottom: 0;
  margin-left: 14px;
  &:hover {
    border: 5px solid #e8e8ea;
  }
`;

const Image = styled.img`
  width: 100%;
`;

export default ({ img, isActive, index, handleChangeImage }) => (
  <Wrapper isActive={isActive}>
    <Image src={img} onClick={() => handleChangeImage(index)} />
  </Wrapper>
);
