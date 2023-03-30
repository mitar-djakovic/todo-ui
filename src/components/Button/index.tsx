import { ButtonStyled } from './Button.styled';

type Type = 'submit' | 'reset' | 'button';

interface ButtonProps {
  children: string;
  disabled?: boolean;
  type?: Type;
  onClick: () => void;
}

const Button = ({
  children,
  onClick,
  disabled = false,
  type = 'button',
}: ButtonProps) => (
  <ButtonStyled onClick={onClick} type={type} disabled={disabled}>
    {children}
  </ButtonStyled>
);

export default Button;
