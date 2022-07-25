import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_COMPANIES, GET_COMPANY } from '../utils/queries';

const AdminDashboard = () => {
  // Returns specific company
  const { loading, data } = useQuery(GET_COMPANY, {
    variables: { id: '62dd9ab6ffea43e02e5bec22' },
  });
  const company = data?.company || [];
  console.log(company);

  // Returns all companies
  // const { loading, data } = useQuery(GET_COMPANIES);
  // const companies = data?.companies || [];
  // console.log(companies);

  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row">
          <h1 className="fw-bold">Dashboard</h1>
          <h4 id="company-name">Company Name</h4>
          <div className="col-12 d-flex flex-column justify-content-center">
            <div style={{ height: '50px' }}></div>
            <div className="d-flex mt-5 justify-content-center">
              <a href="../html-sandbox/new-opening.html">
                <button type="button" className="btn btn-primary btn-lg">
                  New Opening
                </button>
              </a>
            </div>
            <div style={{ height: '100px' }}></div>
            <div>
              <h2>
                Employees
                <a href="../html-sandbox/add-emp.html">
                  <i className="bi bi-plus-circle ms-3"></i>
                </a>
              </h2>
              <ol>
                <li>
                  Carlos Sabbah<i className="bi bi-x-circle ms-2"></i>
                </li>
                <li>
                  Ali Momen<i className="bi bi-x-circle ms-2"></i>
                </li>
                <li>
                  Veronica To<i className="bi bi-x-circle ms-2"></i>
                </li>
                <li>
                  Anna Liang<i className="bi bi-x-circle ms-2"></i>
                </li>
                <li>
                  Candice Hall<i className="bi bi-x-circle ms-2"></i>
                </li>
                <li>
                  Cory Sillaots<i className="bi bi-x-circle ms-2"></i>
                </li>
              </ol>
            </div>
            <div style={{ height: '100px' }}></div>
            <div>
              <h2>
                Roles
                <a href="../html-sandbox/add-role.html">
                  {/*<i className="bi bi-plus-circle ms-3"></i>*/}
                </a>
              </h2>
              <ol>
                <li>
                  Name 1<i className="bi bi-x-circle ms-2"></i>
                </li>
                <li>
                  Name 1<i className="bi bi-x-circle ms-2"></i>
                </li>
                <li>
                  Name 1<i className="bi bi-x-circle ms-2"></i>
                </li>
              </ol>
            </div>
            <div style={{ height: '100px' }}></div>
            <div>
              <h2>
                Locations
                <a href="../html-sandbox/add-location.html">
                  {/*<i className="bi bi-plus-circle ms-3"></i>*/}
                </a>
              </h2>
              <ol>
                <li>
                  Name 1<i className="bi bi-x-circle ms-2"></i>
                </li>
                <li>
                  Name 1<i className="bi bi-x-circle ms-2"></i>
                </li>
                <li>
                  Name 1<i className="bi bi-x-circle ms-2"></i>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
