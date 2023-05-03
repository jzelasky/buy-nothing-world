import React, { useState } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Login from './pages/Login';

export default function Container() {
    const [currentPage, setCurrentPage ] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home'){
            return <Home />;
        }
        if (currentPage === 'About'){
            return <About />;
        }
        if (currentPage === 'Profile'){
            return <Profile />;
        }
        if (currentPage === 'Login'){
        return <Login />;
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header/>

            <div className='p-2 d-flex justify-content-end navStyles'>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
            </div>

            <div className='pageStyles'>
            {renderPage()}
            </div>

            <Footer/>
        </div>
    )
}