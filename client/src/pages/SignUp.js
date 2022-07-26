import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_COMPANY } from '../utils/mutations';

import Auth from '../utils/auth';

const SignUp = () => {
  const [addCompany, { error }] = useMutation(ADD_COMPANY);

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
      console.log(data);
      console.log(`Data added \n\n\n ${JSON.stringify(formState)}`);

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
      console.error(e);
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
            <label for="inputEmail4" className="form-label">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="inputEmail4"
            />
          </div>
          <div className="col-md-4">
            <label for="inputUsername" className="form-label">
              Username
            </label>
            <input
              name="username"
              type="text"
              className="form-control"
              id="inputUsername"
            />
          </div>
          <div className="col-md-3">
            <label for="inputPassword4" className="form-label">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="inputPassword4"
            />
          </div>
          <div className="col-12">
            <label for="inputCompany" className="form-label">
              Company Name
            </label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="inputCompany"
              placeholder="Company name"
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">
              Address
            </label>
            <input
              name="address"
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="col-12">
            <label for="inputAddress2" className="form-label">
              Address 2
            </label>
            <input
              name="address2"
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="col-md-6">
            <label for="inputCity" className="form-label">
              City
            </label>
            <input
              name="city"
              type="text"
              className="form-control"
              id="inputCity"
            />
          </div>
          <div className="col-md-4">
            <label for="inputState" className="form-label">
              Province
            </label>
            <select name="province" id="inputState" className="form-select">
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
            <label for="inputZip" className="form-label">
              Postal Code
            </label>
            <input
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
              <label className="form-check-label" for="gridCheck">
                Sign up for promotional emails
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Sign up
            </button>
          </div>
          {error && <div>Login failed</div>}
        </form>
      </div>
    </>
  );
};

export default SignUp;
