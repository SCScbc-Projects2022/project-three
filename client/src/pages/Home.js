import React from 'react';

import AddManager from '../components/AddManager';
import ManagerDash from './ManagerDash';

const home = ({ activeAccountLevel }) => {
  return (
    <>
      <h4 id="home-header">Home Page</h4>
      {activeAccountLevel == 'manager' ? (
        <ManagerDash />
      ) : activeAccountLevel == 'owner' ? (
        <AddManager />
      ) : (
        'Employee'
      )}
    </>
  );
};

export default home;
