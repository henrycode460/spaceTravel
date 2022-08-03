import React from 'react';

function Missions (props) {
  const missionList = props;
  console.log('at componenet:', missionList);

  return (
    <h1>Missions page</h1>
  );
}

export default Missions;
