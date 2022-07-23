import React from 'react';

const Payment = () => {
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
        src={require("../assets/img/hero-payment.jpg")}
        width="100%"
        height="auto"
        alt=""
      />
    </div>
    <div class="d-flex flex-column justify-content-center ms-2 me-2">
      <div class="mt-4 mb-2 d-flex justify-content-center text-center">
        <h2 class="fw-bold">
          Pricing that's easy and grows with your business
        </h2>
      </div>
      <div class="mt-2 mb-2 ms-5 me-5 d-flex text-center">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
          officia amet ea vero! Tenetur, tempore. Debitis animi, sed facilis
          libero molestiae, maiores assumenda nihil non incidunt dolore
          aspernatur quod quae optio vel magnam quasi quam et nobis soluta
          officiis aut ab repellat odio. Assumenda suscipit laborum iure? Neque,
          nulla dolores?
        </p>
      </div>
    </div>
    <div class="d-flex flex-column justify-content-center mt-4 ms-4 me-4">
      <div class="row">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title fw-bold">Small</h5>
              <p class="card-text">0-100 employees.</p>
              <a href="../html-sandbox/stripe.html" class="btn btn-primary"
                >Select</a
              >
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title fw-bold">Medium</h5>
              <p class="card-text">100-500 employees.</p>
              <a href="../html-sandbox/stripe.html" class="btn btn-primary"
                >Select</a
              >
            </div>
          </div>
        </div>
        <div class="col-sm-4 justify-content-center">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title fw-bold">Enterprise</h5>
              <p class="card-text">500+ employees</p>
              <a href="../html-sandbox/stripe.html" class="btn btn-primary"
                >Select</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default Payment;
