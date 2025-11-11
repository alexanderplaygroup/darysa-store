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
      <div className="flex w-full items-start gap-3 py-2">
        {/* Icono principal */}
        <div className="shrink-0">
          <MapPin className="text-darysa-green-500 size-8" />
        </div>

        {/* Contenido del distribuidor */}
        <div className="flex w-full flex-col">
          <span className="text-darysa-gris-800 mb-2 text-sm leading-tight font-semibold">
            {distributor.name}
          </span>

          {distributor.address && (
            <span className="text-darysa-gris-700 mb-1 text-xs leading-tight">
              {distributor.address}
            </span>
          )}

          {distributor.phone && (
            <span className="text-darysa-gris-700 mb-1 text-xs leading-tight">
              {distributor.phone}
            </span>
          )}

          {distributor.email && (
            <span className="text-darysa-gris-700 hover:text-darysa-green-600 mb-3 text-xs leading-tight">
              {distributor.email}
            </span>
          )}

          {/* Enlaces de navegación */}
          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href={`https://www.google.com/maps?q=${distributor.coords.lat},${distributor.coords.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-blue-600 underline-offset-4 hover:underline"
            >
              <MapIcon size={14} />
              Google Maps
            </a>

            <a
              href={`https://waze.com/ul?ll=${distributor.coords.lat},${distributor.coords.lng}&navigate=yes`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-blue-600 underline-offset-4 hover:underline"
            >
              <Navigation size={14} />
              Waze
            </a>
          </div>

          {/* Nota opcional */}
          {distributor.note && (
            <span className="text-darysa-gris-600 mt-2 text-[11px] italic">{distributor.note}</span>
          )}
        </div>
      </div>
    </Popup>
  </Marker>
);
