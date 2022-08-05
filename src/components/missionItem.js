import React from 'react';
import { useDispatch } from 'react-redux';
import { book, leave } from '../redux/missions/missions';
import './missions.css';

const MissionItem = ({ mission_id, mission_name, description, reserved }) => {
  const dispatch = useDispatch();

  const reserveMission = (e) => {
    e.preventDefault();
    dispatch(book(mission_id));
  };

  const leaveMission = (e) => {
    e.preventDefault();
    dispatch(leave(mission_id));
  };

  return (
    <tr>
      <td>{mission_name}</td>
      <td>{description}</td>
      <td>
        <div className={reserved ? 'join' : 'leave'}>
          {reserved ? 'Active Member' : 'Not A Member'}
        </div>
      </td>
      <td>
        <button onClick={reserveMission} className={reserved ? 'joinButton hide' : 'joinButton show'} >Join Mission</button>
        <button onClick={leaveMission}  className={reserved ? 'leavButton show' : 'leavButton hide'} >Leave Mission</button>
      </td>
    </tr>
  );
};

export default MissionItem;
