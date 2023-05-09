import React from 'react';

export default function ResponseList ({ responses = [] }) {
    if (!responses.length) {
        return <h3>No Responses Yet</h3>;
    }

    console.log(responses)

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
                            From {response.responseAuthor} onSubmit {response.createdAt}
                        </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};