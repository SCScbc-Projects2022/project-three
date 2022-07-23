import React from 'react';

const Login = () => {
  return (
    <>
      <div className="">
        <img
          src={require('../assets/img/welcome-banner.jpg')}
          width="100%"
          height="auto"
          alt=""
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div style={{ height: '100px' }}></div>
            <div>
              <h2>Log-in</h2>
            </div>
            <div className="form-floating mb-3 mt-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
          </div>
          <div style={{ height: '100px' }}></div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
