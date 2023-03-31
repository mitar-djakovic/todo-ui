import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { createTodo, deleteTodo, getTodos, setTodoStatus } from '../../actions';
import { Logo } from '../../assets';
import { Checkbox, Input, Page } from '../../components';
import { useAppDispatch } from '../../hooks/hooks';
import { selectIsLoading, selectTodoList } from '../../stores/global';

import { Content, Title, TodoContainer, View } from './Home.styled';
import { todoValidationSchema } from './validation';

interface TodoValues {
  todo: string;
}

const Home = () => {
  const dispatch = useAppDispatch();
  const { listId } = useParams();
  const todoList = useSelector(selectTodoList);
  const isLoading = useSelector(selectIsLoading);

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

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(getTodos(listId));
  }, [dispatch, listId]);

  const getCommonProps = (name: keyof TodoValues) => {
    return {
      register: register(name),
      error: errors[name]?.message,
    };
  };

  const handleCreateTodo: SubmitHandler<TodoValues> = (values) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(createTodo({ ...values, listId }));
  };
  return (
    <Page isProtected>
      <View>
        <Content>
          <Logo />
          <Title>Todo list</Title>
          <form onSubmit={handleSubmit(handleCreateTodo)}>
            <Input placeholder="Add a new todo" {...getCommonProps('todo')} />
          </form>
          <TodoContainer>
            {isLoading
              ? 'Fetching todos...'
              : todoList.map((list, index) => (
                  <Checkbox
                    key={list.todoId}
                    label={list.todo}
                    checked={list.completed}
                    onChange={(e) =>
                      dispatch(
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        setTodoStatus({
                          checked: e.target.checked,
                          todoId: list.todoId,
                          listId,
                        })
                      )
                    }
                    onClick={() =>
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      dispatch(deleteTodo({ listId, todoId: list.todoId }))
                    }
                  />
                ))}
          </TodoContainer>
        </Content>
      </View>
    </Page>
  );
};

export default Home;
