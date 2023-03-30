import { ButtonStyled } from './Button.styled';

interface ButtonProps {
  children: string;
  disabled?: boolean;
}

const Button = ({ children, disabled = false }: ButtonProps) => (
  <ButtonStyled disabled={disabled}>{children}</ButtonStyled>
);

export default Button;
