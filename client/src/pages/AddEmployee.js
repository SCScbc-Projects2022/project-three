import React, { useState } from 'react';
import Auth from '../utils/auth';
import { useMutation, useQuery } from '@apollo/client';
import { GET_COMPANY } from '../utils/queries';
import { ADD_EMPLOYEE } from '../utils/mutations';
const { validateEmail } = require('../utils/helpers');

const AddEmployee = ({ activePage, setActivePage, companyId }) => {
  const handlePage = (e) => {
    setActivePage({ [e.target.name]: true });
    document.title = `Proj3 - ${e.target.innerText}`;
  };

  // Returns specific company
  const { loading, data } = useQuery(GET_COMPANY, {
    variables: { id: companyId },
  });
  const company = data?.company || [];
  const [errorMessage, setErrorMessage] = useState('');
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    location: '',
    email: '',
    phone: '',
    role: '',
    companyId,
  });

  const [addEmployee, { error }] = useMutation(ADD_EMPLOYEE);

  const clearErrors = () => {
    setErrorMessage('');
    if (document.getElementById('error-message') == null) {
      return;
    } else {
      document.getElementById('error-message').innerHTML = '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      e.target.firstName.value &&
      e.target.lastName.value &&
      e.target.firstName.value &&
      e.target.lastName.value &&
      e.target.location.value &&
      e.target.email.value &&
      e.target.phone.value &&
      e.target.role.value
    ) {
      // build password and username based on first and last name of employee
      let passAndUser = e.target.firstName.value + e.target.lastName.value;

      setFormState(
        ((formState.firstName += e.target.firstName.value),
        (formState.lastName += e.target.lastName.value),
        (formState.username += passAndUser),
        (formState.password += passAndUser),
        (formState.location += e.target.location.value)),
        (formState.email += e.target.email.value),
        (formState.phone = e.target.phone.value),
        (formState.role += e.target.role.value)
      );

      try {
        await addEmployee({
          variables: { employeeToSave: formState },
        });
        window.location.reload(false);
      } catch (e) {
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
    } else {
      setErrorMessage('Please fill in all fields');
    }
  };

  return (
    <>
      <div style={{ height: '100px' }}></div>
      <div className="container-fluid mt-4">
        <div className="row">
          <h1 className="fw-bold">Add an Employee</h1>
          <div style={{ height: '50px' }}></div>
        </div>
      </div>

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
                  onChange={() => clearErrors()}
                />
                <label htmlFor="floatingInput">First Name</label>
              </div>
              <div className="form-floating mb-2">
                <input
                  name="lastName"
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  onChange={() => clearErrors()}
                />
                <label htmlFor="floatingInput">Last Name</label>
              </div>
              <div>
                <div className="form-floating mb-2">
                  <input
                    onChange={() => clearErrors()}
                    name="email"
                    type="email"
                    className="form-control"
                    id="floatingInputValue"
                  />
                  <label htmlFor="floatingInputValue">Contact email</label>
                </div>
              </div>
              <div>
                <div className="form-floating">
                  <input
                    onChange={() => clearErrors()}
                    name="phone"
                    type="number"
                    className="form-control"
                    id="floatingInputValue"
                  />
                  <label htmlFor="floatingInputValue">Contact number</label>
                </div>
              </div>
              <div className="form-floating mt-2">
                <select
                  name="role"
                  onChange={() => clearErrors()}
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                >
                  {company.rolesArr == undefined ? (
                    <option value="no">No Available Roles</option>
                  ) : company.rolesArr.length == 0 ? (
                    <option value="no">No Available Roles</option>
                  ) : (
                    company.rolesArr.map((role, index) => {
                      return (
                        <option key={index} value={role.title}>
                          {role.title}
                        </option>
                      );
                    })
                  )}
                </select>
                <label htmlFor="floatingSelect">Select Role</label>
              </div>
            </div>
            <div className="form-floating mt-2">
              <select
                name="location"
                onChange={() => clearErrors()}
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
              >
                {company.locationArr == undefined ? (
                  <option value="no">No Available Locations</option>
                ) : company.locationArr.length == 0 ? (
                  <option value="no">No Available Locations</option>
                ) : (
                  company.locationArr.map((location, index) => {
                    return (
                      <option key={index} value={location.intersection}>
                        {location.intersection}
                      </option>
                    );
                  })
                )}
              </select>
              <label htmlFor="floatingSelect">Choose Location</label>
            </div>
            {company.rolesArr == undefined ? (
              <button
                name="AddRole"
                type="submit"
                onClick={(e) => {
                  handlePage(e);
                }}
                className="btn btn-outline-primary mt-2"
              >
                Add Role
              </button>
            ) : company.rolesArr.length == 0 ? (
              <button
                name="AddRole"
                onClick={(e) => {
                  handlePage(e);
                }}
                type="submit"
                className="btn btn-outline-primary mt-2"
              >
                Add Role
              </button>
            ) : (
              ''
            )}
            {company.locationArr == undefined ? (
              <button
                name="AddLocation"
                type="submit"
                onClick={(e) => {
                  handlePage(e);
                }}
                className="btn btn-outline-primary mx-2 mt-2"
              >
                Add Location
              </button>
            ) : company.locationArr.length == 0 ? (
              <button
                name="AddLocation"
                onClick={(e) => {
                  handlePage(e);
                }}
                type="submit"
                className="btn btn-outline-primary mx-2 mt-2"
              >
                Add Location
              </button>
            ) : (
              ''
            )}

            {company.rolesArr.length == 0 || company.locationArr.length == 0 ? (
              <button type="submit" className="disabled btn mt-2">
                Submit
              </button>
            ) : (
              <button type="submit" className=" btn-outline-primary btn mt-2">
                Submit
              </button>
            )}
            <div style={{ marginTop: '10px' }}></div>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            {error && (
              <div id="error-message">
                Failed to add Employee. Possible Reason: Employee already exists
              </div>
            )}
            <div style={{ marginTop: '10px' }}></div>
            <p>
              Employee login: <br></br>Email: Contact email<br></br>Password:
              First name + Last name
            </p>
          </form>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
};

export default AddEmployee;
