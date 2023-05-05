import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

//<span>Hello, {Auth.getProfile().data.username}!</span>

export default function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  }
  return (
    <nav className='navbar headerStyles'>
        <h1 className='headerStyles p-3'>Buy Nothing World</h1>   
      
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
        
        {Auth.loggedIn() ? (
          <>
            <li>
              <Link to='/profile' className='nav-link'>
                My profile
              </Link>
            </li>
            <li onClick={logout} className='nav-item'>
              Logout
            </li>
          </>
        ) : (
          <>
            
            <li className='nav-item'>
              <Link to='/login'>
                Login
              </Link>
            </li>
            <li className='nav-item'>
            <Link to="/signup">
              Signup
            </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}