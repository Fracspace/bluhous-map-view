import React, { useRef, useEffect } from "react";

function MapViewJs() {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadMap = async () => {
      try {
        // Ensure Google Maps API is loaded
        const { Map } = await google.maps.importLibrary("maps"); // Dynamically load the "maps" library
        const { AdvancedMarkerElement } = await google.maps.importLibrary(
          "marker"
        ); // Load marker library if needed

        const position = { lat: 17.3716, lng: 78.4747 }; // Location of Uluru

        // Initialize the map
        const map = new Map(mapRef.current, {
          zoom: 20,
          center: position,
          mapId: "DEMO_MAP_ID" // Replace with your map ID
        });

        // Add a marker
        new AdvancedMarkerElement({
          map,
          position,
          title: "Uluru"
        });
      } catch (error) {
        console.error("Failed to load Google Maps:", error);
      }
    };

    loadMap();
  }, []);
  return (
    <>
      <div
        ref={mapRef}
        style={{
          width: "100%",
          height: "500px", // Adjust the dimensions as needed
          border: "1px solid black"
        }}
      ></div>
    </>
  );
}

export default MapViewJs;
