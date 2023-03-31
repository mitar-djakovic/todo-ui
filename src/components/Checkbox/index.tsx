import { DeleteIcon } from '../../assets';

import {
  CheckboxStyled,
  CheckboxView,
  Content,
  Label,
} from './Checkbox.styled';

interface CheckboxProps {
  checked: boolean;
  label: string;
  onChange: (e: any) => void;
  onClick: () => void;
}

const Checkbox = ({ checked, label, onChange, onClick }: CheckboxProps) => {
  return (
    <CheckboxView>
      <Content>
        <CheckboxStyled onChange={onChange} checked={checked} type="checkbox" />
        <Label>{label}</Label>
      </Content>
      <DeleteIcon onClick={onClick} />
    </CheckboxView>
  );
};

export default Checkbox;
