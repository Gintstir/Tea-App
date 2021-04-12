import React from "react";

// import { grommet } from "grommet/themes";
import { Grommet, Box, Grid } from "grommet";

import PantryShelfPic from "../../assets/images/PantryShelf.png";
import "./pantry.css";

import PantryShelfTeaCard from "../PantryShelfTeaCard";
import PantryShelfExtraCard from "../PantryShelfExtraCard";

const PantryShelf = ({ shelfName, pantryData }) => {
  const specificData = pantryData[`${shelfName.toLowerCase()}s`];

  const isVowel = (letter) => {
    letter = letter.toLowerCase();
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      return true;
    } else {
      return false;
    }
  };

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
            {specificData.length
              ? specificData.map((data) => {
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
              : `Add a${isVowel(shelfName[0]) ? "n" : ""} ${shelfName}`}
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
