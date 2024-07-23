import { useMapEvents } from 'react-leaflet';

const MapInteractions = ({ onClick, onLoad }) => {
  useMapEvents({
    click: (event) => {
      onClick(event);
    },
    load: () => {
      onLoad();
    },
  });

  return null;
};

export default MapInteractions;
