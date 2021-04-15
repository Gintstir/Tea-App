import gql from 'graphql-tag'

export const QUERY_ME = gql`
    query me {
        me {
            _id
            username
            email
            teas {
                _id
                brand
                name
                type
            }
            extras
            recipes {
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
    }
`

export const QUERY_RECIPES = gql`
    query recipes {
        recipes {
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
`

export const QUERY_USER = gql`
    query user($username:String!) {
        user(username:$username) {
            _id
            username
            email
            teas {
                _id
                brand
                name
                type
            }
            extras
            recipes {
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
            }            
        }
    }
`