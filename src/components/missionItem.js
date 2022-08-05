import React from 'react';
import { useDispatch } from 'react-redux';
import { book, leave } from '../redux/missions/missions';
import Badge from 'react-bootstrap/Badge';
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
      <td style={{fontWeight: 'bold'}}>{mission_name}</td>
      <td>{description}</td>
      <td>
        <div>
          {reserved ? 
            <Badge bg="info" style={{width: '110px'}}>Active Member</Badge>
            :
            <Badge bg="secondary" style={{width: '110px'}}>Not A Member</Badge>}
        </div>
      </td>
      <td>
        <button
          onClick={reserveMission}
          className={reserved ? 'join hide' : 'join show'} >
          Join Mission
        </button>
        <button
          onClick={leaveMission}
          className={reserved ? 'leave show' : 'leave hide'} >
          Leave Mission
        </button>
      </td>
    </tr>
  );
};

export default MissionItem;
