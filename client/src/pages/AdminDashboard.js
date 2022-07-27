import { useQuery } from '@apollo/client';
import { GET_COMPANIES, GET_COMPANY, GET_ALL_USERS } from '../utils/queries';
import { GET_POSTS } from '../utils/queries';

const AdminDashboard = ({ activePage, setActivePage, companyId }) => {
  const handlePage = (e) => {
    console.log(e.target.name);
    setActivePage({ [e.target.name]: true });
    document.title = `Proj3 - ${e.target.innerText}`;
  };

  // Returns specific company
  const { loading, data } = useQuery(GET_COMPANY, {
    variables: { id: companyId },
  });
  const company = data?.company || [];
  console.log(true, company);

  // Returns all companies
  // const { loading, data } = useQuery(GET_COMPANIES);
  // const companies = data?.companies || [];
  // console.log(companies);

  // Returns all posts
  // const { loading, data } = useQuery(GET_POSTS);
  // const posts = data?.posts || [];
  // console.log(true, posts);

  // // Returns all Employees
  // const { loading, data } = useQuery(GET_ALL_USERS, {});
  // const allUsers = data?.allUsers || [];
  // console.log(allUsers);
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row">
          <h1 className="fw-bold">Dashboard</h1>
          <h4 id="company-name">Company Name</h4>
          <div className="col-12 d-flex flex-column justify-content-center">
            <div style={{ height: '50px' }}></div>
            <div className="d-flex mt-5 justify-content-center">
              <button
                onClick={(e) => {
                  handlePage(e);
                }}
                name="NewOpening"
                type="button"
                className="btn btn-primary btn-lg"
              >
                New openings
              </button>
            </div>
            <div style={{ height: '100px' }}></div>
            <div>
              <h2>Employees</h2>
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
                {company.userArr.map((employee, index) => {
                  return (
                    <li key={index}>
                      {employee.firstName} - {employee.lastName}{' '}
                      <i className="bi bi-x-circle ms-2"></i>
                    </li>
                  );
                })}
              </ol>
            </div>
            <div style={{ height: '100px' }}></div>
            <div>
              <h2>Roles</h2>
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
              <ol>
                <li>Role 1</li>
                <li>Role 2</li>
              </ol>
            </div>
            <div style={{ height: '100px' }}></div>
            <div>
              <h2>Locations</h2>
              <button
                onClick={(e) => {
                  handlePage(e);
                }}
                name="AddLocation"
                type="button"
                className="btn btn-primary btn-lg"
              >
                Add Location +
              </button>
              <ol>
                <li>Company location 1</li>
                <li>Company location 2 </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
