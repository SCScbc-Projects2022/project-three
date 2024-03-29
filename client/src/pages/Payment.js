import React from 'react';

const Payment = () => {
  return (
    <>
      <div className="">
        <img
          src={require('../assets/img/hero-payment.jpg')}
          width="100%"
          height="auto"
          alt=""
        />
      </div>
      <div className="d-flex flex-column justify-content-center ms-2 me-2">
        <div className="mt-4 mb-2 d-flex justify-content-center text-center">
          <h2 className="fw-bold">
            Pricing that's easy and grows with your business
          </h2>
        </div>
        <div className="mt-2 mb-2 ms-5 me-5 d-flex text-center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            officia amet ea vero! Tenetur, tempore. Debitis animi, sed facilis
            libero molestiae, maiores assumenda nihil non incidunt dolore
            aspernatur quod quae optio vel magnam quasi quam et nobis soluta
            officiis aut ab repellat odio. Assumenda suscipit laborum iure?
            Neque, nulla dolores?
          </p>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center mt-4 ms-4 me-4">
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title fw-bold">Small</h5>
                <p className="card-text">0-100 employees.</p>
                <a
                  href="../html-sandbox/stripe.html"
                  className="btn btn-primary"
                >
                  Select
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title fw-bold">Medium</h5>
                <p className="card-text">100-500 employees.</p>
                <a
                  href="../html-sandbox/stripe.html"
                  className="btn btn-primary"
                >
                  Select
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4 justify-content-center">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title fw-bold">Enterprise</h5>
                <p className="card-text">500+ employees</p>
                <a
                  href="../html-sandbox/stripe.html"
                  className="btn btn-primary"
                >
                  Select
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
