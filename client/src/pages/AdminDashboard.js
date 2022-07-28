import { useQuery, useMutation } from '@apollo/client';
import { GET_COMPANY } from '../utils/queries';
import {
  REMOVE_POST,
  REMOVE_EMPLOYEE,
  REMOVE_ROLE,
  REMOVE_LOCATION,
} from '../utils/mutations';

const AdminDashboard = ({ activePage, setActivePage, companyId }) => {
  const handlePage = (e) => {
    setActivePage({ [e.target.name]: true });
    document.title = `Proj3 - ${e.target.innerText}`;
  };

  // Returns specific company
  const { loading, data } = useQuery(GET_COMPANY, {
    variables: { id: companyId },
  });
  const company = data?.company || [];

  const [removePost, { postError }] = useMutation(REMOVE_POST);
  const [removeEmployee, { userError }] = useMutation(REMOVE_EMPLOYEE);
  const [removeRole, { roleError }] = useMutation(REMOVE_ROLE);
  const [removeLocation, { locationError }] = useMutation(REMOVE_LOCATION);

  const deleteData = async (data, Id) => {
    if (data == 'post') {
      try {
        await removePost({
          variables: { Id, companyId },
        });
      } catch (err) {
        console.error(err);
      }
    }
    if (data == 'user') {
      try {
        await removeEmployee({
          variables: { Id, companyId },
        });
      } catch (err) {
        console.error(err);
      }
    }

    if (data == 'role') {
      try {
        await removeRole({
          variables: { Id, companyId },
        });
      } catch (err) {
        console.error(err);
      }
    }

    if (data == 'location') {
      try {
        await removeLocation({
          variables: { Id, companyId },
        });
      } catch (err) {
        console.error(err);
      }
    }
    window.location.reload(false);
  };

  return (
    <>
      <div className="container-fluid mt-4 admin-dash">
        <div className="row">
          <div style={{ height: '100px' }}></div>
          <h1 className="fw-bold">Dashboard - {company.name}</h1>
          <div style={{ height: '20px' }}></div>
          <div className="col-12 d-flex flex-column justify-content-center">
            <div>
              <h2>Openings</h2>
              <p>Upload posts for Employees to view.</p>
              <button
                onClick={(e) => {
                  handlePage(e);
                }}
                name="NewOpening"
                type="button"
                className="btn btn-primary btn-lg"
              >
                Add opening +
              </button>
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
                {company.postsArr == undefined ? (
                  <p style={{ color: 'red' }}>No Openings</p>
                ) : company.postsArr == '' ? (
                  <p style={{ color: 'red' }}>No Openings</p>
                ) : (
                  company.postsArr.map((post, index) => {
                    return (
                      <tbody key={index}>
                        {
                          <tr>
                            <td>
                              <button
                                class="delete-btn"
                                name="post"
                                id={post._id}
                                onClick={(e) =>
                                  deleteData(e.target.name, e.target.id)
                                }
                              >
                                X
                              </button>
                            </td>
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
            <div style={{ height: '15px' }}></div>
            <hr></hr>
            <h2>Employee Management</h2>
            <p>Assign employees to available Positions.</p>
            <div>
              <button
                onClick={(e) => {
                  handlePage(e);
                }}
                name="AddEmployee"
                type="button"
                className="btn btn-primary btn-lg"
              >
                Add employee +
              </button>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Employee Role</th>
                    <th scope="col">Employee Name</th>
                    <th scope="col">Employee email</th>
                    <th scope="col">Employee Number</th>
                  </tr>
                </thead>
                {company.userArr == undefined ? (
                  <p style={{ color: 'red' }}>No Employees</p>
                ) : company.userArr == '' ? (
                  <p style={{ color: 'red' }}>No Employees</p>
                ) : (
                  company.userArr.map((employee, index) => {
                    return (
                      <tbody key={index}>
                        {
                          <tr>
                            <td>
                              <button
                                class="delete-btn"
                                name="user"
                                id={employee._id}
                                onClick={(e) =>
                                  deleteData(e.target.name, e.target.id)
                                }
                              >
                                X
                              </button>
                            </td>
                            <td>{employee.role}</td>
                            <td>
                              {employee.firstName} {employee.lastName}
                            </td>
                            <td>{employee.email}</td>
                            <td>{employee.phone}</td>
                          </tr>
                        }
                      </tbody>
                    );
                  })
                )}
              </table>
            </div>
            <div style={{ height: '15px' }}></div>
            <hr></hr>
            <h2>Position Management</h2>
            <p>Upload new Roles and Locations</p>
            <div>
              <button
                onClick={(e) => {
                  handlePage(e);
                }}
                name="AddRole"
                type="button"
                className="btn btn-primary btn-lg"
              >
                Add Role +
              </button>
              <button
                onClick={(e) => {
                  handlePage(e);
                }}
                name="AddLocation"
                type="button"
                className="btn mx-2 btn-primary btn-lg"
              >
                Add Location +
              </button>
              <div style={{ height: '15px' }}></div>
              <h2>Active Roles</h2>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Role Title</th>
                  </tr>
                </thead>
                {company.rolesArr == undefined ? (
                  <p style={{ color: 'red' }}>No Roles</p>
                ) : company.rolesArr == '' ? (
                  <p style={{ color: 'red' }}>No Roles</p>
                ) : (
                  company.rolesArr.map((role, index) => {
                    return (
                      <tbody key={index}>
                        {
                          <tr>
                            <td>
                              <button
                                class="delete-btn"
                                name="role"
                                id={role._id}
                                onClick={(e) =>
                                  deleteData(e.target.name, e.target.id)
                                }
                              >
                                X
                              </button>
                            </td>
                            <td>{role.title}</td>
                          </tr>
                        }
                      </tbody>
                    );
                  })
                )}
              </table>
            </div>
            <div style={{ height: '5px' }}></div>
            <div>
              <h2>Active Locations</h2>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Major intersection</th>
                    <th scope="col">City</th>
                    <th scope="col">Country</th>
                    <th scope="col">Postal</th>
                  </tr>
                </thead>
                {company.locationArr == undefined ? (
                  <p style={{ color: 'red' }}>No Locations</p>
                ) : company.locationArr == '' ? (
                  <p style={{ color: 'red' }}>No Locations</p>
                ) : (
                  company.locationArr.map((location, index) => {
                    return (
                      <tbody key={index}>
                        {
                          <tr>
                            <td>
                              <button
                                class="delete-btn"
                                name="location"
                                id={location._id}
                                onClick={(e) =>
                                  deleteData(e.target.name, e.target.id)
                                }
                              >
                                X
                              </button>
                            </td>
                            <td>
                              {location.intersection
                                ? location.intersection
                                : 'Data not inputted'}
                            </td>
                            <td>
                              {location.address.city
                                ? location.address.city
                                : 'Data not inputted'}
                            </td>
                            <td>
                              {location.address.country
                                ? location.address.country
                                : 'Data not inputted'}
                            </td>
                            <td>
                              {location.address.postalCode
                                ? location.address.postalCode
                                : 'Data not inputted'}
                            </td>
                          </tr>
                        }
                      </tbody>
                    );
                  })
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
