import styled from 'styled-components';

const CheckboxStyled = styled.input`
  width: 18px;
  height: 18px;
  margin: 0 14px 0 0;
  border-radius: 4px;
  border: solid 1px rgba(0, 0, 0, 0.25);
`;

const CheckboxView = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    display: none;
    cursor: pointer;
  }

  :hover {
    svg {
      display: block;
    }
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  font-size: 16px;
  color: #1f2a4b;
`;

export { CheckboxStyled, CheckboxView, Content, Label };
