import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import { useMutation } from '@apollo/client';
import { ADD_POST } from '../utils/mutations';

const NewOpening = ({ companyId }) => {
  const [formState, setFormState] = useState({
    shiftTime: { date: '', hour: '' },
    additionalInfo: '',
    role: '',
    tags: 'TAG',
    location: {
      intersection: '',
      address: {
        number: 33,
        street: 'this tsteet',
        city: 'brampton',
        country: 'canada',
        postalCode: '3esds',
      },
      companyId: companyId,
    },
    companyId,
  });

  const [value, setValue] = useState([0, 24]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    let tempValue = [0, 0];
    tempValue[0] += value[0];
    tempValue[1] += value[1];
  };

  function valueLabelFormat(value) {
    return `${value}:00`;
  }

  const [addPost, { error }] = useMutation(ADD_POST);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let hour = `${value[0]}:00-${value[1]}:00`;

    setFormState(
      ((formState.location.intersection += e.target.location.value),
      (formState.role += e.target.role.value),
      (formState.shiftTime.hour += hour),
      (formState.additionalInfo += e.target.additionalInfo.value),
      (formState.shiftTime.date += e.target.date.value))
    );

    try {
      await addPost({
        variables: { postToSave: formState },
      });
      window.location.reload(false);
    } catch (e) {
      console.error(e);
      // Clear form state
      setFormState({
        shiftTime: { date: '', hour: '' },
        additionalInfo: '',
        role: '',
        tags: 'this tag',
        location: {
          intersection: '',
          address: {
            locationName: 'test location',
            number: 33,
            street: 'this tsteet',
            city: 'brampton',
            country: 'canada',
            postalCode: '3esds',
          },
          companyId: companyId,
        },
        companyId,
      });
    }
  };

  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row">
          <h1 className="fw-bold">New Opening</h1>
          <h4 id="company-name">Company Name</h4>
        </div>
      </div>

      <div style={{ height: '100px' }}></div>
      <form onSubmit={(e) => handleSubmit(e)} className="container">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div>
              <h4>Role and Location</h4>
              <div className="col-md-4">
                <p>Dynamically render the nav items</p>
                <select name="role" id="inputState" className="form-select">
                  <option selected>Choose Role</option>
                  <option>Server</option>
                  <option>Kitchen</option>
                  <option>Bartender</option>
                  <option>Host</option>
                </select>
                <p>Dynamically render the nav items</p>
                <select name="location" id="inputState" className="form-select">
                  <option selected>Choose Location</option>
                  <option>Jarvis and Front</option>
                  <option>Younge and Bloor</option>
                  <option>Dundas and Ossington</option>
                </select>
              </div>
            </div>
            <div style={{ height: '25px' }}></div>
            <div>
              <h4>Date</h4>
              <input
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
            <div style={{ height: '25px' }}></div>
            <div>
              <h4>Additional Info</h4>
              <input name="additionalInfo" type="text" />
            </div>
            <div>
              <h4>Tags</h4>
              <input name="additionalInfo" type="text" />
            </div>
            <div>
              <button type="submit" className="btn btn-outline-primary mt-4">
                Submit
              </button>
              {error && <div>Add position failed</div>}
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </form>
    </>
  );
};

export default NewOpening;
