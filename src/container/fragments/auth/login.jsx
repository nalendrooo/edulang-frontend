import React, { useEffect, useState } from 'react';
import '../../../assets/css/style.css';
import { BsFillEnvelopeAtFill, BsShieldLockFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button/button';
import Input from '../../components/Input/input';
import { setMessageCreator } from '../../../states/message/action';
import useLogin from '../../../hooks/useLogin';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const message = useSelector((state) => state.message);
  const isLogin = useLogin();

  const handleSubmit = async () => {
    const errors = {};

    if (!email) {
      errors.email = 'Email is required !';
    } else if (!validator.isEmail(email)) {
      errors.email = 'Invalid email address !';
    }

    if (!password) {
      errors.password = 'Password is required !';
    } else if (password.length < 8) {
      errors.password = 'Minimum password length is 8 characters !';
    } else if (password.length > 12) {
      errors.password = 'Maximum password length is 12 characters !';
    }

    if (Object.keys(errors).length > 0) {
      dispatch(setMessageCreator({ ...errors }));
      return;
    }

    try {
      const login = await onLogin({ email, password });
      if (login) navigate('/');
    } catch (error) {
      dispatch(setMessageCreator(error));
    }
  };

  useEffect(() => {
    if (isLogin) navigate('/');
    const clearMessage = setTimeout(() => dispatch(setMessageCreator({})), 3000);
    if (message.password || message.email) setPassword('');
    return () => clearTimeout(clearMessage);
  }, [message, isLogin]);

  return (
    <>
      <div className="flex flex-col p-8 ">
        <div className="text-2xl font-bold text-center uppercase text-primary">Welcome !</div>
        { message.email || message.password ? <p className="text-xs font-bold text-center text-red-600">Login Failed !</p> : null}
        <div className="flex flex-col mt-4 w-100">

          <Input
            icon={<BsFillEnvelopeAtFill />}
            type="text"
            placeholder="Email"
            name="email"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          { message.email && <p className="mb-2 text-xs italic text-right text-red-600">{message.email}</p>}

          <Input
            icon={<BsShieldLockFill />}
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          { message.password && <p className="mb-2 text-xs italic text-right text-red-600">{message.password}</p>}

          <div className="flex items-center justify-between mt-4">
            <div className="text-lg font-bold text-primary">Sign In</div>
            <Button onClick={handleSubmit} />
          </div>
        </div>
      </div>

      <div className="flex flex-col mb-6 text-sm">
        <div className="text-center text-primary">Dont have an account ?</div>
        <div className="flex justify-center">
          <Link to="/register" className="font-bold cursor-pointer hover:underline text-primary">
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
