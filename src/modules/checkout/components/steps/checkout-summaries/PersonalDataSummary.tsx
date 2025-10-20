/* eslint-disable @typescript-eslint/no-explicit-any */
export function PersonalDataSummary({ data }: { data: any }) {
  if (!data) return <div className="pl-15">Datos pendientes</div>;

  return (
    <div className="space-y-1 pl-15 text-sm text-gray-700">
      <p>
        <strong>
          {data.name} {data.lastName}
        </strong>
      </p>
      <p>{data.email}</p>
      <p>{data.phone}</p>
    </div>
  );
}
