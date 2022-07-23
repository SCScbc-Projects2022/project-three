import React from 'react';
import Auth from '../utils/auth';

const Navigation = ({ setActivePage, activePage }) => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const handlePage = (e) => {
    setActivePage({ [e.target.innerText]: true });
    document.title = `Proj3 - ${e.target.innerText}`;
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light sticky-top">
        <div class="container-fluid">
            <a class={`navbar-brand navItem ${activePage.Home ? 'active' : ''}`}
                href="#Home">Locum</a>
            <button
                class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <li>
                    <a
                        className={`navItem ${activePage.Home ? 'active' : ''}`}
                        href="#Home"
                        onClick={(e) => handlePage(e)}
                    >
                        Home
                    </a>
                </li>
                {Auth.loggedIn() ? (
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a
                            class="nav-link active"
                            aria-current="page"
                            href="../html-sandbox/admin-dashboard.html">
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
                                className={`navItem ${activePage.Login ? 'active' : ''}`}
                                href="#Login"
                                onClick={(e) => handlePage(e)}
                            >
                                Login
                            </a>
                        </li>
                        <li>
                            <a
                                className={`navItem ${activePage.Signup ? 'active' : ''}`}
                                href="#Signup"
                                onClick={(e) => handlePage(e)}
                            >
                                Signup
                            </a>
                        </li>
                    </ul>
                )}
            </div>
            <span class="navbar-text"> Staffing. Revolutionized.</span>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
