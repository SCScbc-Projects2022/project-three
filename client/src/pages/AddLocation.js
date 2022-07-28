import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_LOCATION } from '../utils/mutations';

const AddLocation = ({ companyId }) => {
  const [formState, setFormState] = useState({
    intersection: '',
    companyId,
    address: {
      number: 0,
      street: '',
      city: '',
      country: '',
      postalCode: '',
    },
  });

  const [addLocation, { error }] = useMutation(ADD_LOCATION);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let number = parseInt(e.target.number.value);

    setFormState(
      ((formState.intersection += e.target.intersection.value),
      ((formState.address.number += number),
      ((formState.address.street += e.target.street.value),
      ((formState.address.city += e.target.city.value),
      ((formState.address.country += e.target.country.value),
      (formState.address.postalCode += e.target.postalCode.value))))))
    );

    try {
      await addLocation({
        variables: { locationToSave: formState },
      });
      window.location.reload(false);
    } catch (e) {
      console.error(e);
      // Clear Form state
      setFormState({
        intersection: '',
        companyId: companyId,
        address: {
          number: '',
          street: '',
          city: '',
          country: '',
          postalCode: '',
        },
      });
    }
  };

  return (
    <>
      <div style={{ height: '100px' }}></div>
      <div className="container-fluid mt-4">
        <div className="row">
          <h1 className="fw-bold">Add Location</h1>
          <h4 id="company-name">Company Name</h4>
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
            <div style={{ height: '50px' }}></div>
            <form className="row g-3" />

            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">
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
              <label htmlFor="suiteNumber" className="form-label">
                Suite number
              </label>
              <input
                type="number"
                name="number"
                className="form-control"
                id="suiteNumber"
                placeholder="382"
              />
            </div>
            <div className="col-12">
              <label htmlFor="Street" className="form-label">
                Street
              </label>
              <input
                type="text"
                name="street"
                className="form-control"
                id="Street"
                placeholder="Winston Churchill"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">
                City
              </label>
              <input
                name="city"
                type="text"
                className="form-control"
                id="inputCity"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCountry" className="form-label">
                Country
              </label>
              <input
                name="country"
                type="text"
                className="form-control"
                id="inputCountry"
              />
            </div>
            <div className="col-12">
              <label htmlFor="intersection" className="form-label">
                Intersection
              </label>
              <input
                id="intersection"
                name="intersection"
                type="text"
                className="form-control"
                placeholder="Major intersection"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">
                Province
              </label>
              <select name="province" id="inputState" className="form-select">
                <option selected>Choose...</option>
                <option>Ontario</option>
                <option>Quebec</option>
                <option>Yukon</option>
                <option>Nunavut</option>
              </select>
            </div>
            <div className="col-md-2">
              <label htmlFor="inputZip" className="form-label">
                Postal
              </label>
              <input
                name="postalCode"
                type="text"
                className="form-control"
                id="inputZip"
              />
            </div>
            <div className="col-12"></div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              {error && <div>Add Location failed</div>}
            </div>
          </form>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
};

export default AddLocation;
