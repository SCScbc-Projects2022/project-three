import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_ROLE } from '../utils/mutations';

const AddRole = ({ companyId }) => {
  const [formState, setFormState] = useState({
    title: '',
    companyId,
  });

  const [addRole, { error }] = useMutation(ADD_ROLE);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormState((formState.title += e.target.title.value));

    try {
      await addRole({
        variables: { roleToSave: formState },
      });
      window.location.reload(false);
    } catch (e) {
      console.error(e);
      // Clear Form state
      setFormState({
        title: '',
        companyId,
      });
    }
  };

  return (
    <>
      <div style={{ height: '100px' }}></div>
      <div className="container-fluid mt-4">
        <div className="row">
          <h1 className="fw-bold">Add a Role</h1>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-1"></div>
          <form onSubmit={(e) => handleSubmit(e)} className="col-10">
            <div>
              <div className="form-floating mb-3">
                <input name="title" type="text" className="form-control" />
                <label for="floatingInput">Title</label>
              </div>
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            {error && <div>Add Role failed</div>}
          </form>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
};

export default AddRole;
