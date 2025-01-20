import React from "react";

import { APIProvider, Map } from "@vis.gl/react-google-maps";

function MapComponent2() {
  return (
    <div>
      <div>Map component2</div>
      <div style={{width:'80vw',height:'60vh'}}>
        <APIProvider
          apiKey={"AIzaSyDp8w5DnETDxDe_gfjtOp9fbWyQhXkSnUU"}
          onLoad={() => console.log("Maps API has loaded.")}
        >
          <Map
            defaultZoom={13}
            defaultCenter={{   lat: 30.7333,
                lng: 76.7794}}
            onCameraChanged={(ev) =>
              console.log(
                "camera changed:",
                ev.detail.center,
                "zoom:",
                ev.detail.zoom
              )
            }
          ></Map>
        </APIProvider>
      </div>
    </div>
  );
}

export default MapComponent2;
