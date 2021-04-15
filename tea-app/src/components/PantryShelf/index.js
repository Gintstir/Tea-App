import React from "react";

// import { grommet } from "grommet/themes";
import { Grommet, Box, Grid } from "grommet";

import PantryShelfPic from "../../assets/images/PantryShelf.png";
import "./pantry.css";

import PantryShelfTeaCard from "../PantryShelfTeaCard";
import PantryShelfExtraCard from "../PantryShelfExtraCard";

const PantryShelf = ({ shelfName, pantryData, canDelete, canSelect, setItem, item ,  setAddNotification, displayFooter }) => {

  return (
    <Grommet>
      <Box>
        <Box overflow={{ horizontal: "auto" }}>
          <Grid
            margin={{ right: "auto"}}
            pad={{ right: "15px", left: "15px" }}
            gap="small"
            justify="start"
            columns={{ count: pantryData.length, size: "xsmall" }}
            style={{ zIndex: 5 }}
          >
            {pantryData.map((data) => {
                if (shelfName === "Extra") {
                  return (
                    <PantryShelfExtraCard
                      cardData={data}
                      canDelete={canDelete}
                      canSelect={canSelect}
                      setItem={canSelect && setItem}
                      item={canSelect && item}
                      setAddNotification={canDelete && setAddNotification}
                      key={typeof data === "string" ? data : data._id}
                    />
                  );
                } else {
                  return (
                    <PantryShelfTeaCard
                      cardData={data}
                      canDelete={canDelete}
                      canSelect={canSelect}
                      setItem={canSelect && setItem}
                      item={canSelect && item}
                      setAddNotification={canDelete && setAddNotification}
                      displayFooter={true}
                      key={typeof data === "string" ? data : data._id}
                    />
                  );
                }
              })
            }
          </Grid>            
        </Box>
        <div className="pantry-shelf-container">
          <div
            className="pantry-shelf"
            style={{ backgroundImage: `url(${PantryShelfPic})` }}
          ></div>
        </div>
      </Box>
    </Grommet>
  );
};

export default PantryShelf;
