import React, { useState, useEffect } from "react";

import { GoogleMap, LoadScript ,Marker,MarkerF} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px"
};

function MapView2() {
  // State to store latitude and longitude
  const [center, setCenter] = useState({lat: 15.5567136, lng: 73.7594859999999});

  // Function to parse query parameters
  const getQueryParams = () => {
    const params = new URLSearchParams(window.location.search);
    const lat = parseFloat(params.get("lat"));
    const lng = parseFloat(params.get("lng"));
    return { lat, lng };
  };

  useEffect(() => {
    // Parse the query params on load and set the map center
    const { lat, lng } = getQueryParams();
   
    if (!isNaN(lat) && !isNaN(lng)) {
      setCenter({ lat, lng });
    }

    console.log("lat and long is",lat,lng,center)
  }, []);

  return (
    <>
     { center &&  <LoadScript googleMapsApiKey="AIzaSyDp8w5DnETDxDe_gfjtOp9fbWyQhXkSnUU">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={20}>
          {/* Add your map markers and other components here */}
          <MarkerF position={center} />
        </GoogleMap>
      </LoadScript>}
    </>
  );
}

export default MapView2;
