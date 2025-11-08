/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

export default function CompanyAccounts() {
  // Datos de prueba (mock)
  const filteredAccounts: any[] = [
    {
      id: 1,
      bank_name: 'BBVA',
      account_number: '0011-0234-5678-9012',
      interbank_account_number: '011-234-567890123456-78',
    },
    {
      id: 2,
      bank_name: 'BCP',
      account_number: '123-45678901-0-12',
      interbank_account_number: '002-123-456789012345-67',
    },
    {
      id: 3,
      bank_name: 'Scotiabank',
      account_number: '345-67890123-4-56',
      interbank_account_number: '009-345-678901234567-89',
    },
    {
      id: 4,
      bank_name: 'Interbank',
      account_number: '789-01234567-8-90',
      interbank_account_number: '003-789-012345678901-23',
    },
    {
      id: 5,
      bank_name: 'Banco de la Nación',
      account_number: '001-1234567890',
      interbank_account_number: null,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-[auto_auto_auto_auto_auto]">
      {filteredAccounts.map((account) => (
        <div key={account.id}>
          <h4 className="text-darysa-gris-800 text-sm font-semibold">
            - Banco: <span className="font-normal text-black">{account.bank_name}</span>
          </h4>
          <p className="text-darysa-gris-800 text-sm font-semibold">
            - Número de cuenta:{' '}
            <span className="font-normal text-black">{account.account_number}</span>
          </p>
          {account.interbank_account_number && (
            <p className="text-darysa-gris-800 text-sm font-semibold">
              - CCI:{' '}
              <span className="font-normal text-black">{account.interbank_account_number}</span>
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
