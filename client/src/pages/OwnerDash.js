import React from 'react';

import AddManager from '../components/AddManager';

const OwnerDash = () => {
  return (
    <>
      <AddManager />
      {/* Dynamically render list using > useQuery */}
      <section id="active-manager-wrapper">
        <h3>
          <strong>Active Managers</strong>
        </h3>
        <hr></hr>
        <ul>
          <li>
            <h5>Sample Manager - Kitchen - Sample@hotmail.com</h5>
          </li>
          <hr></hr>
          <li>
            <h5>Sample Manager - Front - Sample@hotmail.com</h5>
          </li>
          <hr></hr>
          <li>
            <h5>Sample Manager - Upper Management - Sample@hotmail.com</h5>
          </li>
          <hr></hr>
        </ul>
      </section>
    </>
  );
};

export default OwnerDash;
