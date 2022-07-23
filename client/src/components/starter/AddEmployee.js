import React, { useState } from 'react';

import Auth from '../utils/auth';

import { useMutation } from '@apollo/client';
import { ADD_EMPLOYEE } from '../utils/mutations';

const AddEmployee = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    role: '',
    // When schemas are done, remove password parameter
    password: '00000',
    accountLevel: 'employee',
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
      // When submitting, make sure to refresh the page (pretty sure it does already) so that the next time they try to add a new employee,
      // it allows them and auto increment in the database
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <form id="add-employee-form" onSubmit={handleFormSubmit}>
        <h4>Add an Employee - Form not functional yet</h4>
        <input
          type="text"
          placeholder="Employee Name"
          name="username"
          onChange={handleChange}
          value={formState.username}
          required
        />
        <input
          type="email"
          placeholder="Employee Email"
          name="email"
          onChange={handleChange}
          value={formState.email}
          required
        />
        <input
          name="role"
          placeholder="Employee Role"
          onChange={handleChange}
        />
        <button
          disabled
          // disabled={!(formState.username && formState.email)}
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

export default AddEmployee;