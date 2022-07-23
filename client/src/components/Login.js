import React from 'react';

const Login = () => {
    return (
        <>
 <div class="">
      <img
        src="../assets/img/welcome-banner.jpg"
        width="100%"
        height="auto"
        alt=""
      />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
          <div style="height: 100px"></div>
          <div><h2>Log-in</h2></div>
          <div class="form-floating mb-3 mt-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
        </div>
        <div style="height: 100px"></div>
        <div class="col-1"></div>
      </div>
    </div>
        </>
    )
}

export default Login;
