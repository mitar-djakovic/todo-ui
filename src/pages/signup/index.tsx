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

const Signup = () => {
  return (
    <View>
      <Content>
        <Logo />
        <Title>Welcome!</Title>
        <Description>Sign up to start using Simpledo today.</Description>
        <Input placeholder="Full name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <LinkContainer>
          <Link>Do have an account? Sign in.</Link>
        </LinkContainer>
        <Button>Sign up</Button>
      </Content>
    </View>
  );
};

export default Signup;
