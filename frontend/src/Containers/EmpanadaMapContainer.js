import React from 'react';
//import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import EmpanadaMap from '../Components/EmpanadaMap'

class EmpanadaMapContainer extends React.Component {
    state = {
        activeMarker: null,
        location: this.props.location
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location) {
            this.setState({
                location: nextProps.location
            })
        }
    }

    render () {
        return (
            <EmpanadaMap location={this.props.location} />

        )
    }
}
export default EmpanadaMapContainer; 