import { useEffect } from 'react';

export function useDefaultLeafletIcon() {
  useEffect(() => {
    import('leaflet').then((L) => {
      const DefaultIcon = L.icon({
        iconUrl: '/distributors/marker-icon.svg',
        iconSize: [30, 49],
        iconAnchor: [15, 49],
      });
      L.Marker.prototype.options.icon = DefaultIcon;
    });
  }, []);
}
