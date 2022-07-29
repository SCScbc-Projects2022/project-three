import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import { useMutation, useQuery } from '@apollo/client';
import { ADD_POST } from '../utils/mutations';
import { GET_COMPANY } from '../utils/queries';

const NewOpening = ({ activePage, setActivePage, companyId }) => {
  // Returns specific company
  const { loading, data } = useQuery(GET_COMPANY, {
    variables: { id: companyId },
  });
  const company = data?.company || [];
  const [errorMessage, setErrorMessage] = useState('');
  const [formState, setFormState] = useState({
    shiftTime: { date: '', hour: '' },
    additionalInfo: '',
    role: '',
    tags: [],
    location: '',
    companyId,
  });

  const handlePage = (e) => {
    setActivePage({ [e.target.name]: true });
    document.title = `Proj3 - ${e.target.innerText}`;
  };

  const [value, setValue] = useState([0, 24]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    let tempValue = [0, 0];
    tempValue[0] += value[0];
    tempValue[1] += value[1];

    clearErrors();
  };

  function valueLabelFormat(value) {
    return `${value}:00`;
  }

  const [addPost, { error }] = useMutation(ADD_POST);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let hour = `${value[0]}:00-${value[1]}:00`;
    let tags = e.target.tags.value.split(',');

    if (
      e.target.location.value &&
      e.target.role.value &&
      e.target.additionalInfo.value &&
      e.target.date.value &&
      hour &&
      e.target.tags.value
    ) {
      setFormState(
        ((formState.location += e.target.location.value),
        (formState.role += e.target.role.value),
        (formState.shiftTime.hour += hour),
        (formState.additionalInfo += e.target.additionalInfo.value),
        ((formState.shiftTime.date += e.target.date.value),
        tags.forEach((tag) => formState.tags.push(tag))))
      );

      try {
        await addPost({
          variables: { postToSave: formState },
        });
        window.location.reload(false);
      } catch (e) {
        // Clear form state
        setFormState({
          shiftTime: { date: '', hour: '' },
          additionalInfo: '',
          role: '',
          tags: [],
          location: '',
          companyId,
        });
      }
    } else {
      setErrorMessage('Please fill in all field');
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
      <div style={{ height: '100px' }}></div>
      <div className="container-fluid mt-4">
        <div className="row">
          <h1 className="fw-bold">New Opening</h1>
        </div>
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className="container">
        <div className="row">
          <div className="col-12">
            <div>
              <h4>Role and Location</h4>
              <div className="col-md-4">
                <select
                  onChange={() => clearErrors()}
                  name="role"
                  id="inputState"
                  className="form-select"
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
                <select
                  onChange={() => clearErrors()}
                  name="location"
                  id="inputState"
                  className="my-2 form-select"
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
              </div>
            </div>
            <div style={{ height: '25px' }}></div>
            <div>
              <h4>Date</h4>
              <input
                onChange={() => clearErrors()}
                type="date"
                id="start"
                name="date"
                min="2022-01-01"
                max="2025-12-31"
              />
            </div>
            <div style={{ height: '25px' }}></div>
            <h4>Time</h4>
            <Box className="ml-4" sx={{ width: 250 }}>
              <Slider
                valueLabelFormat={valueLabelFormat}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                max={24}
              />
            </Box>
            <div style={{ height: '15px' }}></div>
            <div>
              <h4>Additional Info</h4>
              <input
                onChange={() => clearErrors()}
                name="additionalInfo"
                type="text"
              />
            </div>
            <div>
              <div style={{ height: '25px' }}></div>
              <h4>Tags</h4>
              <input
                onChange={() => clearErrors()}
                name="tags"
                type="text"
                placeholder="Separate tags with commas"
              />
            </div>
            <div className="mt-2">
              {company.rolesArr == undefined ? (
                <button
                  name="AddRole"
                  type="submit"
                  onClick={(e) => {
                    handlePage(e);
                  }}
                  className="btn btn-outline-primary"
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
                  className="btn btn-outline-primary"
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
                  className="btn btn-outline-primary"
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
                  className="btn btn-outline-primary mx-2"
                >
                  Add Location
                </button>
              ) : (
                ''
              )}

              {company.rolesArr.length == 0 ||
              company.locationArr.length == 0 ? (
                <button type="submit" className="disabled my-2 btn">
                  Submit
                </button>
              ) : (
                <button type="submit" className="btn-outline-primary my-2 btn">
                  Submit
                </button>
              )}
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
              {error && (
                <div id="error-message">
                  Failed to add Position. Possible Reason: Position already
                  exists
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default NewOpening;
