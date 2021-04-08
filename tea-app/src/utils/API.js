import gql from 'graphql-tag'

export const UPLOAD_IMAGE = gql`
  mutation loadImage($image: Upload!) {
    loadImage(image: $image)
  }
`

export const QUERY_SOMETHING = gql`
  query findImage {
    findImage
  }
`