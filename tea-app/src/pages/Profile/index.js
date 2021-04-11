import React from "react";
import { useQuery } from '@apollo/react-hooks'

// import { grommet } from "grommet/themes";
import { Grommet, Header, Main, Text, Spinner } from "grommet";

import { QUERY_ME } from '../../utils/queries'

const Profile = ({profile}) => {

  const { loading } = useQuery(QUERY_ME)

  if (loading) {
    return <Spinner />
  }
  return (
    <Grommet>

      <Header background="light-4" pad="small">
        <Text size="large">{profile.data.username}'s Profile</Text>
      </Header>
      <Main pad="small">
        <p>Here, all the recipes will be shown!</p>
      </Main>
    </Grommet>
  );
}

export default Profile;
