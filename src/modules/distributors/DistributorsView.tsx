'use client';

import { Container } from '@/common/components/custom-ui/Container';
import dynamic from 'next/dynamic';

import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
// ⚠️ Importar dinámicamente porque react-leaflet depende del objeto `window`
const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), {
  ssr: false,
});
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), {
  ssr: false,
});
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), { ssr: false });

// 🧭 Coordenadas iniciales
const position: [number, number] = [51.505, -0.09];

const DistributorsView = () => {
  useEffect(() => {
    // ✅ Importar leaflet solo cuando window ya existe (en cliente)
    import('leaflet').then((L) => {
      const DefaultIcon = L.icon({
        iconUrl: '/distributors/marker-icon.svg',
        // shadowUrl: '/marker-shadow.png', // opcional
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      });
      L.Marker.prototype.options.icon = DefaultIcon;
    });
  }, []);
  return (
    <>
      {/* Línea separadora superior */}
      <Container className="bg-darysa-gris-800/20 h-px" />

      <Container className="space-y-6 py-10">
        <h2 className="mb-4 text-center text-2xl font-semibold">Nuestras Sucursales</h2>

        <div className="h-[500px] w-full overflow-hidden rounded-xl shadow-md">
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            className="h-full w-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </Container>
    </>
  );
};

export default DistributorsView;
