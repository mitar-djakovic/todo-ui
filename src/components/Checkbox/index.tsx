import { DeleteIcon } from '../../assets';

import {
  CheckboxStyled,
  CheckboxView,
  Content,
  Label,
} from './Checkbox.styled';

interface CheckboxProps {
  checked: boolean;
}

const Checkbox = ({ checked }: CheckboxProps) => {
  return (
    <CheckboxView>
      <Content>
        <CheckboxStyled checked={checked} type="checkbox" />
        <Label>Some text</Label>
      </Content>
      <DeleteIcon />
    </CheckboxView>
  );
};

export default Checkbox;
