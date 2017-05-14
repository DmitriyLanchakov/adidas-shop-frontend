import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
`;

export const Input = styled.input`
  font-size: 24px;
  font-family: 'AvenirNextBold';
  width: 100%;
  color: white;
  border: none;
  padding-top: 10px;
  padding-right: 15px;
  padding-bottom: 10px;
  padding-left: 58px;
  background: #0e0e0e;
  border-bottom: 4px solid #373737;

  &:focus {
    outline: none;
    border-bottom: 4px solid white;
  }
`;

export const Icon = styled.img`
  position: absolute;
  left: 10px;
  bottom: 15px;
`;
