import React, { useEffect, useState } from 'react';
import '../../../assets/css/style.css';
import {
  BsFillEnvelopeAtFill,
  BsShieldLockFill,
  BsPersonFill,
  BsShieldFillCheck,
} from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button/button';
import Input from '../../components/Input/input';
import useLogin from '../../../hooks/useLogin';
import { setMessageCreator } from '../../../states/message/action';

const Register = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const message = useSelector((state) => state.message);
  const isLogin = useLogin();

  const handleSubmit = async () => {
    const errors = {};

    if (!username) {
      errors.username = 'Username is required !';
    } else if (!validator.isAlpha(username.trim())) {
      errors.username = 'Username can only contain the alphabet !';
    } else if (username.length < 8) {
      errors.username = 'Minimum username length is 8 characters !';
    } else if (username.length > 12) {
      errors.username = 'Maximum username length is 12 characters !';
    }

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

    if (!confPassword || confPassword !== password) errors.confPassword = 'Password is not same Password !';

    if (Object.keys(errors).length > 0) {
      dispatch(setMessageCreator({ ...errors }));
      return;
    }

    console.log(email, username, password, confPassword);

    try {
      // const login = await onRegister({ email, password });
      // if (login) navigate('/home');
      // if (login) navigate('/home');
    } catch (error) {
      dispatch(setMessageCreator(error));
    }
  };

  useEffect(() => {
    if (isLogin) navigate('/');
    const clearMessage = setTimeout(() => dispatch(setMessageCreator({})), 3000);
    if (message.password || message.email) {
      setPassword('');
      setConfPassword('');
    }
    return () => clearTimeout(clearMessage);
  }, [message, isLogin]);

  return (
    <>
      <div className="flex flex-col p-8 ">
        <div className="text-2xl font-bold text-center uppercase text-primary">Join with Us !</div>
        { message.email || message.password ? <p className="text-xs font-bold text-center text-red-600">Login Failed !</p> : null}
        <div className="flex flex-col mt-4 w-100">

          <Input
            icon={<BsPersonFill />}
            type="text"
            placeholder="Username"
            name="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          { message.username && <p className="mb-2 text-xs italic text-right text-red-600">{message.username}</p>}

          <Input
            icon={<BsFillEnvelopeAtFill />}
            type="text"
            placeholder="Email"
            name="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          { message.email && <p className="mb-2 text-xs italic text-right text-red-600">{message.email}</p>}

          <Input
            icon={<BsShieldLockFill />}
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          { message.password && <p className="mb-2 text-xs italic text-right text-red-600">{message.password}</p>}

          <Input
            icon={<BsShieldFillCheck />}
            type="password"
            placeholder="Confirm Password"
            name="password"
            autoComplete="off"
            value={confPassword}
            onChange={(e) => setConfPassword(e.target.value)}
          />
          { message.confPassword && <p className="mb-2 text-xs italic text-right text-red-600">{message.confPassword}</p>}

          <div className="flex items-center justify-between mt-4">
            <div className="text-lg font-bold text-primary">Sign In</div>
            <Button onClick={handleSubmit} />
          </div>
        </div>
      </div>

      <div className="flex flex-col mb-6 text-sm">
        <div className="text-center text-primary">Dont have an account ?</div>
        <div className="flex justify-center">
          <Link to="/login" className="font-bold cursor-pointer hover:underline text-primary">
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
