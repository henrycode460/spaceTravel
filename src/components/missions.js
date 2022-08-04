import React from 'react';
import { useSelector } from 'react-redux';
// import { Badge, Button, Container, Table } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import MissionItem from './missionItem';

function Missions () {
  const missions = useSelector(state => state);

  console.log('at componenet:', missions);

  return (
    <div>
      <hr />
      <Table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>empty</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <MissionItem key={mission.mission_id} mission_id={mission.mission_id} mission_name={mission.mission_name} description={mission.description} reserved={mission.reserved} />
        ))}
      </tbody>
    </Table>
    </div>
  );
}

export default Missions;
