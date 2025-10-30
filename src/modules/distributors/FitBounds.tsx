import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { Distributor } from './interface';

interface FitBoundsProps {
  distributors: Distributor[];
}
export const FitBounds = ({ distributors }: FitBoundsProps) => {
  const map = useMap();

  useEffect(() => {
    if (!map || distributors.length === 0) return;

    const bounds = distributors.map((d) => [d.coords.lat, d.coords.lng]) as [number, number][];
    map.fitBounds(bounds, { padding: [50, 50] }); // margen interno
  }, [map, distributors]);

  return null;
};
