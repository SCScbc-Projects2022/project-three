import React from 'react';

const AddEmployee = () => {
    return (
        <>
 <div class="container-fluid mt-4">
      <div class="row">
        <h1 class="fw-bold">Add an Employee</h1>
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
                placeholder="name@example.com"
                value="Last, First"
              />
              <label for="floatingInput">Name</label>
            </div>
            <div>
              <form class="form-floating">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInputValue"
                  placeholder="name@example.com"
                  value="test@jacastors.com"
                />
                <label for="floatingInputValue">Contact email</label>
              </form>
            </div>
            <div>
              <form class="form-floating mt-2">
                <input
                  type="password"
                  class="form-control"
                  id=""
                  placeholder="12345"
                  value="2343"
                />
                <label for="floatingInputValue">Create a Password</label>
              </form>
            </div>
            <div class="form-floating mt-2">
              <select
                class="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
              >
                <option selected>Server</option>
                <option value="1">Kitchen Staff</option>
                <option value="2">Bartender</option>
                <option value="3">Host</option>
              </select>
              <label for="floatingSelect">Select Role</label>
            </div>
          </div>
          <div class="form-floating mt-2">
            <select
              class="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option selected>Downtown Toronto</option>
              <option value="1">Greater Toronto Area</option>
              <option value="2">Hamilton</option>
              <option value="3">Montreal</option>
            </select>
            <label for="floatingSelect">Original Location</label>
          </div>
          <div>
            <h5 class="mt-3">Preferred locations</h5>
            <div class="form-check form-check-inline mt-2">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
              />
              <label class="form-check-label" for="inlineCheckbox1"
                >Jarvis and Front</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="option2"
              />
              <label class="form-check-label" for="inlineCheckbox2"
                >Yonge and Bloor</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="option2"
              />
              <label class="form-check-label" for="inlineCheckbox2"
                >Dudas and Ossington</label
              >
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

export default AddEmployee;
