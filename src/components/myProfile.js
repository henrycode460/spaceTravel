/* eslint-disable react/jsx-key */
import React from 'react';
import { useSelector } from 'react-redux';
import './myProfile.css';

function MyProfile () {
  const joinedMissions = useSelector(state => state.missions.filter((mission) => mission.reserved));
  const rockets = useSelector(state => state.rockets.filter((mission) => mission.reserved));
  
  return (
    <div className='myProfile'>
      <div className='container'>
          <h2>My Missions</h2>
            <ul>
              {joinedMissions.map((mission) => <li key={mission.mission_id}>{mission.mission_name}</li>)}
            </ul>        
        </div>
        <div className='container'>
          <h2>My Rockets</h2>
          <ul>
          {rockets.map((rocket) => <li key={rocket.rockerts_id} >{rocket.rockerts_name}</li>)}
          </ul>
      </div>
    </div>
  );
}

export default MyProfile;
