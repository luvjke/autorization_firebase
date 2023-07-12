import React from 'react';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../redux/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Form from './Form';
import { useAppDispatch } from '../hooks/reduxHooks';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
      dispatch(
        setUser({
          email: user.email,
          token: user.refreshToken,
          id: user.uid,
        }),
      );
    });
    navigate('/');
  };
  return <Form title="login" handleClick={handleLogin} />;
};
export default Login;
