import { Ticket } from 'lucide-react';

export default function page() {
  return (
    <>
      <div className="space-y-6">
        <h3 className="text-darysa-gris-950 text-xl font-semibold">Cupones</h3>

        <div className="rounded-lg border-2 border-dashed border-gray-200 p-12 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
              <Ticket className="text-darysa-green-500 h-8 w-8" />
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                No hay cupones disponibles
              </h3>
              <p className="text-gray-600">Vuelve pronto para ver nuevas ofertas especiales</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
