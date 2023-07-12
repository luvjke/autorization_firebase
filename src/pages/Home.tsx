import React from 'react';

import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { removeUser } from '../redux/slices/userSlice';
import { useAppDispatch } from '../hooks/reduxHooks';

type Props = {};

const Home: React.FC = (props: Props) => {
  const dispatch = useAppDispatch();
  const { isAuth, email } = useAuth();
  return isAuth ? (
    <div>
      <h1>Welcome</h1>
      <button onClick={() => dispatch(removeUser())}>Log out{email}</button>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Home;
