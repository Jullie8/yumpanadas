import React from 'react';
// import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
// import DoctorMarker from "./DoctorMarker";

const EmpanadaMap = ({ location }) => (
  <div>
    {location.coordinates !== undefined ? <img alt="map" src={`https://maps.googleapis.com/maps/api/staticmap?center=${location.coordinates.latitude},${location.coordinates.longitude}&zoom=18&size=400x400&key=AIzaSyCs-y4jylAvh6Lf2l_G-Ktuue4qapukIc0`} style={{ height: '80vh' }} /> : null}
  </div>
);


export default EmpanadaMap;
