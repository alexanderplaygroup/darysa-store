'use client';

import type { Marker as LeafletMarker } from 'leaflet';
import { MapIcon, MapPin, Navigation } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Distributor } from '../interface';

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
    <Tooltip
      direction="top"
      offset={[0, -50]}
      opacity={1}
      permanent
      className="text-darysa-gris-800! rounded-lg!"
    >
      <strong>{distributor.name}</strong>
    </Tooltip>
    <Popup offset={[0, -35]} closeButton={false}>
      <div className="flex w-full items-center gap-2.5 py-1">
        <div className="w-fit">
          <MapPin className="text-darysa-green-500 size-9" />
        </div>
        <div className="flex w-full flex-col items-center justify-start gap-1.5">
          <span className="text-darysa-gris-800 w-full text-sm leading-tight font-semibold">
            {distributor.name}
          </span>
          <span className="text-darysa-gris-800 w-full text-xs leading-tight">
            {distributor.address}
          </span>
          <div className="flex w-full items-center justify-start gap-4 text-xs">
            <a
              href={`https://www.google.com/maps?q=${distributor.coords.lat},${distributor.coords.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:underline hover:underline-offset-4"
            >
              <MapIcon size={14} />
              Ir en Google Maps
            </a>

            <a
              href={`https://waze.com/ul?ll=${distributor.coords.lat},${distributor.coords.lng}&navigate=yes`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:underline hover:underline-offset-4"
            >
              <Navigation size={14} />
              Ir con Waze
            </a>
          </div>
        </div>
      </div>
    </Popup>
  </Marker>
);
