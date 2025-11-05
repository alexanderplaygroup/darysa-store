import { Package } from 'lucide-react';
// Simula un delay de 2 segundos en el servidor
async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function page() {
  // await delay(10000);

  return (
    <>
      <div className="space-y-6">
        <h3 className="text-darysa-gris-950 text-xl font-semibold">Mis Pedidos</h3>

        <div className="rounded-lg border-2 border-dashed border-gray-200 p-12 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
              <Package className="text-darysa-green-500 h-8 w-8" />
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                No tienes pedidos todavía
              </h3>
              <p className="text-gray-600">
                Cuando realices tus compras, tus pedidos aparecerán aquí
              </p>
            </div>
            <button className="bg-darysa-green-500 hover:bg-darysa-green-500 mt-4 rounded-md px-6 py-2 text-white transition">
              Explorar Productos
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
