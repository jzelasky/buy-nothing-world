import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

export default function Signup() {
  const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
  });
    
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
        
    try {
        const { data } = await addUser({
            variables: { ...formState },
        });
        Auth.login(data.addUser.token);
    } catch (event) {
        console.error(event);
    }
  }
  return (
    <main className="p-5 bg-custom-b">
      <div className="d-flex justify-content-center">
        <div className="card signupCard">
          <h4 className="card-header bg-custom-med text-custom-lt">Sign Up</h4>
          <div className="card-body bg-custom-lt">
              {data ? (
                <p>
                  Success! You may now head{' '}
                  <Link to="/">back to the homepage.</Link>
                </p>
              ) : (
                 <form onSubmit={handleFormSubmit} className='d-flex flex-column align-items-center'>
                    <input
                      className="form-input m-2 bg-custom-b"
                      placeholder="Username"
                      name="username"
                      type="text"
                      value={formState.name}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input m-2 bg-custom-b"
                      placeholder="Email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                    />
                    <input
                    className="form-input m-2 bg-custom-b"
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                    />
                    <button
                      className="btn btn-block btn-sm bg-custom-med text-custom-lt"
                      style={{ cursor: 'pointer' }}
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                )}
        
                {error && (
                      <div className="my-3 p-3 bg-danger text-white">
                        {error.message}
                      </div>
                )}
          </div>
        </div>
      </div>
    </main>
  );

}
