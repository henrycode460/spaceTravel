import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { recieveRockerts } from '../redux/rockets/rockets';
import RockertList from './rockertList';

function Rocket () {
  const rockets = useSelector(state => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.length === 0) dispatch(recieveRockerts());
  });

  return (
    <div>
      {rockets.map((rocket) => (
        <RockertList key={rocket.id} rocket_id={rocket.rockerts_id} image={rocket.image} name={rocket.rockerts_name} description={rocket.description} reserved={rocket.reserved} />
      ))}
    </div>
  );
}

export default Rocket;
