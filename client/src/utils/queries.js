import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query getUser($username: String!) {
        user(username: $username) {
            email
        }
    }
`;

export const QUERY_ITEMS = gql`
    query getItems {
        items {
            _id
            itemTitle
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
            itemTitle
            itemText
            itemAuthor
            createdAt
            responses {
                _id
                responseText
                responseAuthor
                responseEmail
                createdAt
            }
        }
    }
`;
