import React from 'react';
import { useQuery } from '@apollo/client';

import ItemList from '../components/ItemList';
import ItemForm from '../components/ItemForm';

import { QUERY_ITEMS } from '../utils/queries';

export default function Home () {
    const { loading, data } = useQuery(QUERY_ITEMS);
    const items = data?.items || [];

    console.log(items);
    
    return (
        <main className='p-1 bg-custom-b text-custom-dk'>
            <div>
                <ItemForm />
            </div>
            <div className='mb-5'>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <ItemList
                        items={items}
                        title="Check out what's available!"
                    />
                )}
            </div>
        </main>
    )
}