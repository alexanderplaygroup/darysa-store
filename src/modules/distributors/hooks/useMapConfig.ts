import type { Map as LeafletMap, Marker as LeafletMarker } from 'leaflet';
import { useEffect, useRef, useState } from 'react';

interface UseMapConfigOptions {
  zoomOnSelect?: number;
}

export function useMapConfig({ zoomOnSelect = 13 }: UseMapConfigOptions = {}) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const markersRef = useRef<Record<number, LeafletMarker>>({});

  // Controlar cámara y popup cuando cambia el marcador seleccionado
  useEffect(() => {
    if (!selectedId) return;
    const marker = markersRef.current[selectedId];
    if (!marker) return;

    const { lat, lng } = marker.getLatLng();
    mapRef.current?.flyTo([lat, lng], zoomOnSelect, { duration: 1.5 });
    marker.openPopup();
  }, [selectedId, zoomOnSelect]);

  return {
    mapRef,
    markersRef,
    selectedId,
    setSelectedId,
  };
}
