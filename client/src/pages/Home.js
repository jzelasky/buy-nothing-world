import React from 'react';
import { useQuery } from '@apollo/client';

import ItemList from '../components/ItemList';
import ItemForm from '../components/ItemForm';

import { QUERY_ITEMS } from '../utils/queries';

export default function Home () {
    const { loading, data } = useQuery(QUERY_ITEMS);
    const items = data?.items || [];
    
    return (
        <main>
            <div>
                <ItemForm />
            </div>
            <div>
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