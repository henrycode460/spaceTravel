import React from 'react';
import Badge from 'react-bootstrap/Badge';
import { useDispatch } from 'react-redux';
import { remove, reserve } from '../redux/rockets/rockets';
import './missions.css';

const RockertList = ({ rocket_id, image, name, description, reserved }) => {
  const dispatch = useDispatch();

  const reserveRocket = (e) => {
    e.preventDefault();
    dispatch(reserve(rocket_id));
  };

  const leaveRocket = (e) => {
    e.preventDefault();
    dispatch(remove(rocket_id));
  };

  const reserveButton = {
    background: 'rgba(0, 102, 255, 0.89)',
    border: 'none',
    color: 'white',
    width: '150px',
    padding: '10px',
  }

  const cancelButton = {
    width: '180px',
    border: 'solid 1px gray',
    color: 'gray',
    padding: '10px',
  }

  return (
    <div style={{display: 'flex', gap: '30px', marginBottom: '50px'}}>
      <img  src={image} style={ { width: '250px' } } alt="rocket"/>
      <div>
        <h3>{name}</h3>
        <p>{reserved ? <Badge bg="info" style={{width: '70px'}}>Reserved</Badge> : '' } {description}</p>
        <button
          onClick={reserveRocket}
          style={reserveButton}
          className={reserved ? 'join hide' : 'join show'} 
          >
          Reserve Rocket
        </button>
        <button
          onClick={leaveRocket}
          style={cancelButton}
          className={reserved ? 'leave show' : 'leave hide'} 
          >
          Cancel Resservation
        </button>
      </div>
    </div>
  );
};

export default RockertList;