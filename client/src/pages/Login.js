import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { LOGIN_ADMIN, LOGIN_EMPLOYEE } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });

  const [login, { error }] = useMutation(LOGIN_ADMIN);
  const [loginEmployee, { errorUser }] = useMutation(LOGIN_EMPLOYEE);

  const [errorUserMsg, setErrorUserMsg] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const [errorMessageUser, setErrorMessageUser] = useState('');

  const clearErrors = () => {
    setErrorMessage('');
    if (document.getElementById('error-message') == null) {
      return;
    } else {
      document.getElementById('error-message').innerHTML = '';
    }
  };

  const clearErrorsUser = () => {
    setErrorMessageUser('');
    if (document.getElementById('error-messageUser') == null) {
      return;
    } else {
      document.getElementById('error-messageUser').innerHTML = '';
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (e.target.email) {
      if (e.target.email.value && e.target.password.value) {
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
        }
      } else {
        setErrorMessage('Please fill in all field');
      }
    }
    if (e.target.userEmail) {
      if (e.target.userEmail.value && e.target.userPass.value) {
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
          setErrorUserMsg('Login failed - Incorrect Credentials');
          setFormState({ email: '', password: '' });
        }
      } else {
        setErrorMessageUser('Please fill in all field');
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
            className="col-11"
          >
            <div style={{ height: '100px' }}></div>
            <div>
              <h2>Admin Log-in</h2>
            </div>
            <div className="form-floating mb-3 mt-3">
              <input
                onChange={() => clearErrors()}
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
                onChange={() => clearErrors()}
                name="password"
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="col-12 mt-3">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
              {error && (
                <div id="error-message">
                  Login failed - Incorrect Credentials
                </div>
              )}
            </div>
          </form>

          <form
            onSubmit={(e) => {
              handleFormSubmit(e);
            }}
            className="col-11"
          >
            <div style={{ height: '100px' }}></div>
            <div>
              <h2>Employee Log-in</h2>
            </div>
            <div className="form-floating mb-3 mt-3">
              <input
                onChange={() => clearErrorsUser()}
                name="userEmail"
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                onChange={() => clearErrorsUser()}
                name="userPass"
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="col-12 mt-3">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              {errorMessageUser && (
                <div>
                  <p className="error-textUser">{errorMessageUser}</p>
                </div>
              )}
              {errorUserMsg && <p id="error-messageUser">{errorUserMsg}</p>}
            </div>
          </form>

          <div style={{ height: '100px' }}></div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
