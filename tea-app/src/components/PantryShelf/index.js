import React from "react";

// import { grommet } from "grommet/themes";
import { Grommet, Box, Grid } from "grommet";

import PantryShelfPic from "../../assets/images/PantryShelf.png";
import "./pantry.css";

import PantryShelfTeaCard from "../PantryShelfTeaCard";
import PantryShelfExtraCard from "../PantryShelfExtraCard";

const PantryShelf = ({ shelfName, pantryData }) => {
  const specificData = pantryData[`${shelfName.toLowerCase()}s`];

  return (
    <Grommet>
      <Box>
        <Box overflow={{ horizontal: "auto" }}>
          <Grid
            margin={{ right: "auto" }}
            pad={{ right: "15px", left: "15px" }}
            gap="small"
            justify="start"
            columns={{ count: specificData.length, size: "xsmall" }}
            style={{ zIndex: 5 }}
          >
            {specificData.map((data) => {
                if (shelfName === "Extra") {
                  return (
                    <PantryShelfExtraCard
                      cardData={data}
                      key={typeof data === "string" ? data : data._id}
                    />
                  );
                } else {
                  return (
                    <PantryShelfTeaCard
                      cardData={data}
                      key={typeof data === "string" ? data : data._id}
                    />
                  );
                }
              })
            }
          </Grid>
          <div className="pantry-shelf-container">
            <div
              className="pantry-shelf"
              style={{ backgroundImage: `url(${PantryShelfPic})` }}
            ></div>
          </div>
        </Box>
      </Box>
    </Grommet>
  );
};

export default PantryShelf;
