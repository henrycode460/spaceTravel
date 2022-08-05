import React from 'react';

const RockertList = ({ flickr_images, rocket_name, description }) => {


  return (
    <tr>
      <td>{flickr_images}</td>
      <td>{rocket_name}</td>
      <td>{description}</td>
      <td>Reserve Rockert</td>
     
    </tr>
  );
};

export default RockertList;
