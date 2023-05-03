import React, { useState } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';

export default function Container() {
    const [currentPage, setCurrentPage ] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home'){
            return <Home />;
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header/>

            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>

            {renderPage()}
            
            <Footer/>
        </div>
    )
}