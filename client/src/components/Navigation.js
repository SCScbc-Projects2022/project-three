import React from 'react';
import Auth from '../utils/auth';

const Navigation = ({ setActivePage, activePage }) => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const handlePage = (e) => {
    if (e.target.name == '') {
      setActivePage({ Home: true });
      document.title = `Proj3 - Home`;
    } else {
      setActivePage({ [e.target.name]: true });
      document.title = `Proj3 - ${e.target.innerText}`;
    }
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid">
        <a
          className={`navbar-brand ${activePage.Home ? 'active' : ''}`}
          href="#Home"
          name="Home"
          onClick={(e) => handlePage(e)}
        >
          <img
            width="10%"
            height="auto"
            src={require('../assets/img/logos/Locum-logos_transparent.png')}
            alt="logo"
          />
        </a>
        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
          {Auth.loggedIn() ? (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex list-inline justify-content-end">
              <li className="nav-item">
                <a
                  className={`nav-link navItem ${
                    activePage.AdminDashboard ? 'active' : ''
                  }`}
                  name="AdminDashboard"
                  aria-current="page"
                  href="#AdminDashboard"
                  onClick={(e) => handlePage(e)}
                >
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link navItem ${
                    activePage.Payment ? 'active' : ''
                  }`}
                  name="Payment"
                  aria-current="page"
                  href="#Payment"
                  onClick={(e) => handlePage(e)}
                >
                  Payment
                </a>
              </li>
              <li className='nav-item'>
                <a href="/" className='nav-link navItem' onClick={logout}>
                  Logout
                </a>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex list-inline justify-content-end">
              <li className="me-2 nav-item">
                <a
                  className={`nav-link navItem ${
                    activePage.Login ? 'active' : ''
                  }`}
                  name="Login"
                  aria-current="page"
                  href="#Login"
                  onClick={(e) => handlePage(e)}
                >
                  Login
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className={`nav-link navItem ${
                    activePage.Signup ? 'active' : ''
                  }`}
                  aria-current="page"
                  name="Signup"
                  href="#Signup"
                  onClick={(e) => handlePage(e)}
                >
                  Sign up
                </a>
              </li>
            </ul>
          )}
        </div>
        <div>
          <h6 className="navbar-text text-white mx-3"> Staffing. Revolutionized.</h6>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
