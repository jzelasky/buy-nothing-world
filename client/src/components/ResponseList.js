import React from 'react';

export default function ResponseList ({ responses = [] }) {
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
                    <div key={response._id}>
                        <h5 className='card-header'>
                            {response.responseAuthor} reponded{' '}
                            <span>
                                on {response.createdAt}
                            </span>
                        </h5>
                        <p className='card-body'>
                            {response.responseText}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
};