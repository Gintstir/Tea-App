import React, { useEffect } from "react";
import { useQuery } from '@apollo/react-hooks'

import { Grommet, Spinner, Box, Button, Header, Text, Heading } from "grommet";
import { Refresh } from "grommet-icons";

import { QUERY_RECIPES } from '../../utils/queries'

import RecipeCard from "../../components/RecipeCard";

const Global = () => {
  const { data, loading, refetch } = useQuery(QUERY_RECIPES)

  const recipes = data?.recipes || []

  useEffect(() => {
    refetch()
  }, [])

  if (loading) {
    return (
    <Box fill="horizontal" height="medium" direction="column" align="center" justify="center">
      <Heading style={{fontFamily: "Abhaya Libre"}} level="2">Everyone's teas are brewing...</Heading>
      <Spinner color="purple" size="large" />
    </Box>
    )
  }

  return (
    <Grommet>
      <Header background="light-4" pad="small" direction="row" justify="between">
        <Text style={{fontFamily: "Abhaya Libre"}} size="large">Global Tea Room</Text>
        <Button onClick={() => refetch()} style={{background: "none"}} focusIndicator={false} icon={<Refresh />} />
      </Header>

      <Box direction="column" align="center" margin={{horizontal: "30px"}}>
        {
          !recipes.length ? 
          <Heading style={{fontFamily: "Abhaya Libre"}} level="2">Nothing to Steep yet...</Heading> :
          recipes.map(recipe => <RecipeCard recipe={recipe} canDelete={false} teaCardHeight="125px" displayFooter={true} key={recipe._id} />)
        }        
      </Box>
    </Grommet>
  );
}

export default Global;
