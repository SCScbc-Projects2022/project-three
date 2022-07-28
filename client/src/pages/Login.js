import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { LOGIN_ADMIN, LOGIN_EMPLOYEE } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });

  const [login, { error }] = useMutation(LOGIN_ADMIN);
  const [loginEmployee, { errorUser }] = useMutation(LOGIN_EMPLOYEE);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (e.target.email) {
      setFormState(
        (formState.email += e.target.email.value),
        (formState.password += e.target.password.value)
      );

      try {
        const { data } = await login({
          variables: { ...formState },
        });

        Auth.login(data.login.token);
      } catch (e) {
        // Clear state
        setFormState({ email: '', password: '' });
        console.error(e);
      }
    }
    if (e.target.userEmail) {
      setFormState(
        (formState.email += e.target.userEmail.value),
        (formState.password += e.target.userPass.value)
      );

      try {
        const { data } = await loginEmployee({
          variables: { ...formState },
        });

        Auth.loginEmployee(data.loginEmployee.token);
      } catch (e) {
        // Clear state
        setFormState({ email: '', password: '' });
        console.error(e);
      }
    }
  };

  return (
    <>
      <div className="">
        <img
          src={require('../assets/img/welcome-banner.jpg')}
          width="100%"
          height="auto"
          alt=""
        />
      </div>
      <div className="container">
        <div className="row">
          <form
            onSubmit={(e) => {
              handleFormSubmit(e);
            }}
            className="col-10"
          >
            <div style={{ height: '100px' }}></div>
            <div>
              <h2>Admin Log-in</h2>
            </div>
            <div className="form-floating mb-3 mt-3">
              <input
                name="email"
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                name="password"
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="col-12 mt-4">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            {error && <div>Login failed</div>}
          </form>

          <form
            onSubmit={(e) => {
              handleFormSubmit(e);
            }}
            className="col-10"
          >
            <div style={{ height: '100px' }}></div>
            <div>
              <h2>Employee Log-in</h2>
            </div>
            <div className="form-floating mb-3 mt-3">
              <input
                name="userEmail"
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                name="userPass"
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div className="col-12 mt-4">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            {errorUser && <div>Login failed</div>}
          </form>

          <div style={{ height: '100px' }}></div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
