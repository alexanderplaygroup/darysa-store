'use client';

import { MapPin } from 'lucide-react';
import { Distributor } from '../interface';

interface LocationCardProps {
  location: Distributor;
}

export default function LocationCard({ location }: LocationCardProps) {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3">
        {/* Location Pin */}
        <div className="shrink-0">
          <MapPin className="text-darysa-green-500 size-8!" />
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
