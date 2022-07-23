import React from 'react';

const NewOpening = () => {
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row">
          <h1 className="fw-bold">New Opening</h1>
          <h4 id="company-name">Company Name</h4>
        </div>
      </div>

      <div style={{ height: '100px' }}></div>
      <div className="container">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div>
              <h4>Role and Location</h4>
              <div className="form-floating mt-2">
                <select
                  className="form-select mt-2"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                />
                <option selected>Server</option>
                <option value="1">Kitchen Staff</option>
                <option value="2">Bartender</option>
                <option value="3">Host</option>
              </div>
              <label for="floatingSelect">Select Role</label>
            </div>
            <div className="form-check form-check-inline mt-3">
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
                Dudas and Ossington
              </label>
            </div>

            <div style={{ height: '25px' }}></div>
            <div>
              <h4>Date</h4>

              <input
                type="date"
                id="start"
                name="work-date"
                value="2022-07-21"
                min="2022-01-01"
                max="2025-12-31"
              />
            </div>

            <div style={{ height: '25px' }}></div>
            <h4>Time</h4>
            <div className="mt-3">
              <div className="mt-2">
                <label for="customRange2" className="form-label">
                  Start
                </label>
                <input
                  type="range"
                  className="form-range"
                  min="12am"
                  max="12pm"
                  id="customRange2"
                />
              </div>
              <div className="mt-2">
                <label for="customRange2" className="form-label">
                  Finish
                </label>
                <input
                  type="range"
                  className="form-range"
                  min="12am"
                  max="12pm"
                  id="customRange2"
                />
              </div>
            </div>
            <div>
              <button type="button" className="btn btn-outline-primary mt-4">
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

export default NewOpening;
