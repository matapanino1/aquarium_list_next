import React from 'react';
import classes from './Aquarium.module.css';

const Aquarium = ({ key, aquariumList }) => {

  return (
    <div className={classes.aquarium}>
      {aquariumList.map((obje) => (
        <h5 key={obje.name} className={classes.aquariumItem}><a href={obje.url}>{obje.name}</a></h5>
      ))}
    </div>
  )
}

  export default Aquarium;