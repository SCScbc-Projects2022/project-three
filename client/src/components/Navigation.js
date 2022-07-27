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
    <nav className="navbar sticky-top d-flex">
      <div className="container-fluid d-flex justify-content-between">
        <a
          className={`navbar-brand ${activePage.Home ? 'active' : ''}`}
          href="#Home"
          name="Home"
          onClick={(e) => handlePage(e)}
        >
          <img
            width="15%"
            height="auto"
            src={require('../assets/img/logos/Locum-logos_transparent.png')}
            alt="logo"
            className="m-2 d-inline"
          />
        </a>
        <div className='d-flex flex-wrap align-items-center'>
          <h6 className="text-white mb-0"> Staffing. Revolutionized.</h6>
          {Auth.loggedIn() ? (
            <ul className="mb-2 mb-lg-0 d-flex justify-content-end align-items-center">
              <li className="mx-2 nav-item">
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
              <li className="mx-2 nav-item">
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
            <ul className="mb-2 mb-lg-0 d-flex justify-content-end align-items-center">
              <li className="mx-2 nav-item">
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
              <li className='mx-2 nav-item'>
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
      </div>
    </nav>
  );
};

export default Navigation;
