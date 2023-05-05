import React from 'react';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
  } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SingleItem from './pages/SingleItem';

const httpLink = createHttpLink({
    uri: '/graphql',
})

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id-token');

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}`: '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
})

const App = () => {
    return(
        <ApolloProvider client={client}>
            <Router>
                <Header />
                <Routes>
                    <Route 
                        path='/'
                        element={<Home />}
                    />
                    <Route 
                        path='/login'
                        element={<Login />}
                    />
                    <Route 
                        path='/signup'
                        element={<Signup />}
                    />
                    <Route 
                        path='/about'
                        element={<About />}
                    />
                    <Route 
                        path='/profile'
                        element={<Profile />}
                    />
                    <Route 
                        path='/items/:itemId'
                        element={<SingleItem />}
                    />
                </Routes>
                <Footer />
            </Router>
        </ApolloProvider>
    )
}

export default App;