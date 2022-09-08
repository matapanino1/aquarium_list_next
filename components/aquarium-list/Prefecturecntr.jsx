import React, { useState } from 'react';
import Aquarium from './Aquarium';
import classes from "./Prefecturecntr.module.css";

const Prefecturecntr = ({ pre, aquariums }) => {
    const [aquaState, setAquaState] = useState(false);

  return (
    <div className={classes.prefecture}>
          <h3 className={classes.prefectureItem} onClick={() => { setAquaState(!aquaState) }}>{pre}</h3>
          {aquaState && <Aquarium key={pre} aquariumList={aquariums} />}
    </div>
  )
}

export default Prefecturecntr