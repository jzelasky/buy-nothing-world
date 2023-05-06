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
                    <h4 className='card-header'>
                        "Title"
                    </h4>
                    <div className='card-body'>
                        <div className='p-2 itemContent'>
                            <p>{item.itemText}</p>
                            <p>Posted by: {item.itemAuthor}</p>
                        </div>
                        <div className='d-flex justify-content-center'>
                        <Link className='btn m-2' to={`/items/${item._id}`}>
                        See more
                        </Link>
                        </div>
                    </div> 
                </div>
            ))}
        </div>
    )
}