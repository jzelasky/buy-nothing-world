import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_ITEM } from '../utils/mutations';
import { QUERY_ITEMS } from '../utils/queries';

import Auth from '../utils/auth';

export default function ItemForm () {
    const [itemTitle, setItemTitle] = useState('');
    const [itemText, setItemText] = useState('');

    const [characterCount, setCharacterCount] = useState(0);

    const [addItem, { error }] = useMutation(ADD_ITEM, {
        update(cache, { data: { addItem } }) {
            try {
                const { items } = cache.readQuery({ query: QUERY_ITEMS });
                cache.writeQuery({
                    query: QUERY_ITEMS,
                    data: { items: [addItem, ...items] },
                });
            } catch (err) {
                console.error(err);
            }
        },
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addItem({
                variables: {
                    itemTitle,
                    itemText,
                    itemAuthor: Auth.getProfile().data.username,
                },
            });
            console.log(data);
            setItemTitle('');
            setItemText('');
        } catch (err) {
            console.error(err);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'itemText' && value.length <= 280) {
            setItemText(value);
            setCharacterCount(value.length);
        }
        if (name === 'itemTitle') {
            setItemTitle(value);
        }
    
    }

    return (
        <div className='p-3 m-3 itemFormStyles bg-custom-lt text-custom-dk br'>
            <h5>What are you getting rid of?</h5>

            {Auth.loggedIn() ? (
                <>
                    
                    <form onSubmit={handleFormSubmit}>
                        <div>
                            <input
                                name="itemTitle"
                                placeholder="Title"
                                value={itemTitle}
                                className='form-input m-1 w-100 bg-custom-b'
                                onChange={handleChange}>
                            </input>
                            <textarea
                                name="itemText"
                                placeholder="Description"
                                value={itemText}
                                className='form-input mx-1 w-100 bg-custom-b'
                                onChange={handleChange}>
                            </textarea>
                        </div>
                        <div className='mx-2'>
                            <small className={`${characterCount === 280 || error ? 'text-danger' : ''}`}>
                                Character Count: {characterCount}/280
                            </small>
                        </div>
                        <div className='m-2'>
                            <button className='btn btn-block bg-custom-med' type='submit'>
                                Submit
                            </button>
                        </div>
                        {error && (
                            <div className=''>
                                {error.message}
                            </div>
                        )}
                    </form>
                </>
            ) : (
                <>
                    You need to be logged in to post items. Please {` `}
                    <Link to="/login">login</Link>{` `}or{` `}
                    <Link to="/signup">signup</Link>.
                </>
            )}
        </div>
    )
}