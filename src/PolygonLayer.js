import React from 'react';
import { Polygon } from 'react-leaflet';

const PolygonLayer = ({ polygons }) => {
  return (
    <>
      {polygons.map((polygon, index) => (
        <Polygon key={index} positions={polygon.coordinates} />
      ))}
    </>
  );
};

export default PolygonLayer;
