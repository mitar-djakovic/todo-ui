import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Logo } from '../../assets';
import { Checkbox, Input, Page } from '../../components';

import { Content, Title, TodoContainer, View } from './Home.styled';
import { todoValidationSchema } from './validation';

interface TodoValues {
  todo: string;
}

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoValues>({
    resolver: yupResolver(todoValidationSchema),
    mode: 'all',
    defaultValues: {
      todo: '',
    },
  });

  const getCommonProps = (name: keyof TodoValues) => {
    return {
      register: register(name),
      error: errors[name]?.message,
    };
  };

  const createTodo: SubmitHandler<TodoValues> = (values) => {
    console.log('values', values);
  };
  return (
    <Page isProtected>
      <View>
        <Content>
          <Logo />
          <Title>Todo list</Title>
          <form onSubmit={handleSubmit(createTodo)}>
            <Input placeholder="Add a new todo" {...getCommonProps('todo')} />
          </form>
          <TodoContainer>
            <Checkbox checked />
          </TodoContainer>
        </Content>
      </View>
    </Page>
  );
};

export default Home;
