import SettingsForm from '@/modules/dashboard/components/forms/SettignsForm';

export default function page() {
  return (
    <div className="space-y-6">
      <h3 className="text-darysa-gris-950 text-xl font-semibold">Configuración</h3>
      <SettingsForm />
    </div>
  );
}
