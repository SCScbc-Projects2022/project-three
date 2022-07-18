import React, { useState } from 'react';

import Navbar from './components/Navbar';

import Home from './pages/Home';

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
  const [activePage, setActivePage] = useState({
    Home: true,
    Login: false,
    Signup: false,
  });

  return (
    <ApolloProvider client={client}>
      <main>
        <nav>
          <Navbar activePage={activePage} setActivePage={setActivePage} />
        </nav>
        <section id="main-wrapper">
          {activePage.home ? (
            <Home />
          ) : activePage.login ? (
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
