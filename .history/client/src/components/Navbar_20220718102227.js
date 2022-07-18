import React, { useState } from 'react';

import Auth from '../utils/auth';

const Navbar = ({ setActivePage, activePage }) => {
  const handlePage = (e) => {
    if (
      e.target.innerText == 'About me' ||
      e.target.innerText == 'Carlos Sabbah'
    ) {
      document.title = `Main - ${e.target.innerText}`;
      setActivePage({ about: true });
    } else if (e.target.innerText == 'Portfolio') {
      document.title = e.target.innerText;
      setActivePage({ portfolio: true });
    }
  };

  return (
    <>
      <ul>
        <li>
          <a
            className={`navItem ${activePage.Home ? 'active' : ''}`}
            href="#Home"
            onClick={(e) => handlePage(e)}
          >
            Home
          </a>
        </li>
        {/* Add conditionally rendering for Login and Signup (i.e. Show signup when not logged in) */}
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
    </>
  );
};

export default Navbar;
