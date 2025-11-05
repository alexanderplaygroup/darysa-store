'use client';

import { Button } from '@/common/components/shadcn-ui/button';
import { Input } from '@/common/components/shadcn-ui/input';
import { Search } from 'lucide-react';
import { useState } from 'react';

export function SearchBar() {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    console.log('Searching with:', { keyword, location });
    // Aquí puedes agregar la lógica de búsqueda
  };

  return (
    <div className="border-darysa-gris-350-alt/60 flex w-full flex-col items-center gap-4 rounded-lg border bg-white p-4 md:flex-row">
      {/* Buscar por palabra clave */}
      <div className="border-darysa-gris-350-alt/60 flex w-full flex-1 items-center rounded-lg border bg-white">
        <Input
          type="text"
          placeholder="Buscar por palabra clave"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="h-12 rounded-lg border-0 pl-4 placeholder:font-semibold focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <span className="bg-darysa-amarillo flex aspect-square size-12 items-center justify-center rounded-r-lg text-white">
          <Search className="h-5 w-5" />
        </span>
      </div>

      {/* Buscar por ubicación */}
      <div className="border-darysa-gris-350-alt/60 flex w-full flex-1 items-center rounded-lg border bg-white">
        <Input
          type="text"
          placeholder="Buscar por ubicación"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="h-12 rounded-lg border-0 pl-4 placeholder:font-semibold focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <span className="bg-darysa-amarillo flex aspect-square size-12 items-center justify-center rounded-r-lg text-white">
          <Search className="h-5 w-5" />
        </span>
      </div>

      {/* Botón Buscar Oferta */}
      <Button
        onClick={handleSearch}
        className="bg-darysa-gris-800 hover:bg-darysa-gris-800 h-12 w-full rounded-lg px-8 text-white md:w-fit lg:max-w-[289px]"
      >
        Buscar Oferta
      </Button>
    </div>
  );
}
