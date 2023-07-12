import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import Form from './Form';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../redux/slices/userSlice';
import { useAppDispatch } from '../hooks/reduxHooks';

const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then(({ user }) => {
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

  return <Form title="register" handleClick={handleRegister} />;
};

export default SignUp;
