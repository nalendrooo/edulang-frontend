import React from 'react';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import AuthLayout from '../container/layouts/AuthLayout';
import Login from '../container/fragments/auth/login';
import { asyncAuthUserLogin } from '../states/auth/action';
// import api from '../config/services/api';

const LoginPage = () => {
  const dispatch = useDispatch();
  const onLogin = (email, password) => dispatch(asyncAuthUserLogin(email, password));

  return (
    <AuthLayout>
      <Login onLogin={onLogin} />
    </AuthLayout>
  );
};

export default LoginPage;
