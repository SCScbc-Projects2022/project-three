import React from 'react';

import AddEmployee from '../components/AddEmployee';

const ManagerDash = () => {
  return (
    <>
      <AddEmployee />
      {/* Dynamically render list using > useQuery */}
      {/* Need to update schema and create new Apollo queries to return employees */}
      <section id="active-employee-wrapper">
        <h3>
          <strong>Active Employees</strong>
        </h3>
        <hr></hr>
        <ul>
          {/* Use employeeArr.map() method to render elements */}
          <li>
            <h5>Sample Employee - Waiter - Sample@hotmail.com</h5>
          </li>
          <hr></hr>
          <li>
            <h5>Sample Employee - Front - Sample@hotmail.com</h5>
          </li>
          <hr></hr>
          <li>
            <h5>Sample Employee - Lead Chef - Sample@hotmail.com</h5>
          </li>
          <hr></hr>
          <li>
            <h5>Sample Employee - Bus Boy - Sample@hotmail.com</h5>
          </li>
          <hr></hr>
        </ul>
      </section>
    </>
  );
};

export default ManagerDash;
