export interface Distributor {
  id: number;
  name: string;
  address: string;
  phone?: string;
  coords: {
    lat: number;
    lng: number;
  };
  note?: string; // opcional
}
