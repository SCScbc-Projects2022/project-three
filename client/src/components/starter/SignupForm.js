import React, { useState } from 'react';

import Auth from '../utils/auth';

import { useMutation } from '@apollo/client';
import { ADD_EMPLOYEE } from '../utils/mutations';

const SignupForm = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(formState);
  };

  const [addUser, { error }] = useMutation(ADD_EMPLOYEE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // use try/catch instead of promises to handle errors
    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await addUser({
        variables: { ...formState },
      });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <h1>Sign up</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Your username"
          name="username"
          onChange={handleChange}
          value={formState.username}
          required
        />
        <input
          type="email"
          placeholder="Your email address"
          name="email"
          onChange={handleChange}
          value={formState.email}
          required
        />
        <input
          type="password"
          placeholder="Your password"
          name="password"
          onChange={handleChange}
          value={formState.password}
          required
        />

        <button
          disabled={
            !(formState.username && formState.email && formState.password)
          }
          type="submit"
          variant="success"
        >
          Submit
        </button>
        {error && <div>Sign up failed</div>}
      </form>
    </>
  );
};

export default SignupForm;
