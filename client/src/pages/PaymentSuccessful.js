import React from 'react';

const PaymentSuccessful = () => {
    return (
        <>
    <nav class="navbar navbar-expand-lg bg-light sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Locum</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="../html-sandbox/admin-dashboard.html"
                >Dashboard</a
              >
            </li>
          </ul>
          <span class="navbar-text"> Staffing. Revolutionized.</span>
        </div>
      </div>
    </nav>
    <div class="">
      <img
        src={require("../assets/img/thank-you.jpg")}
        width="100%"
        height="auto"
        alt=""
      />
    </div>
    <div class="container justify-content-center">
      <div class="mt-5">
        <h1 class="text-center fw-bold">Thank you for your payment!</h1>
        <p class="text-center mt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
          possimus itaque sequi at. Tempore consequatur repellendus excepturi ad
          fugiat officiis nesciunt saepe voluptas. Cupiditate consequatur culpa
          laboriosam fugiat recusandae doloremque officia, odit ipsam est nihil
          eius iusto tempora, voluptates numquam! Sint accusamus ipsum sunt
          optio, totam magnam? Odio, expedita aspernatur.
        </p>
        <div class="d-flex justify-content-center">
          <a href="../html-sandbox/admin-dashboard.html">
            <button
              class="btn btn-primary btn-lg justify-content-center mt-5"
              type="submit"
            >
              Get Started
            </button>
          </a>
        </div>
      </div>

      <div class="row"></div>
      <div class="col-1"></div>
      <div class="col-10 d-flex flex-column justify-content-center"></div>
      <div class="col-1"></div>
    </div>
        </>
    )
}

export default PaymentSuccessful;
