import React, { useState } from 'react';

import Auth from '../utils/auth';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

const LoginForm = () => {
  const [validated] = useState(false);

  const [login, { error }] = useMutation(LOGIN_USER);

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  const [formState, setFormState] = useState({ email: '', password: '' });

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <h1>Sign in</h1>
      <form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Your email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          required
        ></input>
        <input
          type="password"
          placeholder="Your password"
          name="password"
          value={formState.password}
          onChange={handleChange}
          required
        ></input>
        <button
          disabled={!(formState.email && formState.password)}
          type="submit"
          variant="success"
        >
          Login
        </button>
        {error && <div>Login failed</div>}
      </form>
    </>
  );
};

export default LoginForm;
