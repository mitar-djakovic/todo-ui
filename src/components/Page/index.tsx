import { ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectAccount } from '../../stores/global';

interface PageProps {
  children: ReactNode;
  isProtected?: boolean;
}

const Page = ({ children, isProtected }: PageProps) => {
  const account = useSelector(selectAccount);
  const navigate = useNavigate();

  useEffect(() => {
    if (!account && isProtected) {
      navigate('/login');
    }
    if (account) {
      navigate('/');
    }
    console.log('isProtected', isProtected);
  }, [account, isProtected, navigate]);

  return <>{children}</>;
};

export default Page;
