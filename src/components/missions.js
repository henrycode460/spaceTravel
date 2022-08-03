import React from 'react';
import { useSelector } from 'react-redux';

function Missions () {
  const missions = useSelector(state => state);

  console.log('at componenet:', missions);

  return (
    <h1>Missions page</h1>
  );
}

export default Missions;
