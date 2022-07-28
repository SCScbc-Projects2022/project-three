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
          <h1 className="fw-bold">Dashboard - {company.name}</h1>
          <div style={{ height: '25px' }}></div>
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
              <ol>
                {company.postsArr == undefined ? (
                  <li>No Openings</li>
                ) : company.postsArr == '' ? (
                  <li>No Openings</li>
                ) : (
                  company.postsArr.map((post, index) => {
                    return (
                      <li key={index}>
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
                        Role: {post.role} - Location - {post.location} - Shift
                        Time: {post.shiftTime.hour} - Shift Date{' '}
                        {post.shiftTime.date} - Additional info:{' '}
                        {post.additionalInfo == ''
                          ? 'N/A'
                          : post.additionalInfo}{' '}
                        - Tags: {post.tags}
                      </li>
                    );
                  })
                )}
              </ol>
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
              <ol>
                {company.userArr == undefined ? (
                  <li>No Employees</li>
                ) : company.userArr == '' ? (
                  <li>No Employees</li>
                ) : (
                  company.userArr.map((employee, index) => {
                    return (
                      <li key={index}>
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
                        {employee.role} @ {employee.location} -{' '}
                        {employee.firstName} {employee.lastName} - Email:{' '}
                        {employee.email} - Phone: {employee.phone}
                      </li>
                    );
                  })
                )}
              </ol>
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
              <ol>
                {company.rolesArr == undefined ? (
                  <li>No Roles</li>
                ) : company.rolesArr == '' ? (
                  <li>No Roles</li>
                ) : (
                  company.rolesArr.map((role, index) => {
                    return (
                      <li key={index}>
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
                        Title - {role.title}
                      </li>
                    );
                  })
                )}
              </ol>
            </div>
            <div style={{ height: '5px' }}></div>
            <div>
              <h2>Active Locations</h2>
              <ol>
                {company.locationArr == undefined ? (
                  <li>No Locations</li>
                ) : company.locationArr == '' ? (
                  <li>No Locations</li>
                ) : (
                  company.locationArr.map((location, index) => {
                    return (
                      <li key={index}>
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
                        {location.address.number}- {location.intersection} -{' '}
                        {location.address.city} - {location.address.country} -{' '}
                        {location.address.postalCode}
                      </li>
                    );
                  })
                )}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
