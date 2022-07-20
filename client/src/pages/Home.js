import React from 'react';

import AdminDash from './AdminDash';

const home = ({ loggedIn }) => {
  return (
    <>
      <h4 id="home-header">Home Page</h4>
      {loggedIn ? <AdminDash /> : ''}
    </>
  );
};

export default home;
