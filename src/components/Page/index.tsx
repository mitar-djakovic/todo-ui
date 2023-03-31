import { ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getAccount } from '../../actions';
import { useAppDispatch } from '../../hooks/hooks';
import { selectAccount } from '../../stores/global';

interface PageProps {
  children: ReactNode;
  isProtected?: boolean;
}

const Page = ({ children, isProtected }: PageProps) => {
  const dispatch = useAppDispatch();
  const account = useSelector(selectAccount);
  const navigate = useNavigate();

  const userLoggedIn = localStorage.getItem('accountId');

  useEffect(() => {
    if (!account && userLoggedIn) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      dispatch(getAccount(userLoggedIn));
    }
  }, [account, dispatch, userLoggedIn]);

  useEffect(() => {
    if (!(!account || userLoggedIn) && isProtected) {
      navigate('/login');
    }
    if (account) {
      navigate('/' + account.listId);
    }
  }, [account, isProtected, navigate, userLoggedIn]);

  return <>{children}</>;
};

export default Page;
