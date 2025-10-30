// src/modules/distributors/components/DistributorMarker.tsx
'use client';

import type { Marker as LeafletMarker } from 'leaflet';
import { MapPin } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Distributor } from '../interface';

// ✅ Import dinámico para evitar errores con SSR en Next.js
const Marker = dynamic(() => import('react-leaflet').then((m) => m.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then((m) => m.Popup), { ssr: false });
const Tooltip = dynamic(() => import('react-leaflet').then((m) => m.Tooltip), { ssr: false });

interface Props {
  distributor: Distributor;
  onSelect: (id: number) => void;
  markersRef: React.RefObject<Record<number, LeafletMarker>>;
}

export const DistributorMarker = ({ distributor, onSelect, markersRef }: Props) => (
  <Marker
    key={distributor.id}
    position={[distributor.coords.lat, distributor.coords.lng]}
    ref={(ref) => {
      if (ref) markersRef.current[distributor.id] = ref;
    }}
    eventHandlers={{ click: () => onSelect(distributor.id) }}
  >
    <Tooltip direction="top" offset={[0, -50]} opacity={1}>
      <strong>{distributor.name}</strong>
    </Tooltip>
    <Popup offset={[0, -35]}>
      <strong>
        <MapPin className="mb-3 h-8 w-8 text-neutral-300" />
        {distributor.name}
      </strong>
      <br />
      {distributor.address} <br />
      <a
        href={`https://www.google.com/maps?q=${distributor.coords.lat},${distributor.coords.lng}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        Ver en Google Maps
      </a>
      <br />
      <a
        href={`https://waze.com/ul?ll=${distributor.coords.lat},${distributor.coords.lng}&navigate=yes`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-600 underline"
      >
        Ir con Waze
      </a>
    </Popup>
  </Marker>
);
