import gql from 'graphql-tag'

export const QUERY_ME = gql`
    query me {
        me {
            _id
            username
            email
            teas {
                brand
                name
                type
            }
            extras
            recipes {
                tea {
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

export const QUERY_USER = gql`
    query user($username:String!) {
        user(username:$username) {
            _id
            username
            email
            teas {
                brand
                name
                type
            }
            extras
            recipes {
                tea {
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