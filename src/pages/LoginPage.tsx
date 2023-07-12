import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/Login';
type Props = {};

const LoginPage = (props: Props) => {
  return (
    <div>
      <h1>Login</h1>
      <Login />
      <p>
        Or <Link to="/register">Register now</Link>
      </p>
    </div>
  );
};

export default LoginPage;
