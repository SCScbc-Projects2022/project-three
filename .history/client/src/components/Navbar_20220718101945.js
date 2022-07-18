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
    } else if (e.target.innerText == 'Contact') {
      document.title = e.target.innerText;
      setActivePage({ contact: true });
    } else if (e.target.innerText == 'Resume') {
      document.title = e.target.innerText;
      setActivePage({ resume: true });
    }
    setActiveNav(false);
  };

  const [activeNav, setActiveNav] = useState(false);

  return (
    <>
      <ul>
        <li>Home</li>
        {/* Add conditionally rendering for Login and Signup (i.e. Show signup when not logged in) */}
        <li>Login</li>
        <li>Signup</li>
      </ul>
    </>
  );
};

export default Navbar;
