import React from "react";

// import { grommet } from "grommet/themes";
import { Grommet, Header, Main, Text } from "grommet";

const About = () => (
  <Grommet>
    <Header background="light-4" pad="small">
      <Text size="large">About Me</Text>
    </Header>
    <Main pad="small">
      Howdy there. My name is Joseph Cosgrove, and I'm a junior software
      developer looking for the right team to hone my skills with. I have
      backgrounds in classical music and pottery, and I hope to apply the
      tenacity and consistency I practice in those pursuits to coding. My
      primary focus in web development is making apps that are intuitive,
      beautiful, and serve the consumer's needs. As a collaborator I am a firm
      believer in communicating with the client, keeping a level head in any
      environment, and being flexible with learning and incorporating new
      technologies. I owe a lot of my patience to my dog and companion, Luther.{" "}
    </Main>
  </Grommet>
);

export default About;
