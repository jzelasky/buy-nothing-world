import React from 'react';
import { Link } from 'react-router-dom';

export default function ItemList ({ items, title}) {
    if (!items.length){
        return <h3>No Posts Yet</h3>;
    }

    return (
        <div>
            <h3>{title}</h3>
            {items && items.map((item) => (
                <div key={item._id} className='card'>
                    <h4 className='card-header'>
                        {item.itemAuthor} <br />
                    </h4>
                    <div className='card-body'>
                        <p>{item.itemText}</p>
                    </div>
                    <Link className='btn btn-block' to={`/items/${item._id}`}>
                        See more
                    </Link>
                </div>
            ))}
        </div>
    )
}