import React from "react";

import { Card, Grommet, Text } from "grommet";
import recipeData from "../../utils/default-recipes";
import { Clock, Java, AddCircle, Edit, Spa } from "grommet-icons";

export const TeaCard = () => {
  const editTeaCard = () => {
    console.log("send help");
  };
  return (
    <Grommet>
      <Card className="card">
        {/* <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src="images/office.jpg" />
      </div> */}
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            <Java size="medium" /> {recipeData[0].type}{" "}
            <Text> (click for notes) </Text>
            <i className="material-icons right">more_vert</i>
          </span>
          <Text size="small" margin="small">
            {" "}
            <AddCircle size="small" />
            Additions: {recipeData[0].extra}{" "}
          </Text>
          <Text size="small" margin="small">
            {" "}
            <Java size="small" /> Steeping temperature:{" "}
            {recipeData[0].temperature}{" "}
          </Text>
          <Text size="small" margin="small">
            {" "}
            <Clock size="small" /> Steep Time: {recipeData[0].steepTime}{" "}
          </Text>
          <Text margin="medium" onClick={() => editTeaCard()}>
            {" "}
            <Edit size="medium" />{" "}
          </Text>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            <i className="material-icons right">close</i>
          </span>
          <Spa size="medium" />{" "}
          <Text size="small">Notes: {recipeData[0].note}</Text>
        </div>
      </Card>
    </Grommet>
  );
};

export default TeaCard;
