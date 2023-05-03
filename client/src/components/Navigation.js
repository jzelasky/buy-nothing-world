import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
    return (
        <ul className="nav ">
            <li className="nav-item">
                <a  href="#home" 
                    onClick={() => handlePageChange('Home')}
                    className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
                     Home
                </a>
            </li>
            <li className="nav-item">
                <a  href="#about" 
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                     About
                </a>
            </li>
            <li className="nav-item">
                <a  href="#profile" 
                    onClick={() => handlePageChange('Profile')}
                    className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'}>
                     Profile
                </a>
            </li>
            <li className="nav-item">
                <a  href="#login" 
                    onClick={() => handlePageChange('Login')}
                    className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}>
                     Login
                </a>
            </li>
        </ul>
    )
}

export default Navigation;