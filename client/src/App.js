import React, { useState } from 'react';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

// import Auth from './utils/auth';

import Home from './pages/Home';
import AddEmployee from './pages/AddEmployee';
import AddLocation from './pages/AddLocation';
import AddRole from './pages/AddRole';
import AdminDashboard from './pages/AdminDashboard';
import CompanyProfile from './pages/CompanyProfile';
import EmployeeDashboard from './pages/EmployeeDashboard';
import Login from './pages/Login';
import NewOpening from './pages/NewOpening';
import Payment from './pages/Payment';
import SignUp from './pages/SignUp';
import Stripe from './pages/Stripe';

import { setContext } from '@apollo/client/link/context';

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // Page controller
  const [activePage, setActivePage] = useState({
    Home: true,
    Login: false,
    Signup: false,
    AddEmployee: false,
    AddLocation: false,
    AddRole: false,
    AdminDashboard: false,
    CompanyProfile: false,
    EmployeeDashboard: false,
    NewOpening: false,
    Payment: false,
    SignUp: false,
    Stripe: false,
  });

  // Check first if user is logged in, 'if (loggedIn) { then do this }'
  let loggedIn = localStorage.getItem('id_token') == null ? false : true;
  console.log(loggedIn);
  return (
    <ApolloProvider client={client}>
      <main>
        <Navigation activePage={activePage} setActivePage={setActivePage} />
        {/* Components below can successfully add to the database */}
        {/* <NewOpening /> */}
        {/* <SignUp /> */}

        {/* Components below still need to be setup */}
        {/* <AdminDashboard /> */}
        {/* <EmployeeDashboard /> */}
        {/* <AddEmployee /> */}
        {/* <AddRole /> */}
        {/* <AddLocation /> */}
        {/* <Payment /> */}
        <section id="main-wrapper">
          {activePage.Home ? (
            <Home
              loggedIn={loggedIn}
              activePage={activePage}
              setActivePage={setActivePage}
            />
          ) : activePage.AddEmployee ? (
            <AddEmployee />
          ) : activePage.AddLocation ? (
            <AddLocation />
          ) : activePage.AddRole ? (
            <AddRole />
          ) : activePage.AdminDashboard ? (
            <AdminDashboard />
          ) : activePage.CompanyProfile ? (
            <CompanyProfile />
          ) : activePage.EmployeeDashboard ? (
            <EmployeeDashboard />
          ) : activePage.Login ? (
            <Login />
          ) : activePage.NewOpening ? (
            <NewOpening />
          ) : activePage.Payment ? (
            <Payment />
          ) : activePage.Signup ? (
            <SignUp />
          ) : activePage.Stripe ? (
            <Stripe />
          ) : (
            ''
          )}
        </section>
        <Footer />
      </main>
    </ApolloProvider>
  );
}

export default App;
