import styled from 'styled-components';

const InputStyled = styled.input`
  border: none;
  width: 100%;
  margin-top: 29px;
  border-bottom: 1px solid #d2d2d2;
  padding-bottom: 10px;
  font-size: 16px;
  outline: none;

  ::placeholder {
    color: #9ea3b2;
  }
  :not(:placeholder-shown) {
    border-bottom: 1px solid #4a77e5;
  }
`;

const Error = styled.p`
  color: #e00022;
  font-size: 14px;
  margin-top: 4px;
`;

export { Error, InputStyled };
