'use client';

import { Button } from '@shadcnui/button';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@shadcnui/command';
import { Search } from 'lucide-react';
import * as React from 'react';
import distributors from '../data/distributors.json';
import { Distributor } from '../interface';
import LocationCard from './LocationCard';

interface LocationSearchCommandProps {
  onSelectLocation: (id: number) => void;
}

export default function LocationSearchCommand({ onSelectLocation }: LocationSearchCommandProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className="flex w-full items-center justify-center lg:mx-4! lg:justify-start xl:mx-0!">
        <Button
          size="lg"
          variant="outline"
          onClick={() => setOpen(true)}
          className="text-darysa-gris-800 group pointer-events-auto cursor-default rounded-lg px-4 py-8.5 hover:bg-white"
        >
          <span className="border-darysa-green-500 group-hover:bg-darysa-green-500/10 text-darysa-gris-800/60 flex w-full items-center gap-2.5 rounded-lg border-2 bg-white px-4 py-2 font-semibold">
            <Search className="text-darysa-green-500 h-4 w-4" strokeWidth={2.5} />
            Buscar por ciudad o distrito...
          </span>
        </Button>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen} className="max-w-sm!">
        <CommandInput placeholder="Buscar por ciudad o distrito..." />
        <CommandList className="max-h-[290px]">
          <CommandEmpty>No se encontraron ubicaciones</CommandEmpty>

          <CommandGroup className="p-0!">
            {distributors.map((location: Distributor) => (
              <CommandItem
                key={location.id}
                onSelect={() => {
                  onSelectLocation(location.id);
                  setOpen(false);
                }}
                className="border-darysa-gris-350 w-full cursor-pointer rounded-none border-b px-6! py-4.5! last:border-none"
              >
                <LocationCard location={location} />
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
