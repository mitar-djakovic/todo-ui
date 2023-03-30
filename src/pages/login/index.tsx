import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Logo } from '../../assets';
import { Button, Input } from '../../components';

import {
  Content,
  Description,
  Link,
  LinkContainer,
  Title,
  View,
} from './Login.styled';

interface LoginValues {
  email: string;
  password: string;
}

import { useSelector } from 'react-redux';

import { logIn } from '../../actions';
import { useAppDispatch } from '../../hooks/hooks';
import {
  selectErrorMessage,
  selectIsLoading,
  selectSuccessMessage,
} from '../../stores/global';
import { Message } from '../signup/Signup.styled';

import { loginValidationSchema } from './validation';

const Login = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: yupResolver(loginValidationSchema),
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const isLoading = useSelector(selectIsLoading);
  const errorMessage = useSelector(selectErrorMessage);
  const successMessage = useSelector(selectSuccessMessage);
  const getCommonProps = (name: keyof LoginValues) => {
    return {
      register: register(name),
      error: errors[name]?.message,
    };
  };

  const handleLogin: SubmitHandler<LoginValues> = (values) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(logIn(values));
  };

  return (
    <View>
      <Content>
        <Logo />
        <Title>Welcome back!</Title>
        <Description>Log in to continue.</Description>
        <form onSubmit={handleSubmit(handleLogin)}>
          <Input
            {...getCommonProps('email')}
            type="email"
            placeholder="Email"
          />
          <Input
            {...getCommonProps('password')}
            type="password"
            placeholder="Password"
          />
          <LinkContainer>
            <Link href="/signup">Don’t have an account? Sign up.</Link>
          </LinkContainer>
          <Button
            disabled={isLoading}
            onClick={handleSubmit(handleLogin)}
            type="submit"
          >
            Log in
          </Button>
          {(errorMessage || successMessage) && (
            <Message error={!!errorMessage}>
              {errorMessage || successMessage}
            </Message>
          )}
        </form>
      </Content>
    </View>
  );
};

export default Login;
