import React from 'react';
import Auth from '../utils/auth';

const Navigation = ({ setActivePage, activePage, account }) => {
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
      <div className="container-fluid" id="navbar">
        <a
          className={`${activePage.Home ? 'active' : ''}`}
          href="#Home"
          name="Home"
          onClick={(e) => handlePage(e)}
        >
          <img
            src={require('../assets/img/logos/Locum-logos_transparent.png')}
            alt="logo"
            className="m-2"
            id="logo"
          />
        </a>
        <div className="d-flex flex-wrap align-items-center justify-content-center">
          {Auth.loggedIn() ? (
            <ul className="navitems mb-2 mb-lg-0 d-flex align-items-center">
              <li className="mx-3 nav-item">
                <a
                  className={`nav-link navItem ${
                    activePage.AdminDashboard || activePage.EmployeeDashboard
                      ? 'active'
                      : ''
                  }`}
                  name={
                    account == 'company'
                      ? 'AdminDashboard'
                      : 'EmployeeDashboard'
                  }
                  aria-current="page"
                  href={
                    account == 'company'
                      ? '#AdminDashboard'
                      : '#EmployeeDashboard'
                  }
                  onClick={(e) => handlePage(e)}
                >
                  {account == 'company' ? 'Company' : 'Employee'} Dashboard
                </a>
              </li>
              {account == 'company' ? (
                <li className="mx-3 nav-item">
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
              ) : (
                ''
              )}
              <li className="mx-3 nav-item">
                <a href="/" className="nav-link navItem" onClick={logout}>
                  Logout
                </a>
              </li>
            </ul>
          ) : (
            <ul className="navitems mb-2 mb-lg-0 d-flex align-items-center">
              <li className="mx-3 nav-item">
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
              <li className="mx-3 nav-item">
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
          <h6 className="text-white mx-3 mb-0"> Staffing. Revolutionized.</h6>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
