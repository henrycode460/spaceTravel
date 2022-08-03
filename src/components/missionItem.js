import React from 'react';
import { useDispatch } from 'react-redux';
import { book, leave } from '../redux/missions/missions';

const MissionItem = ({ mission_id, mission_name, description }) => {
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
      <td>status</td>
      <td>
        <button onClick={reserveMission}>Join Mission</button>
        <button onClick={leaveMission}>Leave Mission</button>
      </td>
    </tr>
  );
};

export default MissionItem;
