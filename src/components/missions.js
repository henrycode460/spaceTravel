import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import MissionItem from './missionItem';
import { recieveMissions } from '../redux/missions/missions';

function Missions () {
  const missions = useSelector(state => state.missions);
  const dispatch = useDispatch();
  
  useEffect(() => async () => {
    if (missions.length === 0) await dispatch(recieveMissions());
  }, []);

  return (
    <div>
      <Table striped bordered responsive>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th></th>
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
