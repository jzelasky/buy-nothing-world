import React from 'react';

import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';

import Auth from '../utils/auth';

import { REMOVE_RESPONSE } from '../utils/mutations';
import { QUERY_SINGLE_ITEM } from '../utils/queries';

//rn allows remove response only if logged in user is responseAuthor
// want allow remove response if logged in user is itemAuthor
// => need to query itemAuthor from itemId 
// then use same logic for rendering remove button


export default function ResponseList ({ responses = [] }) {
    const { itemId } = useParams();

    const [removeResponse] = useMutation(REMOVE_RESPONSE);

    const { data } = useQuery(QUERY_SINGLE_ITEM, {
        variables: { itemId: itemId },
    });

    const itemAuthor = data.item.itemAuthor

    const handleRemoveResponse = async (responseId) => 
    {
        try {
            console.log("hello world")
            const { data } = await removeResponse({
                variables: {
                    itemId,
                    responseId
                }
            });
            document.location.reload();
            console.log(data);
        } catch (err) {
            console.error(err);
        }
    }

    const getCurrentLoggedInUser = () => {
        let currentUser;
        try {
           currentUser = Auth.getProfile().data.username;
        } catch {
            currentUser = ''
        }
        return currentUser;
    };

    if (!responses.length) {
        return <h3>No Responses Yet</h3>;
    }

    return (
        <>
            <h3>
                Responses
            </h3>
            <div>
                {responses && responses.map((response) => (
                    <div key={response._id} className='bg-custom-lt p-3 mt-3 br'>
                        <div className='text-custom-dk'>
                        <p >
                            {response.responseText}
                        </p>
                        <p>
                            From {response.responseAuthor} on {response.createdAt}
                        </p>
                        { (getCurrentLoggedInUser() === response.responseAuthor || getCurrentLoggedInUser() === itemAuthor) ? (
                            <>
                                <button onClick={()=>handleRemoveResponse(response._id)} className='btn mx-2 btn-sm'>
                                Remove Response
                                </button>
                            </>
                        ) : (<></>)} 
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};