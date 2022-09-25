import React, { useState } from "react";
import Prefecture from "./Prefecture";
import classes from "./Location.module.css";

const Location = ({ region, prefecture, data }) => {
    const [regionState, setRegionState] = useState(false);

  return (
    <div className={classes.region}>
      <h2 className={classes.regionItem}
        onClick={() => {
          setRegionState(!regionState);
        }}
      >
        {region}
      </h2>
      {regionState && <Prefecture key={prefecture} prefecture={prefecture} />}
    </div>
  );
};

export default Location;