import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import { Badge, Button, Container, Table } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import MissionItem from './missionItem';
import { recieveMissions } from '../redux/missions/missions';

function Missions () {
  const missions = useSelector(state => state.missions);
  console.log('at missions', missions);
  const dispatch = useDispatch();
  // const missions = useSelector((state) => state.missions);

  useEffect(() => async () => {
    if (missions.length === 0) await dispatch(recieveMissions());
  }, []);
  // const dispatch = useDispatch();
  // useEffect(() => async () => {
  //   await dispatch(recieveMissions());
  // }, []);
  // console.log('at componenet:', missions);

  return (
    <div>
      <hr />
      <Table responsive striped bordered hover>
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
