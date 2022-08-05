import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { recieveRockerts } from '../redux/rockets/rockets';
import RockertList from './rockertList';

function Rocket () {
  const rockets = useSelector(state => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => async () => {
    if (rockets.length === 0) await dispatch(recieveRockerts());
  }, []);

console.log('at rockets',rockets);


  return (
    <div>
      <hr />
      <Table responsive striped bordered hover>
      <thead>
       
      </thead>
      <tbody>
        {rockets.map((rocket) => (
          <RockertList key={rocket.id} rocket_id={rocket.id} rocket_image={rocket.flickr_images} rocket_name={rocket.rocket_name} description={rocket.description} />
        ))}
      </tbody>
    </Table>
    </div>
  );
}

export default Rocket;
