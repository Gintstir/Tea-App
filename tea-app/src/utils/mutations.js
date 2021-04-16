import gql from "graphql-tag";

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
        email
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
        email
      }
    }
  }
`;

export const ADD_TEA = gql`
  mutation addTea($type: String!, $name: String!, $brand: String!) {
    addTea(type: $type, name: $name, brand: $brand) {
      _id
      teas {
        _id
        type
        name
        brand
      }
    }
  }
`;

export const ADD_EXTRA = gql`
  mutation addExtra($type: String!) {
    addExtra(type: $type) {
      _id
      extras
    }
  }
`;

export const ADD_RECIPE = gql`
  mutation addRecipe(
    $type: String!
    $name: String!
    $brand: String!
    $extra: [String!]
    $temperature: Int!
    $steepTime: Int!
    $picture: String!
    $note: String!
  ) {
    addRecipe(
      type: $type
      name: $name
      brand: $brand
      extra: $extra
      temperature: $temperature
      steepTime: $steepTime
      picture: $picture
      note: $note
    ) {
      _id
      tea {
        _id
        type
        name
        brand
      }
      extra
      temperature
      steepTime
      picture
      note
      createdAt
    }
  }
`;

export const REMOVE_EXTRA = gql`
  mutation removeExtra($type: String!) {
    removeExtra(type: $type) {
      extras
    }
  }
`;

export const REMOVE_TEA = gql`
  mutation removeTea($id: ID!) {
    removeTea(id: $id) {
      _id
      teas {
        _id
        type
        name
        brand
      }
    }
  }
`;

export const REMOVE_RECIPE = gql`
  mutation removeRecipe($id: ID!) {
    removeRecipe(id: $id) {
      _id
      tea {
        _id
        type
        name
        brand
      }
      extra
      temperature
      steepTime
      picture
      note
      createdAt
    }
  }
`;

export const UPLOAD_IMAGE = gql`
  mutation loadImage($image: String!, $imageName: String!, $mimeType: String!) {
    loadImage(image: $image, imageName: $imageName, mimeType: $mimeType)
  }
`;