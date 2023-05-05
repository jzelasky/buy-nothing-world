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
  mutation addItem($itemText: String!, $itemAuthor: String!) {
    addItem(itemText: $itemText, itemAuthor: $itemAuthor) {
      _id
      itemText
      itemAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment(
    $itemId: ID!
    $commentText: String!
    $commentAuthor: String!
  ) {
    addComment(
      itemId: $itemId
      commentText: $commentText
      commentAuthor: $commentAuthor
    ) {
      _id
      itemText
      itemAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
