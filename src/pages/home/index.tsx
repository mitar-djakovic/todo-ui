import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { createTodo, deleteTodo, getTodos, setTodoStatus } from '../../actions';
import { Logo } from '../../assets';
import { Checkbox, Input, Page } from '../../components';
import { useAppDispatch } from '../../hooks/hooks';
import { selectIsLoading, selectTodoList } from '../../stores/global';

import {
  Content,
  Filter,
  Filters,
  Title,
  TodoContainer,
  View,
} from './Home.styled';
import { todoValidationSchema } from './validation';

interface TodoValues {
  todo: string;
}

const Home = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const { listId } = useParams();
  const [searchParams] = useSearchParams();

  const filterParam = searchParams.get('filter');
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
    dispatch(getTodos({ listId, filterParam }));
  }, [dispatch, filterParam, listId]);

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

  const filters = [
    {
      label: 'All',
      param: '/',
    },
    {
      label: 'Completed',
      param: true,
    },
    {
      label: 'Incompleted',
      param: false,
    },
  ];

  const handleQueryParams = (param: string) => {
    if (param === '/') {
      navigation(`/${listId}`);
    } else {
      navigation(`/${listId}?filter=${param}`);
    }
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
              : todoList.map((list) => (
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
          <Filters>
            <p>Show</p>{' '}
            {filters.map((filter) => (
              <Filter
                onClick={() => handleQueryParams(String(filter.param))}
                active
                key={filter.label}
              >
                {filter.label}
              </Filter>
            ))}
          </Filters>
        </Content>
      </View>
    </Page>
  );
};

export default Home;
