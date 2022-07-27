import { useQuery, useMutation } from '@apollo/client';
import { GET_COMPANY } from '../utils/queries';
import { REMOVE_POST, REMOVE_EMPLOYEE } from '../utils/mutations';

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

  const [removePost, { postError }] = useMutation(REMOVE_POST);
  const [removeEmployee, { userError }] = useMutation(REMOVE_EMPLOYEE);

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
      console.log(Id);
      try {
        await removeEmployee({
          variables: { Id, companyId },
        });
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row">
          <h1 className="fw-bold">Dashboard</h1>
          <h4 id="company-name">Company Name</h4>
          <div className="col-12 d-flex flex-column justify-content-center">
            <div style={{ height: '50px' }}></div>
            <div>
              <h2>Openings</h2>
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
                {company.userArr == undefined ? (
                  <li>No Openings</li>
                ) : (
                  company.postsArr.map((post, index) => {
                    return (
                      <li key={index}>
                        <button
                          name="post"
                          id={post._id}
                          onClick={(e) =>
                            deleteData(e.target.name, e.target.id)
                          }
                        >
                          X
                        </button>
                        Shift Time: {post.shiftTime.hour} - Additional info:{' '}
                        {post.additionalInfo == ''
                          ? 'N/A'
                          : post.additionalInfo}
                      </li>
                    );
                  })
                )}
              </ol>
            </div>
            <div style={{ height: '25px' }}></div>
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
                {company.userArr == undefined ? (
                  <li>No Employees</li>
                ) : (
                  company.userArr.map((employee, index) => {
                    return (
                      <li key={index}>
                        <button
                          name="user"
                          id={employee._id}
                          onClick={(e) =>
                            deleteData(e.target.name, e.target.id)
                          }
                        >
                          X
                        </button>
                        {employee.firstName} - {employee.lastName}{' '}
                      </li>
                    );
                  })
                )}
              </ol>
            </div>
            <div style={{ height: '25px' }}></div>
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
            <div style={{ height: '25px' }}></div>
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
