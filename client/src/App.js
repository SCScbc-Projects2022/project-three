import React, { useState } from 'react';

import Navigation from './components/Navigation';

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

  // Check first if user is logged in, 'if (loggedIn) { then do this }'
  let loggedIn = localStorage.getItem('id_token') == null ? false : true;

  return (
    <ApolloProvider client={client}>
      <main>
        <nav>
          <Navigation activePage={activePage} setActivePage={setActivePage} />
        </nav>
        <section id="main-wrapper">
          {activePage.Home ? (
            // Main Page
            <Home loggedIn={loggedIn} />
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
