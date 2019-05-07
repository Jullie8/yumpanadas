import React from 'react';
// import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
// import DoctorMarker from "./DoctorMarker";

const EmpanadaMap = ({ location }) => (
  <div>
    {location.coordinates !== undefined ? (
      <img
        alt="map"
        src={`https://maps.googleapis.com/maps/api/staticmap?center=${location
          .coordinates.latitude},${location.coordinates
          .longitude}&zoom=18&size=400x400&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
        style={{ height: "50vh" }}
      />
    ) : null}
  </div>
);


export default EmpanadaMap;
