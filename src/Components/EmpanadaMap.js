import React from "react";
// import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
// import DoctorMarker from "./DoctorMarker";

const EmpanadaMap = (props) => {
    console.log(props.location)
    return (
      <div> 
            {props.location.coordinates !== undefined ? <img alt="map" src={`https://maps.googleapis.com/maps/api/staticmap?center=${props.location.coordinates.latitude},${props.location.coordinates.longitude}&zoom=18&size=400x400&key=AIzaSyCs-y4jylAvh6Lf2l_G-Ktuue4qapukIc0`} style={{ height: '80vh' }}/> : null}
      </div>
    )
}


export default EmpanadaMap;


// import React, { Component } from 'react'
// import GoogleMapReact from 'google-map-react'

// const EmpanadaMap = ({ text }) => <div>{text}</div>;

// export default class EmpanadaMapContainer extends React.Component {
//     static defaultProps = {
//         center: { lat: 40.7446790, lng: -73.9485420 },
//         zoom: 11
//     }


//     render() {
//         return (
//             <div className='google-map' style={{ height: '100vh', width: '100%' }}>
//                 <GoogleMapReact
//                     bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY} }
//                     defaultCenter={this.props.center}
//                     defaultZoom={this.props.zoom}>
//                     <EmpanadaMap
//                         lat={40.7473310}
//                         lng={-73.8517440}
//                         text={'Where' }
//                         />
//         </GoogleMapReact>
//             </div>
//         )
//     }
// }

//`https://maps.googleapis.com/maps/api/staticmap?center=${props.location.coordinates.latitude},${props.location.coordinates.longitude}&zoom=18&size=400x400&key=${process.env.REACT_APP_GOOGLE_API_KEY}
//this works bottom
//https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${props.location.coordinates.longitude},${props.location.coordinates.latitude},14.25,0,60/600x600?access_token=pk.eyJ1IjoianVsbGllOC0iLCJhIjoiY2pzZmF4MjZ6MDFmdjN5azZocmx6dmdvbSJ9.gNvQG9YZQrwNFGSLDSODCg

//this one REALLY WORKS
//https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/url-https%3A%2F%2Fwww.mapbox.com%2Fimg%2Frocket.png(${props.location.coordinates.longitude},${props.location.coordinates.latitude})/${props.location.coordinates.longitude},${props.location.coordinates.latitude},15/1000x1000?access_token=pk.eyJ1IjoianVsbGllOC0iLCJhIjoiY2pzZmF4MjZ6MDFmdjN5azZocmx6dmdvbSJ9.gNvQG9YZQrwNFGSLDSODCg