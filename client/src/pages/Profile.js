import React from 'react';
import { useQuery } from '@apollo/client';

import ItemList from '../components/ItemList';

import Auth from '../utils/auth';

import { QUERY_ITEMS  } from '../utils/queries';

export default function Profile () {

    const { loading, data } = useQuery(QUERY_ITEMS);

    const userItems = []
    for (let i=0; i< data.items.length; i++){
        if(data.items[i].itemAuthor === Auth.getProfile().data.username) {
            userItems.push(data.items[i]);
        }
    }

    return (
        <div className='p-5 profileStyles'>
            <div className='card'>
                <div>
                    <h2 className='card-header'>Your profile</h2>
                </div>
                <div className='card-body'>
                    <p>Username: {Auth.getProfile().data.username}</p>
                    <p>Email: {Auth.getProfile().data.email}</p>
                </div>
            </div>
            <div>
            {loading ? (
                    <div>Loading...</div>
                ) : (
                    <ItemList
                        items={userItems}
                        title="Your active posts"
                    />
                )}
            </div>     
        </div>
    )
}