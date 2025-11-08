/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { FileText, Truck } from 'lucide-react';

export default function Address() {
  const address: any = {
    address: 'Av. Los Pinos 456',
    district: 'Miraflores',
    province: 'Lima',
    department: 'Lima',
    postalCode: '15074',
    reference: 'Frente al parque Kennedy',
  };

  const contact: any = {
    fullName: 'Juan Pérez',
    phone: '987654321',
    dni: '45678912',
    email: 'juan.perez@example.com',
    ruc: '10456789012',
    socialReason: 'Inversiones Pérez SAC',
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-2 lg:gap-10 xl:gap-16">
        {/* Dirección de Facturación */}
        <div className="flex h-full flex-col space-y-3">
          <h2 className="lg::text-[30px] text-darysa-gris-800 mb-6 flex items-center gap-4 text-xl font-semibold sm:mb-8 sm:gap-6 sm:text-2xl lg:mb-10 xl:mb-12">
            <FileText size={32} className="text-darysa-gris-800" />
            Dirección de Facturación
          </h2>

          <div className="rounded-xl border border-black p-6 sm:p-8">
            <div className="mb-3 text-sm uppercase sm:text-lg">DATOS DEL CLIENTE</div>
            <div className="space-y-1 text-sm sm:text-sm">
              <p>
                <span className="font-medium">Nombre:</span> {contact.fullName}
              </p>
              <p>
                <span className="font-medium">Teléfono:</span> {contact.phone}
              </p>
              <p>
                <span className="font-medium">Dni:</span> {contact.dni}
              </p>
              <p>
                <span className="font-medium">Correo electrónico:</span> {contact.email}
              </p>
              <p>
                <span className="font-medium">Ruc:</span> {contact.ruc || 'No disponible'}
              </p>
              <p>
                <span className="font-medium">Razón social:</span>{' '}
                {contact.socialReason || 'No disponible'}
              </p>
            </div>
          </div>
        </div>

        {/* Dirección de Envío */}
        <div className="flex h-full flex-col space-y-3">
          <h2 className="lg::text-[30px] text-darysa-gris-800 mb-6 flex items-center gap-4 text-xl font-semibold sm:mb-8 sm:gap-6 sm:text-2xl lg:mb-10 xl:mb-12">
            <Truck size={32} className="text-darysa-gris-800" />
            Dirección de Envío
          </h2>

          <div className="h-full rounded-xl border border-black p-6 sm:p-8">
            <div className="mb-3 text-sm uppercase sm:text-lg">DATOS DEL CLIENTE</div>
            <div className="space-y-1 text-sm sm:text-sm">
              <p>
                <span className="font-medium">Dirección:</span> {address.address}
              </p>
              <p>
                <span className="font-medium">Distrito:</span> {address.district}
              </p>
              <p>
                <span className="font-medium">Provincia:</span> {address.province}
              </p>
              <p>
                <span className="font-medium">Departamento:</span> {address.department}
              </p>
              <p>
                <span className="font-medium">Código Postal:</span> {address.postalCode}
              </p>
              <p>
                <span className="font-medium">Referencia:</span>{' '}
                {address.reference || 'No hay referencia'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-darysa-gris-800 mt-3.5 text-xs font-medium sm:text-sm">
        {(!contact.ruc || !contact.socialReason) && (
          <span>
            *La factura solo será enviada si el cliente proporciona un RUC y una razón social
            válidos.
          </span>
        )}
        <br />
        *La factura será remitida a tu correo una vez finalizado el proceso de compra.
      </p>
    </div>
  );
}
