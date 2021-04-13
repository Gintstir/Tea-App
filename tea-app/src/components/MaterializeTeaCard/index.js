import React from "react";

import { Card, Grommet, Text, Box, grommet } from "grommet";

import {deepMerge} from 'grommet/utils';

import { Clock, Java, AddCircle, Spa } from "grommet-icons";

const customTheme = deepMerge(grommet, {
  global: {
    font: {
      family: `Abhaya Libre`,
    },
  },
})

export const TeaCard = ({ selectedTea }) => {

  if (!selectedTea) {
    return <Text size="large" margin={{left: "30px"}} style={{fontFamily: "Abhaya Libre"}} >Please Select a Tea</Text>;
  }

  return (
    <Grommet theme={customTheme}>
      <Box align="center" margin={{top: "40px"}}>
      <Card className="card" background={selectedTea.color} width="large"  pad={{left: "10px"}}>
        {/* <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src="images/office.jpg" />
      </div> */}
        {/* <Box alignContent="center"> */}
        <div className="card-content" align="start" ><br></br>
          <span className="card-title activator  size=" size="large">
            <i className="material-icons right">more_vert</i>
            <Java size="large" /> {selectedTea.type}{" "}
            <Text size="large" > (click for notes) </Text>
            
          </span>
          <Text size="large" margin="small" >
            {" "}
            <AddCircle size="small" />
            Additions: {selectedTea.extra}{" "}
          </Text><br></br>
          <Text size="large" margin="small" >
            {" "}
            <Java size="small" /> Steeping temperature:{" "}
            {selectedTea.temperature}{" "}
          </Text><br></br>
          <Text size="large" margin="small" >
            {" "}
            <Clock size="small" /> Steep Time: {selectedTea.steepTime}{" "}
          </Text>
          <Text margin="medium" >
            {" "}
            {/* <Edit size="medium" />{" "} */}
          </Text>
        </div>
        {/* </Box> */}
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            <i className="material-icons right">close</i>
          </span>
          <Spa size="medium" color="black" />{" "}
          <Text size="medium" color="black" >Notes: {selectedTea.note}</Text>
        </div>
      </Card>
      </Box>
    </Grommet>
  );
};

export default TeaCard;
