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
    home: true,
    login: false,
    signup: false,
  });

  return (
    <ApolloProvider client={client}>
      <>
        <Navbar />
        <main>{activePage.home ? <Home /> : activePage.L}</main>
      </>
    </ApolloProvider>
  );
}

export default App;
