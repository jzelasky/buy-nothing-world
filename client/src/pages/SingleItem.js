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
        <div>
            <h3 className='card-header'>
                {item.itemAuthor} <br />
                <span> posted this item on {item.createdAt}</span>
            </h3>
            <div className=''>
                {item.itemText}
            </div>
            <div>
                <ResponseList responses={item.responses} />
            </div>
            <div>
                <ResponseForm responseId={item._id} />
            </div>
        </div>
    );
};