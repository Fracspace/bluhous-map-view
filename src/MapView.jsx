import React ,{useState}from "react";

import {
  GoogleMap,
  useJsApiLoader,
  useLoadScript,
  InfoWindow,
  LoadScript,
  Marker
} from "@react-google-maps/api";

import Card from 'react-bootstrap/Card';

function MapView() {
  const [count, setCount] = useState(0);

  const center = {
    lat: 30.7333,
    lng: 76.7794
  };

  const containerStyle = {
    width: "100%",
    height: "500px",
    border: "2px solid blue"
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDp8w5DnETDxDe_gfjtOp9fbWyQhXkSnUU"
  });

  const [map, setMap] = useState();
  const [selectedMarker, setSelectedMarker] = useState();

  const Markers = [
    {
      position: { lat: 30.7333, lng: 76.7794 },
      title: "Marker 1",
      content: "This is marker1"
    }
  ];

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  return (
    <div>
    
    <Card>
      <div style={{ width: "80%", height: "90vh" }}>
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {Markers?.map((marker, index) => (
              <Marker
                key={index}
                position={marker.position}
                onClick={() => handleMarkerClick(marker)}
              ></Marker>
            ))}
          </GoogleMap>
        )}
      </div>
      </Card>
    </div>
  );
}

export default MapView;
