import React from 'react';

const Stripe = () => {
    return (
        <>
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

            <link rel="stylesheet" href="checkout.css" />
            <script src="https://js.stripe.com/v3/"></script>
            <script src="checkout.js" defer></script>

            <div
            style="background-color: dodgerblue; color: white"
            class="text-center sticky-bottom mt-5"
            >
            <div class="card card-footer">Made with ♥ by the Dinglebops</div>
            </div>

            <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
            crossorigin="anonymous"
            ></script>
            <script
            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js"
            integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk"
            crossorigin="anonymous"
            ></script>
            <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js"
            integrity="sha384-ODmDIVzN+pFdexxHEHFBQH3/9/vQ9uori45z4JjnFsRydbmQbmL5t1tQ0culUzyK"
            crossorigin="anonymous"
            ></script>
        </>
    )
}

export default Stripe;