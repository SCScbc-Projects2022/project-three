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
  const activeChoices = document.querySelectorAll('.user_posts');
  const handleActive = (e) => {
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
      <div className="container-fluid mt-4">
        <div className="row">
          <h1 className="fw-bold">Dashboard</h1>
          <div className="col-12 d-flex flex-column justify-content-center">
            <div style={{ height: '100px' }}></div>
            <div className="d-flex justify-content-between">
              <h2>Openings</h2>
              <div className="form-floating mb-3">
                <input
                  type="search"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">
                  <i className="bi bi-search me-2"></i>Search
                </label>
              </div>
            </div>
            <div>
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
                  <p style={{ color: 'red' }}>No Openings</p>
                ) : activeData == '' ? (
                  <p style={{ color: 'red' }}>No Openings</p>
                ) : (
                  activeData.map((post, index) => {
                    return (
                      <tbody
                        key={index}
                        onClick={(e) => handleActive(e.target.parentNode)}
                      >
                        {
                          <tr class="user_posts">
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
                tabindex="-1"
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
                      <button type="button" className="btn btn-primary">
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
