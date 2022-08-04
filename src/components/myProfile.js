/* eslint-disable react/jsx-key */
import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';

function MyProfile () {
  const joinedMissions = useSelector(state => state.filter((mission) => mission.reserved));
  const rockets = ['rocket1', 'rocket2', 'rocket3'];

  return (
    <Table>
      <thead>
        <tr>
          <th>My Missions</th>
          <th>My Rockets</th>
        </tr>
      </thead>
      <tbody>
      <td>
        {joinedMissions.map((mission) => <tr>{mission.mission_name}</tr>)}
        </td>
        <td>
        {rockets.map((rocket) => <tr>{rocket}</tr>)}
        </td>
      </tbody>
    </Table>
  );
}

export default MyProfile;
