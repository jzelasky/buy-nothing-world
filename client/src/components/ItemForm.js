import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_ITEM } from '../utils/mutations';
import { QUERY_ITEMS } from '../utils/queries';

import Auth from '../utils/auth';

export default function ItemForm () {
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
                    itemText,
                    itemAuthor: Auth.getProfile.data.username,
                },
            });

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
    }

    return (
        <div>
            <h3>What are you getting rid of?</h3>

            {Auth.loggedIn() ? (
                <>
                    <p className={`${characterCount === 280 || error ? 'text-danger' : ''}`}>
                        Character Count: {characterCount}/280
                    </p>
                    <form onSubmit={handleFormSubmit}>
                        <div>
                            <textarea
                                name="itemText"
                                placeholder="Description"
                                value={itemText}
                                className='form-input w-100'
                                onChange={handleChange}>
                            </textarea>
                        </div>
                        <div className=''>
                            <button className='btn btn-block' type='submit'>
                                Add Item
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
                    You need to be logged in to post items. Please 
                    <Link to="/login">login </Link>or 
                    <Link to="/signup">signup.</Link>
                </>
            )}
        </div>
    )
}