import React from 'react';

const AddRole = () => {
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row">
          <h1 className="fw-bold">Add a Role</h1>
          <h4 id="company-name">Company Name</h4>
        </div>
      </div>

      <div style={{ height: '100px' }}></div>

      <div className="container">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Jane Doe"
                  value="Server"
                />
                <label for="floatingInput">Title</label>
              </div>
            </div>

            <button type="button" className="btn btn-outline-primary mt-5">
              Submit
            </button>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
};

export default AddRole;
