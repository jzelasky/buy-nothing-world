import React from 'react';

export default function Login ({ currentPage, handlePageChange }) {

    return (
        <div className='p-5'>
            <h1>Login</h1>
           
            <form className='p-3'>
                <div className='form-group'>
                    <label for='loginEmailInput'>Email Address</label>
                    <input type='email' className='form-control' id='loginEmailInput' placeholder='Enter email'></input>
                </div>
                <div className='form-group'>
                    <label for='loginPasswordInput'>Password</label>
                    <input type='password' className='form-control' id='loginPasswordInput' placeholder='Enter password'></input>
                </div>
            </form>
        </div>
    )
}