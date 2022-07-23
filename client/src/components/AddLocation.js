import React from 'react';

const AddLocation = () => {
    return (
        <>
<div class="container-fluid mt-4">
      <div class="row">
        <h1 class="fw-bold">Add Location</h1>
        <h4 id="company-name">Company Name</h4>
      </div>
    </div>

    <div style="height: 100px"></div>

    <div class="container">
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Location Name</label>
          </div>
          <div style="height: 50px"></div>
          <form class="row g-3"/>
           
            <div class="col-12">
              <label for="inputAddress" class="form-label">Address</label>
              <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
            </div>
            <div class="col-12">
              <label for="inputAddress2" class="form-label">Address 2</label>
              <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
            </div>
            <div class="col-md-6">
              <label for="inputCity" class="form-label">City</label>
              <input type="text" class="form-control" id="inputCity"/>
            </div>
            <div class="col-md-4">
              <label for="inputState" class="form-label">Province</label>
              <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="col-md-2">
              <label for="inputZip" class="form-label">Postal</label>
              <input type="text" class="form-control" id="inputZip"/>
            </div>
            <div class="col-12">
              
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        <div class="col-1"></div>
      </div>
    </div>
        </>
    )
}

export default AddLocation;
