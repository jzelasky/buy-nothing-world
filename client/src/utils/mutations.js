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
    $itemTitle: String!,
    $itemText: String!, 
    $itemAuthor: String!
    ) {
      addItem(
        itemTitle: $itemTitle,
        itemText: $itemText, 
        itemAuthor: $itemAuthor
      ) {
        _id
        itemTitle
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
mutation RemoveItem($itemId: ID!) {
  removeItem(itemId: $itemId) {
    _id
  }
}
`
export const REMOVE_RESPONSE = gql`
mutation RemoveResponse($itemId: ID!, $responseId: ID!) {
  removeResponse(itemId: $itemId, responseId: $responseId) {
    _id
  }
}
`
