import TransferView from '@/modules/checkout/TransferView';

export default async function page(props: { params: Promise<{ orderNumber: string }> }) {
  const params = await props.params;
  // const order = await getInitialOrder(params.orderNumber)
  console.log(params.orderNumber);
  return <TransferView />;
}
