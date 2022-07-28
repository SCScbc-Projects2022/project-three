import React from 'react';

const PaymentSuccessful = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Locum
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="../html-sandbox/admin-dashboard.html"
                >
                  Dashboard
                </a>
              </li>
            </ul>
            <span className="navbar-text"> Staffing. Revolutionized.</span>
          </div>
        </div>
      </nav>
      <div className="">
        <img
          src={require('../assets/img/thank-you.jpg')}
          width="100%"
          height="auto"
          alt=""
        />
      </div>
      <div className="container justify-content-center">
        <div className="mt-5">
          <h1 className="text-center fw-bold">Thank you for your payment!</h1>
          <p className="text-center mt-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
            possimus itaque sequi at. Tempore consequatur repellendus excepturi
            ad fugiat officiis nesciunt saepe voluptas. Cupiditate consequatur
            culpa laboriosam fugiat recusandae doloremque officia, odit ipsam
            est nihil eius iusto tempora, voluptates numquam! Sint accusamus
            ipsum sunt optio, totam magnam? Odio, expedita aspernatur.
          </p>
          <div className="d-flex justify-content-center">
            <a href="../html-sandbox/admin-dashboard.html">
              <button
                className="btn btn-primary btn-lg justify-content-center mt-5"
                type="submit"
              >
                Get Started
              </button>
            </a>
          </div>
        </div>

        <div className="row"></div>
        <div className="col-1"></div>
        <div className="col-10 d-flex flex-column justify-content-center"></div>
        <div className="col-1"></div>
      </div>
    </>
  );
};

export default PaymentSuccessful;
