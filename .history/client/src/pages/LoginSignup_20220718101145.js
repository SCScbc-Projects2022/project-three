import React from 'react';

import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';

const LoginSignup = () => {
  return (
    <>
      <h1>Login / Signup</h1>
      <LoginForm />
      <SignupForm />
    </>
  );
};

export default LoginSignup;
