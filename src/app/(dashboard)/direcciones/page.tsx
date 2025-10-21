import AddressForm from '@/modules/dashboard/components/forms/AddressForm';

export default function page() {
  return (
    <div className="space-y-6">
      {' '}
      <h3 className="text-darysa-gris-950 text-xl font-semibold">Direcciones</h3>
      <AddressForm />
    </div>
  );
}
