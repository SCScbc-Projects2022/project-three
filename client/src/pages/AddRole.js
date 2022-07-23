import React from 'react';

const AddRole = () => {
    return (
        <>
  <div class="container-fluid mt-4">
      <div class="row">
        <h1 class="fw-bold">Add a Role</h1>
        <h4 id="company-name">Company Name</h4>
      </div>
    </div>

    <div style="height: 100px"></div>

    <div class="container">
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
          <div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="Jane Doe"
                value="Server"
              />
              <label for="floatingInput">Title</label>
            </div>
          </div>

          <button type="button" class="btn btn-outline-primary mt-5">
            Submit
          </button>
        </div>
        <div class="col-1"></div>
      </div>
    </div>
        </>
    )
}

export default AddRole;
