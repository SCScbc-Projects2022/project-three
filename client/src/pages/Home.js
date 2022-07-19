import React from 'react';

import ManagerDash from './ManagerDash';
import OwnerDash from './OwnerDash';

const home = ({ activeAccountLevel }) => {
  return (
    <>
      <h4 id="home-header">Home Page</h4>
      {activeAccountLevel == 'manager' ? (
        <ManagerDash />
      ) : activeAccountLevel == 'owner' ? (
        <OwnerDash />
      ) : (
        'Employee'
      )}
    </>
  );
};

export default home;
