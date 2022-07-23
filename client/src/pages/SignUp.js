import React from 'react';

const SignUp = () => {
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
        <form className="row g-3">
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Password
            </label>
            <input
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
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-md-4">
            <label for="inputState" className="form-label">
              Province
            </label>
            <select id="inputState" className="form-select">
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
            <input type="text" className="form-control" id="inputZip" />
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
            <a href="./payment.html">
              <button type="text" className="btn btn-primary">
                Sign up
              </button>
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
