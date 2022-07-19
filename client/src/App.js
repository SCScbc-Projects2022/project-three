import React, { useState } from 'react';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Auth from './utils/auth';

import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

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
  });

  // Extract accountLevel data from Auth
  const getAccountLevel = () => {
    let data = Auth.getProfile();
    return data.data.accountLevel;
  };

  // Check first if user is logged in then check active account level
  let activeAccountLevel =
    localStorage.getItem('id_token') == null ? '' : getAccountLevel();

  return (
    <ApolloProvider client={client}>
      <h1>
        Account Level:
        {activeAccountLevel ? activeAccountLevel : 'N/A'}
      </h1>
      <main>
        <nav>
          <Navbar activePage={activePage} setActivePage={setActivePage} />
        </nav>
        <section id="main-wrapper">
          {activePage.Home ? (
            // Main Page
            <Home activeAccountLevel={activeAccountLevel} />
          ) : activePage.Login ? (
            <LoginForm />
          ) : (
            <SignupForm />
          )}
        </section>
      </main>
    </ApolloProvider>
  );
}

export default App;
