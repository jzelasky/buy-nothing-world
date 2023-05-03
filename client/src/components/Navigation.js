import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
    return (
        <ul className="nav">
            <li className="nav-item">
                <a  href="#home" 
                    onClick={() => handlePageChange('Home')}
                    className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
                     Home
                </a>
            </li>
        </ul>
    )
}

export default Navigation;