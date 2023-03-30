import { Error, InputStyled } from './Input.styled';

interface InputProps {
  placeholder?: string;
  type?: string;
  register: any;
  error?: string;
}

const Input = ({ placeholder, type = 'text', register, error }: InputProps) => (
  <div>
    <InputStyled {...register} type={type} placeholder={placeholder} />
    {error && <Error>{error}</Error>}
  </div>
);

export default Input;
