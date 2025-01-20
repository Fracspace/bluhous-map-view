import React from "react";

import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px"
};

const center = {
  lat: 40.7128,
  lng: -74.006
};

const staticMapUrl =
"https://maps.googleapis.com/maps/api/staticmap?center=30.7333,76.7794&zoom=13&size=600x300&key=AIzaSyDp8w5DnETDxDe_gfjtOp9fbWyQhXkSnUU";

function MapView2() {
  return (
    <>
     <img src={staticMapUrl} alt="Static Map" />
    <LoadScript googleMapsApiKey="AIzaSyDp8w5DnETDxDe_gfjtOp9fbWyQhXkSnUU">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        {/* Add your map markers and other components here */}
      </GoogleMap>
    </LoadScript>
    </>
  );
}

export default MapView2;
