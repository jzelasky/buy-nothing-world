import React from 'react';
import { Link } from 'react-router-dom';

export default function ItemList ({ items, title}) {
    if (!items.length){
        return <h3>No Posts Yet</h3>;
    }

    return (
        <div className='m-3 d-flex flex-column align-items-center'>
            <h3>{title}</h3>
            {items && items.map((item) => (
                <div key={item._id} className='card itemList mt-4'>
                    <h4 className='card-header bg-custom-med text-custom-lt'>
                        {item.itemTitle}
                    </h4>
                    <div className='card-body bg-custom-lt'>
                        <div className='p-2 bg-custom-b br'>
                            <p>{item.itemText}</p>
                            <p>Posted by {item.itemAuthor} on {item.createdAt}</p>
                        </div>
                        <div className='d-flex justify-content-center'>
                        <Link className='btn m-3' to={`/items/${item._id}`}>
                        See more
                        </Link>
                        </div>
                    </div> 
                </div>
            ))}
        </div>
    )
}