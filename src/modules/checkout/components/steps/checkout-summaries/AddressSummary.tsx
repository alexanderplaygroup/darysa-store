/* eslint-disable @typescript-eslint/no-explicit-any */
export function AddressSummary({ data }: { data: any }) {
  if (!data) return <div className="pl-15">Dirección pendiente</div>;

  return (
    <div className="space-y-1 pl-15 text-sm text-gray-700">
      <p>
        <strong>
          {data.department}, {data.province}, {data.district}
        </strong>
      </p>
      <p>
        {data.address} {data.number ? `#${data.number}` : ''}{' '}
        {data.floor ? `, Piso/Dpto: ${data.floor}` : ''}
      </p>
      {data.reference && <p>Referencia: {data.reference}</p>}
    </div>
  );
}
