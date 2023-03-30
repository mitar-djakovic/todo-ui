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

import { loginValidationSchema } from './validation';

const Login = () => {
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
  const getCommonProps = (name: keyof LoginValues) => {
    return {
      register: register(name),
      error: errors[name]?.message,
    };
  };

  const handleLogin: SubmitHandler<LoginValues> = (values) => {
    console.log('values', values);
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
          <Button onClick={handleSubmit(handleLogin)} type="submit">
            Log in
          </Button>
        </form>
      </Content>
    </View>
  );
};

export default Login;
