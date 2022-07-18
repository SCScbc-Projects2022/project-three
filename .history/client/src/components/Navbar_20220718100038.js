import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';

import Auth from '../utils/auth';

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ul>
        <li>Page 1</li>
        <li>Page 2</li>
        <li>Page 3</li>
      </ul>
    </>
  );
};

export default AppNavbar;
