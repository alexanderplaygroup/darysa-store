'use client';

import { MapPin } from 'lucide-react';
import { useState } from 'react';
import { Distributor } from '../interface';

interface Location {
  id: string;
  name: string;
  address: string;
  distance: string;
  type: string;
}

interface LocationCardProps {
  location: Distributor;
  onSelect: () => void; // 👈 Aquí está la prop separada
}

export default function LocationCard({ location, onSelect }: LocationCardProps) {
  const [isSelected, setIsSelected] = useState(false);
  const handleClick = () => {
    setIsSelected(true);
    onSelect(); // 👈 mover mapa
  };
  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer border-b p-4 transition-all last:border-none ${
        isSelected ? 'border-darysa-green-500 bg-transparent' : 'border-darysa-gris-350 bg-white'
      }`}
    >
      <div className="flex items-center gap-3">
        {/* Location Pin */}
        <div className="shrink-0">
          <MapPin className="text-darysa-green-500 size-8" />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1 space-y-0.5">
          <h3 className="text-sm leading-tight font-semibold text-neutral-900">{location.name}</h3>
          <p className="line-clamp-1 text-xs text-neutral-600">{location.address}</p>
        </div>
      </div>
    </div>
  );
}
