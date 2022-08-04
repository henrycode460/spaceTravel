import React from 'react';
import { useSelector } from 'react-redux';

import Table from 'react-bootstrap/Table';

import RockertList from './rockertList';

function Rocket () {
  const rockets = useSelector(state => state);
console.log(rockets);


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
