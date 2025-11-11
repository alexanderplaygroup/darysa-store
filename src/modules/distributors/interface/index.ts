export interface Distributor {
  id: number;
  region: string;
  name: string;
  ruc?: string | null;
  address?: string | null;
  email?: string | null;
  phone?: string | null;
  coords: {
    lat: number;
    lng: number;
  };
  note?: string; // campo opcional (para comentarios adicionales)
}
