import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_EMPLOYEE } from '../utils/mutations';

import Auth from '../utils/auth';

const AddEmployee = ({ companyId }) => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    location: '',
    email: '',
    phone: 0,
    role: '',
    companyId,
  });

  const [addEmployee, { error }] = useMutation(ADD_EMPLOYEE);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // build password and username based on first and last name of employee
    let passAndUser = e.target.firstName.value + e.target.lastName.value;
    let phone = parseInt(e.target.phone.value);

    setFormState(
      ((formState.firstName += e.target.firstName.value),
      (formState.lastName += e.target.lastName.value),
      (formState.username += passAndUser),
      (formState.password += passAndUser),
      (formState.location += e.target.location.value)),
      (formState.email += e.target.email.value),
      (formState.phone = phone),
      (formState.role += e.target.role.value)
    );

    try {
      await addEmployee({
        variables: { employeeToSave: formState },
      });
      window.location.reload(false);
    } catch (e) {
      console.error(e);
      // Clear Form state
      setFormState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        location: '',
        email: '',
        phone: '',
        role: '',
      });
    }
  };

  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row">
          <h1 className="fw-bold">Add an Employee</h1>
          {/* <h4 id="company-name">Company Name</h4> */}
        </div>
      </div>

      <div style={{ height: '100px' }}></div>

      <div className="container">
        <div className="row">
          <div className="col-1"></div>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            className="col-10"
          >
            <div>
              <div className="form-floating mb-2">
                <input
                  name="firstName"
                  type="text"
                  className="form-control"
                  id="floatingInput"
                />
                <label for="floatingInput">First Name</label>
              </div>
              <div className="form-floating mb-2">
                <input
                  name="lastName"
                  type="text"
                  className="form-control"
                  id="floatingInput"
                />
                <label for="floatingInput">Last Name</label>
              </div>
              <div>
                <div className="form-floating mb-2">
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    id="floatingInputValue"
                  />
                  <label for="floatingInputValue">Contact email</label>
                </div>
              </div>
              <div>
                <div className="form-floating">
                  <input
                    name="phone"
                    type="number"
                    className="form-control"
                    id="floatingInputValue"
                  />
                  <label for="floatingInputValue">Contact number</label>
                </div>
              </div>
              <div className="form-floating mt-2">
                <select
                  name="role"
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                >
                  <option value="Server" selected>
                    Server
                  </option>
                  <option value="Kitchen Staff">Kitchen Staff</option>
                  <option value="Bartender">Bartender</option>
                  <option value="Host">Host</option>
                </select>
                <label for="floatingSelect">Select Role</label>
              </div>
            </div>
            <div className="form-floating mt-2">
              <select
                name="location"
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
              >
                <option value="Downtown Toronto" selected>
                  Downtown Toronto
                </option>
                <option value="Greater Toronto Area">
                  Greater Toronto Area
                </option>
                <option value="Hamilton">Hamilton</option>
                <option value="Montreal">Montreal</option>
              </select>
              <label for="floatingSelect">Original Location</label>
            </div>
            <div>
              <h5 className="mt-3">Preferred locations</h5>
              <div className="form-check form-check-inline mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="option1"
                />
                <label className="form-check-label" for="inlineCheckbox1">
                  Jarvis and Front
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value="option2"
                />
                <label className="form-check-label" for="inlineCheckbox2">
                  Yonge and Bloor
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value="option2"
                />
                <label className="form-check-label" for="inlineCheckbox2">
                  Dundas and Ossington
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-outline-primary mt-5">
              Submit
            </button>
            {error && <div>Failed to add Employee!</div>}
          </form>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
};

export default AddEmployee;
