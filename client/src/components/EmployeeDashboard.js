import React from 'react';

const EmployeeDashboard = () => {
    return (
        <>
<div class="container-fluid mt-4">
      <div class="row">
        <h1 class="fw-bold">Dashboard</h1>
        <h4 id="employee-name">Employee Name</h4>

        <div class="col-12 d-flex flex-column justify-content-center">
          <div style="height: 100px"></div>
          <div class="d-flex justify-content-between">
            <h2>Openings</h2>
            <div class="form-floating mb-3">
              <input
                type="search"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput"
                ><i class="bi bi-search me-2"></i>Search</label
              >
            </div>
          </div>
          <div>
            <table class="table table-hover">
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
              class="btn btn-primary mt-5"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Select
            </button>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Confirm your shift
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <span>Yonge and Bloor</span
                    ><span class="ms-3">5:00pm to 10:00pm</span>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
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
