import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_RESPONSE } from '../utils/mutations';

import Auth from '../utils/auth';

export default function ResponseForm ({ itemId }) {
    const [responseText, setResponseText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);

    const [addResponse, { error }] = useMutation(ADD_RESPONSE);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await addResponse({
                variables: {
                    itemId,
                    responseText,
                    responseAuthor: Auth.getProfile().data.username,
                }
            });
            console.log(data);
            setResponseText('');
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'responseText' && value.length <= 280) {
            setResponseText(value);
            setCharacterCount(value.length);
        }
    };

    return (
        <div>
            <h4>Respond here:</h4>

            {Auth.loggedIn() ? (
                <>
                    
                    <form onSubmit={handleFormSubmit}>
                        <div className='bg-custom-lt p-2 br'>
                            <textarea
                                name='responseText'
                                placeholder='Response'
                                value={responseText}
                                className='form-input w-100 bg-custom-b'
                                onChange={handleChange}>
                            </textarea>
                        
                        <small className={`text-custom-dk ${ characterCount === 280 || error ? 'text-danger' : ''}`}>
                            Character Count: {characterCount}/280
                            {error && <span>{error.message}</span>}
                        </small>
                        </div>
                        <div>
                            <button className="btn btn-block m-3" type='submit'>
                                Submit
                            </button>
                        </div>
                    </form>
                </>
            ) : (
                <p>
                    You need to be logged in to respond. Please {' '}
                    <Link to="/login">login</Link> or {' '}
                    <Link to="/signup">signup.</Link>
                </p>
            )}
        </div>
    );
};