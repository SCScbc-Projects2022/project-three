import React, { useState } from 'react';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { ADD_COMPANY } from '../utils/mutations';
const { validateEmail } = require('../utils/helpers');

const SignUp = () => {
  const [addCompany, { error }] = useMutation(ADD_COMPANY);
  const [errorMessage, setErrorMessage] = useState('');
  const [formState, setFormState] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (
      e.target.name.value &&
      e.target.username.value &&
      e.target.email.value &&
      e.target.password.value &&
      e.target.address.value &&
      e.target.city.value &&
      e.target.province.value &&
      e.target.postalCode.value
    ) {
      setFormState(
        ((formState.name += e.target.name.value),
        (formState.username += e.target.username.value),
        (formState.email += e.target.email.value)),
        (formState.password += e.target.password.value),
        (formState.address += e.target.address.value),
        (formState.city += e.target.city.value),
        (formState.province += e.target.province.value),
        (formState.postalCode += e.target.postalCode.value)
      );

      // use try/catch instead of promises to handle errors
      try {
        // execute addCompany mutation and pass in variable data from form
        const { data } = await addCompany({
          variables: { ...formState },
        });

        Auth.login(data.addCompany.token);
      } catch (e) {
        // Clear state
        setFormState({
          name: '',
          username: '',
          email: '',
          password: '',
          address: '',
          city: '',
          province: '',
          postalCode: '',
        });
      }
    } else {
      setErrorMessage('Please fill in all fields');
    }
  };

  const clearErrors = () => {
    setErrorMessage('');
    if (document.getElementById('error-message') == null) {
      return;
    } else {
      document.getElementById('error-message').innerHTML = '';
    }
  };

  return (
    <>
      <div className="">
        <img
          src={require('../assets/img/hero-sign-up.jpg')}
          width="100%"
          height="auto"
          alt=""
        />
      </div>
      <div className="mt-4 mb-4 text-center">
        <h2 className="fw-bold">
          Simply fill out your company's information below to get started
        </h2>
      </div>

      <div className="container-fluid mt-4 mb-4">
        <form
          onSubmit={(e) => {
            handleFormSubmit(e);
          }}
          className="row g-3"
        >
          <div className="col-md-5">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              onChange={() => clearErrors()}
              name="email"
              type="email"
              className="form-control"
              id="inputEmail4"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputUsername" className="form-label">
              Username
            </label>
            <input
              onChange={() => clearErrors()}
              name="username"
              type="text"
              className="form-control"
              id="inputUsername"
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              onChange={() => clearErrors()}
              name="password"
              type="password"
              className="form-control"
              id="inputPassword4"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputCompany" className="form-label">
              Company Name
            </label>
            <input
              onChange={() => clearErrors()}
              name="name"
              type="text"
              className="form-control"
              id="inputCompany"
              placeholder="Company name"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              onChange={() => clearErrors()}
              name="address"
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">
              Address 2
            </label>
            <input
              onChange={() => clearErrors()}
              name="address2"
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input
              onChange={() => clearErrors()}
              name="city"
              type="text"
              className="form-control"
              id="inputCity"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              Province
            </label>
            <select
              onChange={() => clearErrors()}
              name="province"
              id="inputState"
              className="form-select"
            >
              <option selected>Choose...</option>
              <option>Alberta</option>
              <option>British Columbia</option>
              <option>Manitoba</option>
              <option>New Brunswick</option>
              <option>Nova Scotia</option>
              <option>Ontario</option>
              <option>Prince Edward Island</option>
              <option>Quebec</option>
              <option>Sasketchewan</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">
              Postal Code
            </label>
            <input
              onChange={() => clearErrors()}
              name="postalCode"
              type="text"
              className="form-control"
              id="inputZip"
            />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Sign up for promotional emails
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Sign up
            </button>
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          {error && (
            <div id="error-message">
              Failed to add Signup. Possible Reason: Name, Email or Username
              already exists
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default SignUp;
