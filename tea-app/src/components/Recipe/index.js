import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import { Grommet, Card, CardHeader, CardBody, Spinner, List } from 'grommet'

import { QUERY_USER } from '../../utils/queries' 

const Recipe = () => {

    const { loading, data } = useQuery(QUERY_USER, {
        variables: { username: "tester3"}
    })

    if (loading) {
        return(
            <Spinner />
        )
    }

    const { username, recipes } = data?.user

    return (
        <Grommet>
            <Card>
                <CardHeader>
                    {username}
                </CardHeader>
                <CardBody>
                    <List
                        primaryKey="key"
                        secondaryKey="value"
                        data={[
                            { key: 'Tea', value: recipes[0].tea.name },
                            { key: 'Temperature', value: recipes[0].temperature },
                            { key: 'Steep Time', value: recipes[0].steepTime },
                            { key: 'Note', value: recipes[0].note }
                        ]}
                    />
                </CardBody>
            </Card>
        </Grommet>        
    )

}

export default Recipe