import React, { useState } from "react";
import Prefecture from "./Prefecture";

const Region = ({ key, japan }) => {
  const regions = Object.keys(japan);
  const [prefecture, setPrefecture] = useState(false);

  return (
    <ul>
      {regions.map((region, i) => (
        <li key={region}>
          <h2 onClick={() => {setPrefecture(!prefecture)}}>{region}</h2>
          {prefecture && <Prefecture japan={japan} region={japan[region]} />}
        </li>
      ))}
    </ul>
  );
};

export default Region;
