import React from 'react';

const Stripe = () => {
  return (
    <>
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

      <link rel="stylesheet" href="checkout.css" />

      <div
        style={{ backgroundColor: 'dodgerblue', color: 'white' }}
        className="text-center sticky-bottom mt-5"
      >
        <div className="card card-footer">Made with ♥ by the Dinglebops</div>
      </div>
    </>
  );
};

export default Stripe;
