import React, { useState } from 'react';

import Auth from '../utils/auth';

const Navbar = ({ setActivePage, activePage }) => {
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
