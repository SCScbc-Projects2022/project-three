import React, { useState } from 'react';

import Auth from '../utils/auth';

import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';

const LoginForm = () => {
  const [login, { error }] = useMutation(LOGIN);

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
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Your email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Your password"
          name="password"
          value={formState.password}
          onChange={handleChange}
          required
        />
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