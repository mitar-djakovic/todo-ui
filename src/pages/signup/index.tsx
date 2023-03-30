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
} from './Signup.styled';
import { signupValidationSchema } from './validation';

interface SignupValues {
  fullName: string;
  email: string;
  password: string;
}

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupValues>({
    resolver: yupResolver(signupValidationSchema),
    mode: 'all',
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
    },
  });

  const getCommonProps = (name: keyof SignupValues) => {
    return {
      register: register(name),
      error: errors[name]?.message,
    };
  };

  const handleSignup: SubmitHandler<SignupValues> = (values) => {
    console.log('handleSignup', values);
  };

  return (
    <View>
      <Content>
        <Logo />
        <Title>Welcome!</Title>
        <Description>Sign up to start using Simpledo today.</Description>
        <form onSubmit={handleSubmit(handleSignup)}>
          <Input {...getCommonProps('fullName')} placeholder="Full name" />
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
            <Link href="/login">Do have an account? Sign in.</Link>
          </LinkContainer>
          <Button onClick={handleSubmit(handleSignup)} type="submit">
            Sign up
          </Button>
        </form>
      </Content>
    </View>
  );
};

export default Signup;
