"use client";

import React, { useRef, useEffect, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const containerStyle = {
  width: "100%",
  height: "800px",
};

export default function MapComponent() {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyApNuqwSeZkIMq28mWg3oMBK7uVKcGV67g",
      version: "weekly",
      libraries: ["places"],
    });

    loader.load().then(() => {
      if (mapRef.current && !map) {
        const newMap = new window.google.maps.Map(mapRef.current, {
          center: { lat: 28.64148765646425, lng: -106.14824293032346 }, // coordenadas del edificio i de la utch jijiji
          zoom: 12,
        });

        setMap(newMap);
      }
    });

    return () => {};
  }, [map]);

  return <div ref={mapRef} style={containerStyle}></div>;
}
