import React from 'react';

import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';

import ResponseList from '../components/ResponseList';
import ResponseForm from '../components/ResponseForm';

import Auth from '../utils/auth';

import { QUERY_SINGLE_ITEM } from '../utils/queries';
import { REMOVE_ITEM } from '../utils/mutations';

export default function SingleItem () {
    const { itemId } = useParams();

    const { loading, data } = useQuery(QUERY_SINGLE_ITEM, {
        variables: { itemId: itemId },
    });

    const item = data?.item || {};

    const [removeItem] = useMutation(REMOVE_ITEM);

    const handleRemoveItem = async () => {
        try {
            const { data } = await removeItem({
                variables: {
                    itemId
                }
            });
            console.log(data);
            window.location.assign('/');
        } catch (err) {
            console.error(err);
        }
    }
  
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className='p-5 bg-custom-b text-custom-dk'>
            <div className='card'>
                <h3 className='card-header bg-custom-med text-custom-lt'>
                    {item.itemTitle}
                </h3>
                <div className='card-body bg-custom-lt'>
                    <div className='bg-custom-b p-2 br'>
                        <p>{item.itemText}</p>
                        <p>Posted by {item.itemAuthor} on {item.createdAt}.</p>
                    </div>
                        {Auth.getProfile().data.username === item.itemAuthor ? (
                            <>
                                <button onClick={handleRemoveItem} className='btn m-2'>
                                Remove Post
                                </button>
                            </>
                        ) : (
                            <>
                            </>
                        )}  
                </div>
            </div>
            <div className='m-3'>
                <ResponseList responses={item.responses} />
            </div>
            <div className='m-3'>
                <ResponseForm itemId={item._id} />
            </div>
        </div>
    );
};