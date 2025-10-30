'use client';

import { Container } from '@/common/components/custom-ui/Container';
import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { FitBounds } from './FitBounds';
import { DistributorMarker } from './components/DistributorMarker';
import LocationSearchPanel from './components/LocationSearchPanel';
import distributors from './data/distributors.json';
import { useDefaultLeafletIcon } from './hooks/useDefaultLeafletIcon';
import { useMapConfig } from './hooks/useMapConfig';

const MapContainer = dynamic(() => import('react-leaflet').then((m) => m.MapContainer), {
  ssr: false,
});
const TileLayer = dynamic(() => import('react-leaflet').then((m) => m.TileLayer), { ssr: false });

const DistributorsView = () => {
  useDefaultLeafletIcon();
  const { mapRef, markersRef, selectedId, setSelectedId } = useMapConfig({ zoomOnSelect: 13 });
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Container size="full" className="relative mb-0">
      <div className="pointer-events-none absolute top-20 left-1/2 z-20 w-full max-w-[1366px] -translate-x-1/2">
        <LocationSearchPanel
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSelectLocation={setSelectedId}
        />
      </div>

      <div className="relative z-0 h-screen w-full overflow-hidden">
        <MapContainer
          ref={mapRef}
          center={[-9.19, -75.0152]}
          zoom={6}
          scrollWheelZoom={false}
          zoomControl={false}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <FitBounds distributors={distributors} />

          {distributors.map((d) => (
            <DistributorMarker
              key={d.id}
              distributor={d}
              markersRef={markersRef}
              onSelect={setSelectedId}
            />
          ))}
        </MapContainer>
      </div>
    </Container>
  );
};

export default DistributorsView;
