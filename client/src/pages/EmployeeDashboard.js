import React, { useState } from 'react';

import { useQuery } from '@apollo/client';
import { GET_COMPANIES } from '../utils/queries';

const EmployeeDashboard = () => {
  // Returns specific company
  const { loading, data } = useQuery(GET_COMPANIES, {});
  const companies = data?.companies || [];

  const activeData = [];
  companies.forEach((company) => {
    company.postsArr.forEach((post) => {
      activeData.push(post);
    });
  });

  var [active, setActive] = useState({});
  const handleActive = (e) => {
    const activeChoices = document.querySelectorAll('.user_posts');
    activeChoices.forEach((post) => {
      post.className = 'user_posts';
      e.className = 'user_posts active';
    });

    activeChoices.forEach((post) => {
      if (post.className.includes('active')) {
        let role = post.childNodes[1].innerText;
        let location = post.childNodes[2].innerText;
        let dateTime = post.childNodes[3].innerText;
        setActive((active = { role, location, dateTime }));
      }
    });
  };

  return (
    <>
      <div className="employeeDash container-fluid mt-4">
        <div className="row">
          <div style={{ height: '60px' }}></div>
          <h1 className="fw-bold">Dashboard</h1>
          <div className="col-12 d-flex flex-column justify-content-center">
            <div style={{ height: '20px' }}></div>
            <div className="d-flex justify-content-between">
              <h2 id="openings">Openings</h2>
              <div className="form-floating mb-3">
                <input
                  type="search"
                  className="employee-search"
                  id="floatingInput"
                  placeholder="Search"
                />
              </div>
            </div>
            <div>
              <div style={{ overflowX: 'auto' }}>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Role</th>
                      <th scope="col">Location</th>
                      <th scope="col">Time and Date</th>
                      <th scope="col">Additional info</th>
                      <th scope="col">Tags</th>
                    </tr>
                  </thead>
                  {activeData == undefined ? (
                    <tbody>
                      {
                        <tr>
                          <td></td>
                          <td>No Data</td>
                          <td>No Data</td>
                          <td>No Data</td>
                          <td>No Data</td>
                          <td>No Data</td>
                          <td>No Data</td>
                        </tr>
                      }
                    </tbody>
                  ) : activeData == '' ? (
                    <tbody>
                      {
                        <tr>
                          <td></td>
                          <td>No Data</td>
                          <td>No Data</td>
                          <td>No Data</td>
                          <td>No Data</td>
                          <td>No Data</td>
                          <td>No Data</td>
                        </tr>
                      }
                    </tbody>
                  ) : (
                    activeData.map((post, index) => {
                      return (
                        <tbody
                          key={index}
                          onClick={(e) => handleActive(e.target.parentNode)}
                        >
                          {
                            <tr className="user_posts">
                              <td>{index}</td>
                              <td>{post.role}</td>
                              <td>{post.location}</td>
                              <td>
                                {post.shiftTime.hour} - {post.shiftTime.date}
                              </td>
                              <td>{post.additionalInfo}</td>
                              <td>{post.tags}</td>
                            </tr>
                          }
                        </tbody>
                      );
                    })
                  )}
                </table>
              </div>
            </div>
            <div>
              <button
                type="button"
                disabled={active.location == undefined ? true : false}
                className={`btn btn-primary mt-5`}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Select
              </button>
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Confirm your shift
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <span>{active.location}</span>
                      <br></br>
                      <span>{active.dateTime}</span>
                      <br></br>
                      <span>{active.role}</span>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeDashboard;
