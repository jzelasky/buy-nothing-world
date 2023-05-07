import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import ResponseList from '../components/ResponseList';
import ResponseForm from '../components/ResponseForm';

import { QUERY_SINGLE_ITEM } from '../utils/queries';

export default function SingleItem () {
    const { itemId } = useParams();

    const { loading, data } = useQuery(QUERY_SINGLE_ITEM, {
        variables: { itemId: itemId },
    });

    const item = data?.item || {};

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className='p-5 singleItemStyles'>
            <div className='card'>
                <h3 className='card-header'>
                    "Title"
                </h3>
                <div className='card-body'>
                    <p>{item.itemText}</p>
                    <p>Posted by {item.itemAuthor} on {item.createdAt}.</p>
                </div>
            </div>
            <div className='m-3'>
                <ResponseList responses={item.responses} />
            </div>
            <div className='m-3'>
                <ResponseForm responseId={item._id} />
            </div>
        </div>
    );
};