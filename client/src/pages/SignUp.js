import React from 'react';

const SignUp = () => {
    return (
        <>

<div class="">
  <img
    src="../assets/img/hero-sign-up.jpg"
    width="100%"
    height="auto"
    alt=""
  />
</div>
<div class="mt-4 mb-4 text-center">
  <h2 class="fw-bold">
    Simply fill out your company's information below to get started
  </h2>
</div>

<div class="container-fluid mt-4 mb-4">
  <form class="row g-3">
    <div class="col-md-6">
      <label for="inputEmail4" class="form-label">Email</label>
      <input type="email" class="form-control" id="inputEmail4" />
    </div>
    <div class="col-md-6">
      <label for="inputPassword4" class="form-label">Password</label>
      <input type="password" class="form-control" id="inputPassword4" />
    </div>
    <div class="col-12">
      <label for="inputCompany" class="form-label">Company Name</label>
      <input
        type="text"
        class="form-control"
        id="inputCompany"
        placeholder="Company name"
      />
    </div>
    <div class="col-12">
      <label for="inputAddress" class="form-label">Address</label>
      <input
        type="text"
        class="form-control"
        id="inputAddress"
        placeholder="1234 Main St"
      />
    </div>
    <div class="col-12">
      <label for="inputAddress2" class="form-label">Address 2</label>
      <input
        type="text"
        class="form-control"
        id="inputAddress2"
        placeholder="Apartment, studio, or floor"
      />
    </div>
    <div class="col-md-6">
      <label for="inputCity" class="form-label">City</label>
      <input type="text" class="form-control" id="inputCity" />
    </div>
    <div class="col-md-4">
      <label for="inputState" class="form-label">Province</label>
      <select id="inputState" class="form-select">
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
    <div class="col-md-2">
      <label for="inputZip" class="form-label">Postal Code</label>
      <input type="text" class="form-control" id="inputZip" />
    </div>
    <div class="col-12">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck" />
        <label class="form-check-label" for="gridCheck">
          Sign up for promotional emails
        </label>
      </div>
    </div>
    <div class="col-12">
      <a href="./payment.html"
        ><button type="text" class="btn btn-primary">Sign up</button></a
      >
    </div>
  </form>
</div>
        </>
    )
}

export default SignUp;