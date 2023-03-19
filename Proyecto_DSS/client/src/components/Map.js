import React from 'react'
import GoogleMapReact from 'google-map-react'
import {FaMapMarkerAlt} from 'react-icons/fa'

const Marker = ({ text }) => 
<div><FaMapMarkerAlt size={25} color="red"></FaMapMarkerAlt>{text}</div>;
function Map() {
    const defaultProps = {
        center: {
            lat: -12.04318,
            lng: -77.02824
        },
        zoom: 10
      };
  return (
    <div style={{ height: '50vh' }} className="w-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDrscGnOAIIpURZEXG4zgJqDXD1JF18VPQ' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
   
        <Marker
          lat={-12.04318}
          lng={-77.02824}
          text="Usuario1"
        />
        <Marker
          lat={-11.04318}
          lng={-77.02824}
          text="Usuario2"
        />

      </GoogleMapReact>
    </div>
  )
}

export default Map