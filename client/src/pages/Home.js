import React from 'react';

const Home = ({ setActivePage, activePage, loggedIn }) => {
  const handlePage = () => {
    setActivePage({ Signup: true });
    document.title = `Proj3 - Signup`;
  };

  return (
    <>
      <div>
        <img
          src={require('../assets/img/hero.jpg')}
          width="100%"
          height="auto"
          alt=""
        />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center ms-5 me-5">
        <div className="mt-5">
          <h1 className="fw-bold">Never be short-staffed again</h1>
        </div>
        <div className="text-center">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae velit aliquam a, earum excepturi cupiditate reiciendis
            atque esse in ipsum similique delectus fugit, debitis cum maiores!
            Asperiores, quod numquam. Porro consequatur nemo ex architecto
            dolores. Excepturi, blanditiis accusamus. Cum, architecto illo?
            Soluta blanditiis dolor quisquam iste. Facere unde dolorum itaque?
          </p>
        </div>
        <div className="container-fluid mt-5">
          <img
            src={require('../assets/img/server.jpg')}
            width="100%"
            height="auto"
            alt=""
          />
        </div>
        <div className="mt-5">
          <h1 className="fw-bold text-center">
            Expand your available workforce instantly
          </h1>
        </div>
        <div className="text-center">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae velit aliquam a, earum excepturi cupiditate reiciendis
            atque esse in ipsum similique delectus fugit, debitis cum maiores!
            Asperiores, quod numquam. Porro consequatur nemo ex architecto
            dolores. Excepturi, blanditiis accusamus. Cum, architecto illo?
            Soluta blanditiis dolor quisquam iste. Facere unde dolorum itaque?
          </p>
        </div>
        {loggedIn ? (
          ''
        ) : (
          <div className="mb-5 mt-4">
            <button
              onClick={() => handlePage()}
              type="button"
              className="btn btn-primary btn-lg"
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
