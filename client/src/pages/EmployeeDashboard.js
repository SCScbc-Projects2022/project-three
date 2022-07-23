import React from 'react';

const EmployeeDashboard = () => {
    return (
        <>
<div className="container-fluid mt-4">
      <div className="row">
        <h1 className="fw-bold">Dashboard</h1>
        <h4 id="employee-name">Employee Name</h4>

        <div className="col-12 d-flex flex-column justify-content-center">
          <div style="height: 100px"></div>
          <div className="d-flex justify-content-between">
            <h2>Openings</h2>
            <div className="form-floating mb-3">
              <input
                type="search"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput"
                ><i className="bi bi-search me-2"></i>Search</label
              >
            </div>
          </div>
          <div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Location</th>
                  <th scope="col">Position</th>
                  <th scope="col">Start Time</th>
                  <th scope="col">End Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Yonge and Bloor</td>
                  <td>Server</td>
                  <td>5:00pm</td>
                  <td>10:00pm</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Dundas and Ossington</td>
                  <td>Bartender</td>
                  <td>12:00pm</td>
                  <td>4:00pm</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Bathurst and St. Clair</td>
                  <td>Otto</td>
                  <td>6:00pm</td>
                  <td>11:00pm</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-primary mt-5"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Select
            </button>
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Confirm your shift
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <span>Yonge and Bloor</span
                    ><span className="ms-3">5:00pm to 10:00pm</span>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default EmployeeDashboard;
