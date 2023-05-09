import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_ITEM = gql`
  mutation addItem(
    $itemText: String!, 
    $itemAuthor: String!
    ) {
      addItem(
        itemText: $itemText, 
        itemAuthor: $itemAuthor
      ) {
        _id
        itemText
        itemAuthor
        createdAt
        responses {
          _id
          responseText
          createdAt
        }
      }
    }
`;

export const ADD_RESPONSE = gql`
  mutation AddResponse(
    $itemId: ID!,
    $responseText: String!,
    $responseAuthor: String!
  ) {
    addResponse(
      itemId: $itemId,
      responseText: $responseText,
      responseAuthor: $responseAuthor
    ) {
      _id
      itemText
      responses {
        responseText
      }
    }
  }
`;

export const REMOVE_ITEM = gql`
mutation removeItem(
  $itemId: ID!
  ) {
    removeItem(
      itemText: $itemText, 
      itemAuthor: $itemAuthor
    ) {
      _id
      itemText
      itemAuthor
      createdAt
      responses {
        _id
        responseText
        createdAt
      }
    }
  }
`