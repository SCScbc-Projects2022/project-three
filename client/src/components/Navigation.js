import React from 'react';
import Auth from '../utils/auth';

const Navigation = ({ setActivePage, activePage }) => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const handlePage = (e) => {
    if (e.target.innerText == 'Locum') {
      setActivePage({ Home: true });
      document.title = `Proj3 - Home`;
    } else {
      setActivePage({ [e.target.innerText]: true });
      document.title = `Proj3 - ${e.target.innerText}`;
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light sticky-top">
      <div className="container-fluid">
        <a
          className={`navbar-brand navItem ${activePage.Home ? 'active' : ''}`}
          href="#Home"
          onClick={(e) => handlePage(e)}
        >
         <img src={require('../assets/img/logos/Locum-logos.jpeg')}/>
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
          {Auth.loggedIn() ? (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={`nav-link navItem ${
                    activePage.Dashboard ? 'active' : ''
                  }`}
                  aria-current="page"
                  href="#Dashboard"
                  onClick={(e) => handlePage(e)}
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/" onClick={logout}>
                  Logout
                </a>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <a
                  className={`nav-link navItem ${
                    activePage.Login ? 'active' : ''
                  }`}
                  aria-current="page"
                  href="#Login"
                  onClick={(e) => handlePage(e)}
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  className={`nav-link navItem ${
                    activePage.Signup ? 'active' : ''
                  }`}
                  aria-current="page"
                  href="#Signup"
                  onClick={(e) => handlePage(e)}
                >
                  Signup
                </a>
              </li>
            </ul>
          )}
        </div>
        <span className="navbar-text"> Staffing. Revolutionized.</span>
      </div>
    </nav>
  );
};

export default Navigation;
