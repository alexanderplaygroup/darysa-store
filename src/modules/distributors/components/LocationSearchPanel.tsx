'use client';
import { Input } from '@/common/components/shadcn-ui/input';
import { MapPin, Search, X } from 'lucide-react';
import { useState } from 'react';
import distributors from '../data/distributors.json';
import LocationCard from './LocationCard';

interface LocationSearchPanelProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSelectLocation: (id: number) => void; // 👈 solo id
}

export default function LocationSearchPanel({
  searchQuery,
  setSearchQuery,
  onSelectLocation,
}: LocationSearchPanelProps) {
  const [isOpen, setIsOpen] = useState(false);

  const filteredLocations = distributors.filter(
    (d) =>
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pointer-events-auto flex w-full max-w-[300px] flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-md max-lg:mx-auto">
      <div className="p-4">
        <div className="relative">
          <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-neutral-400" />
          <Input
            type="text"
            placeholder="Buscar por ciudad o distrito"
            value={searchQuery}
            onFocus={() => setIsOpen(true)}
            onBlur={() => setTimeout(() => setIsOpen(false), 150)}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-darysa-green-500 h-11 border-2 bg-white pr-4 pl-10 font-sans text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-red-600 focus:ring-red-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute top-1/2 right-3 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="max-h-[300px] flex-1 overflow-y-auto border-t border-neutral-200">
          <div className="space-y-2 p-2">
            {filteredLocations.length > 0 ? (
              filteredLocations.map((location) => (
                <LocationCard
                  key={location.id}
                  location={location}
                  onSelect={() => {
                    onSelectLocation(location.id); // ✅ solo pasamos el ID
                    setIsOpen(false); // opcional: cerrar panel al seleccionar
                  }}
                />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <MapPin className="mb-3 h-8 w-8 text-neutral-300" />
                <p className="text-sm font-medium text-neutral-600">
                  No se encontraron ubicaciones
                </p>
                <p className="mt-1 text-xs text-neutral-500">Intenta con otra búsqueda</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
