import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            items {
                _id
                itemText
                createdAt
            }
        }
    }
`;

export const QUERY_ITEMS = gql`
    query getItems {
        items {
            _id
            itemText
            itemAuthor
            createdAt
        }
    }
`;

export const QUERY_SINGLE_ITEM = gql`
    query getSingleItem($itemId: ID!) {
        item(itemId: $itemId) {
            _id
            itemText
            itemAuthor
            createdAt
            commets {
                _id
                commentText
                createdAt
            }
        }
    }
`;