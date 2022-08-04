/* eslint-disable react/jsx-key */
import React from 'react';
import { useSelector } from 'react-redux';

function MyProfile () {
  const joinedMissions = useSelector(state => state.filter((mission) => mission.reserved));
  const rockets = ['rocket1', 'rocket2', 'rocket3'];

  return (
    <div>
      <div>
        <h2>My Missions</h2>
          <ul>
            {joinedMissions.map((mission) => <li>{mission.mission_name}</li>)}
          </ul>        
      </div>
      <div>
        <h2>My Rockets</h2>
        <ul>
        {rockets.map((rocket) => <li>{rocket}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default MyProfile;
