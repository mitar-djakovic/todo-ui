import { InputStyled } from './Input.styled';

interface InputProps {
  placeholder?: string;
  type?: string;
}

const Input = ({ placeholder, type = 'text' }: InputProps) => {
  return <InputStyled type={type} placeholder={placeholder} />;
};

export default Input;
