import React from "react";
import { Card, Grommet } from "grommet";

export const TeaCard = () => (
  <Grommet>
    <Card className="card">
      {/* <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src="images/office.jpg" />
      </div> */}
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          Card Title<i className="material-icons right">more_vert</i>
        </span>
        <p>Here's a thing! </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          Card Title<i className="material-icons right">close</i>
        </span>
        <p>
          Here is some more information about this product that is only revealed
          once clicked on.
        </p>
      </div>
    </Card>
  </Grommet>
);
export default TeaCard;
