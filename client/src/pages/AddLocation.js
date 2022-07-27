import React from 'react';

const AddLocation = () => {
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row">
          <h1 className="fw-bold">Add Location</h1>
          <h4 id="company-name">Company Name</h4>
        </div>
      </div>

      <div style={{ height: '100px' }}></div>

      <div className="container">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div style={{ height: '50px' }}></div>
            <form className="row g-3" />

            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">
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
              <label htmlFor="inputAddress2" className="form-label">
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
              <label htmlFor="inputCity" className="form-label">
                City
              </label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">
                Province
              </label>
              <select id="inputState" className="form-select">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="col-md-2">
              <label htmlFor="inputZip" className="form-label">
                Postal
              </label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
            <div className="col-12"></div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
};

export default AddLocation;
