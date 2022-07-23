import React from 'react';

const AdminDashboard = () => {
    return (
        <>
    <div class="container-fluid mt-4">
      <div class="row">
        <h1 class="fw-bold">Dashboard</h1>
        <h4 id="company-name">Company Name</h4>
         <div class="col-12 d-flex flex-column justify-content-center">
          <div style="height: 50px"></div>
          <div class="d-flex mt-5 justify-content-center">
            <a href="../html-sandbox/new-opening.html"><button type="button" class="btn btn-primary btn-lg">
              New Opening
            </button></a>
          </div>
          <div style="height: 100px"></div>
          <div>
            <h2>Employees<a href="../html-sandbox/add-emp.html"><i class="bi bi-plus-circle ms-3"></i></a></h2>
            <ol>
              <li>Carlos Sabbah<i class="bi bi-x-circle ms-2"></i></li>
              <li>Ali Momen<i class="bi bi-x-circle ms-2"></i></li>
              <li>Veronica To<i class="bi bi-x-circle ms-2"></i></li>
              <li>Anna Liang<i class="bi bi-x-circle ms-2"></i></li>
              <li>Candice Hall<i class="bi bi-x-circle ms-2"></i></li>
              <li>Cory Sillaots<i class="bi bi-x-circle ms-2"></i></li>
            </ol>
          </div>
          <div style="height: 100px"></div>
          <div>
            <h2>Roles<a href="../html-sandbox/add-role.html">{/*<i class="bi bi-plus-circle ms-3"></i>*/}</a></h2>
            <ol>
              <li>Name 1<i class="bi bi-x-circle ms-2"></i></li>
              <li>Name 1<i class="bi bi-x-circle ms-2"></i></li>
              <li>Name 1<i class="bi bi-x-circle ms-2"></i></li>
            </ol>
          </div>
          <div style="height: 100px"></div>
          <div>
            <h2>Locations<a href="../html-sandbox/add-location.html">{/*<i class="bi bi-plus-circle ms-3"></i>*/}</a></h2>
            <ol>
              <li>Name 1<i class="bi bi-x-circle ms-2"></i></li>
              <li>Name 1<i class="bi bi-x-circle ms-2"></i></li>
              <li>Name 1<i class="bi bi-x-circle ms-2"></i></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default AdminDashboard;
