import React from 'react';
import AuthLayout from '../container/layouts/AuthLayout';
import Register from '../container/fragments/auth/register';

function RegisterPage() {
  return (
    <AuthLayout>
      <Register />
    </AuthLayout>
  );
}

export default RegisterPage;
