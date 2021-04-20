import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 37.1232245,
  lng: -78.4927721
};

// function handleMarker(){
//  const map = document.getElementByID('map')
//   new google.maps.Marker({
//     position: myLatLng,
//     map,
//     title: "Hello World!",
//   })
// }
class MapContainer extends Component {

  
  render() {
    
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyAz_omTa5UZgVrndV6dcqr2jF2vhi9PzCM"
      >
      <div id="map">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
         
        >
        
          <></>
        </GoogleMap>
        </div>
      </LoadScript>

    )
  }
}

export default MapContainer