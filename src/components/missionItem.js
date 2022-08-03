import React from 'react';
import { useDispatch } from 'react-redux';
import { book } from '../redux/missions/missions';

const MissionItem = ({ mission_id, mission_name, description, reserved }) => {
  // console.log(mission_id);
  const dispatch = useDispatch();

  const reserve = (e) => {
    e.preventDefault();
    console.log('booking', mission_id, 'reserved was', reserved);
    dispatch(book(mission_id));
    console.log('reserved is now', reserved);
  };

  return (
    <tr>
      <td>{mission_name}</td>
      <td>{description}</td>
      <td>status</td>
      <td>
        <button onClick={reserve}>Join Mission</button>
        <button>Leave Mission</button>
      </td>
    </tr>
  );
};

export default MissionItem;
