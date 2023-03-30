import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';

import { singUp } from '../../actions';
import { Logo } from '../../assets';
import { Button, Input, Page } from '../../components';
import { useAppDispatch } from '../../hooks/hooks';
import {
  selectErrorMessage,
  selectIsLoading,
  selectSuccessMessage,
} from '../../stores/global';

import {
  Content,
  Description,
  Link,
  LinkContainer,
  Message,
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
  const dispatch = useAppDispatch();
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

  const isLoading = useSelector(selectIsLoading);
  const errorMessage = useSelector(selectErrorMessage);
  const successMessage = useSelector(selectSuccessMessage);

  const getCommonProps = (name: keyof SignupValues) => {
    return {
      register: register(name),
      error: errors[name]?.message,
    };
  };

  const handleSignup: SubmitHandler<SignupValues> = (values) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(singUp(values));
  };

  return (
    <Page>
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
            <Button
              disabled={isLoading}
              onClick={handleSubmit(handleSignup)}
              type="submit"
            >
              {isLoading ? 'Loading...' : 'Sign up'}
            </Button>
            {(errorMessage || successMessage) && (
              <Message error={!!errorMessage}>
                {errorMessage || successMessage}
              </Message>
            )}
          </form>
        </Content>
      </View>
    </Page>
  );
};

export default Signup;
