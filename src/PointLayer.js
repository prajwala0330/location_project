import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const PointLayer = ({ points }) => {
  return (
    <>
      {points.map((point, index) => (
        <Marker
          key={index}
          position={point.coordinates}
          icon={new L.Icon({
            iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png',
            iconSize: [38, 95],
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76],
          })}
        >
          <Popup>
            {point.name}
          </Popup>
        </Marker>
      ))}
    </>
  );
};

export default PointLayer;
