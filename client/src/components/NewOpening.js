import React from 'react';

const NewOpening = () => {
    return (
        <>
    <div class="container-fluid mt-4">
      <div class="row">
        <h1 class="fw-bold">New Opening</h1>
        <h4 id="company-name">Company Name</h4>
      </div>
    </div>

    <div style="height: 100px"></div>

    <div class="container">
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
          <div>
            <h4>Role and Location</h4>
            <div class="form-floating mt-2">
              <select
                class="form-select mt-2"
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
            <div class="form-check form-check-inline mt-3">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                <label class="form-check-label" for="inlineCheckbox1">Jarvis and Front</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                <label class="form-check-label" for="inlineCheckbox2">Yonge and Bloor</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                <label class="form-check-label" for="inlineCheckbox2">Dudas and Ossington</label>
              </div>
              
         
          <div style="height: 25px"></div>
          <div>
            <h4>Date</h4>

<input type="date" id="start" name="work-date"
       value="2022-07-21"
       min="2022-01-01" max="2025-12-31"/>


          </div>

          <div style="height: 25px"></div>
          <h4>Time</h4>
          <div class="mt-3">
              <div class="mt-2">
                <label for="customRange2" class="form-label">Start</label>
                <input type="range" class="form-range" min="12am" max="12pm" id="customRange2"/>
              </div>
              <div class="mt-2">
                <label for="customRange2" class="form-label">Finish</label>
                <input type="range" class="form-range" min="12am" max="12pm" id="customRange2"/>
              </div>
          </div>
          <div>
              <button type="button" class="btn btn-outline-primary mt-4">
                Submit
              </button>
          </div>
        </div>
        <div class="col-1"></div>
      </div>
    </div>
        </>
    )
}

export default NewOpening;
