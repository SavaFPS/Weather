import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export const Map = () => {
  const position: [number, number] = [40.416775, -3.70379];

  return (
    <MapContainer center={position} zoom={10} style={{ width: '100%', height: '86vh' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  );
};
