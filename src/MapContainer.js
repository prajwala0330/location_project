  import React, { useEffect, useState } from 'react';
  import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'leaflet/dist/leaflet.css';
  import L from 'leaflet';
  import './MapContainer.css';  

  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  });

  const samplePointData = [
    { id: 1, lat: 38.89511, lng: -77.03637, name: 'Point 1' },
    { id: 2, lat: 38.88993, lng: -77.00905, name: 'Point 2' },
    { id: 3, lat: 38.89768, lng: -77.03829, name: 'Point 3' },
    { id: 4, lat: 38.87997, lng: -77.03797, name: 'Point 4' },
    { id: 5, lat: 38.88622, lng: -77.02724, name: 'Point 5' },
  ];

  const samplePolygonData = [
    {
      id: 1,
      name: 'Polygon 1',
      positions: [
        [38.88993, -77.00905],
        [38.89511, -77.03637],
        [38.9022, -77.0251],
        [38.77993, -77.12905],
      ],
    },
    {
      id: 2,
      name: 'Polygon 2',
      positions: [
        [38.89228, -77.01643],
        [38.89768, -77.03056],
        [38.88092, -77.02346],
        [38.88256, -77.03747],
      ],
    },
    {
      id: 3,
      name: 'Polygon 3',
      positions: [
        [38.88297, -77.01845],
        [38.89637, -77.02739],
        [38.89176, -77.04518],
        [38.88024, -77.02912],
      ],
    },
  ];

  const MapComponent = () => {
    const [points, setPoints] = useState([]);
    const [polygons, setPolygons] = useState([]);

    useEffect(() => {

      setPoints(samplePointData);

      setPolygons(samplePolygonData);
    }, []);

    return (
      <div className="map-wrapper">
        <MapContainer center={[38.89511, -77.03637]} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {points.map(point => (
            <Marker key={point.id} position={[point.lat, point.lng]}>
              <Tooltip className="tooltip-content">
                <div>
                  <strong>ID:</strong> {point.id}<br />
                  <strong>Name:</strong> {point.name}<br />
                  <strong>Latitude:</strong> {point.lat}<br />
                  <strong>Longitude:</strong> {point.lng}
                </div>
              </Tooltip>
            </Marker>
          ))}
          {polygons.map(polygon =>
            polygon.positions.map((position, index) => (
              <Marker key={`${polygon.id}-${index}`} position={position}>
                <Tooltip className="tooltip-content">
                  <div>
                    <strong>Polygon ID:</strong> {polygon.id}<br />
                    <strong>Polygon Name:</strong> {polygon.name}<br />
                    <strong>Vertex Latitude:</strong> {position[0]}<br />
                    <strong>Vertex Longitude:</strong> {position[1]}
                  </div>
                </Tooltip>
              </Marker>
            ))
          )}
        </MapContainer>
      </div>
    );
  };

  export default MapComponent;

