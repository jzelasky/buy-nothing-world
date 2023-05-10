import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

//<span>Hello, {Auth.getProfile().data.username}!</span>

export default function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    window.location = '/';
  }
  return (
    <nav className='navbar bg-custom-med text-custom-lt'>
        <h1 className='p-3'>Buy Nothing World</h1>   
        
        {Auth.loggedIn() ? (
          <>
          <ul className='nav'>
            <li className='nav-item'>
              <Link to='/' className='nav-link active'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link'>
              About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/profile' className='nav-link'>
                My profile
              </Link>
            </li>
            <li className='nav-item'>
              <div onClick={logout} className='nav-link' >
              Logout
              </div>
            </li>
            </ul>
          </>
        ) : (
          <>
          <ul className='nav'>
            <li className='nav-item'>
              <Link to='/' className='nav-link active'>
              Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/login' className='nav-link'>
                Login
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/signup" className='nav-link'>
              Signup
              </Link>
            </li>
            </ul>
          </>
        )}
    </nav>
  );
}