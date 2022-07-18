import React, { useState } from 'react';

import Auth from '../utils/auth';

const Navbar = ({ setActivePage, activePage }) => {
  const handlePage = (e) => {
    setActivePage({e.target.innerText: true})
    // 
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
