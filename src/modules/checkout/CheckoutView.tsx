'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */

import { AppBreadcrumb, BreadcrumbItemType } from '@/common/components/custom-ui/AppBreadcrumb';
import { Container } from '@/common/components/custom-ui/Container';
import { Heading } from '@/common/components/custom-ui/Heading';
import { Text } from '@/common/components/custom-ui/Text';
import { TruckIcon } from '@/common/components/icons/TruckIcon';
import { Accordion } from '@/common/components/shadcn-ui/accordion';
import { useState } from 'react';
import { CheckoutAccordionSection } from './components/CheckoutAccordionSection';
import { SelectedProductsCard } from './components/SelectedProductsCard';
import { AddressSummary } from './components/steps/checkout-summaries/AddressSummary';
import { PersonalDataSummary } from './components/steps/checkout-summaries/PersonalDataSummary';
import { AddressForm } from './components/steps/forms/AddressForm';
import { PaymentForm } from './components/steps/forms/PaymentForm';
import { PersonalDataForm } from './components/steps/forms/PersonalDataForm';
import { useCheckoutSteps } from './hooks/useCheckoutSteps';

const breadcrumbItems: BreadcrumbItemType[] = [
  { label: 'Home', href: '/' },
  { label: 'Checkout', isCurrent: true },
];

const CheckoutView = () => {
  const [personalData, setPersonalData] = useState<any>(null);
  const [personalAddress, setPersonalAddress] = useState<any>(null);

  const {
    openSections,
    setOpenSections,
    completeStep,
    goToNextStep,
    editStep,
    isCompleted,
    isEditing,
  } = useCheckoutSteps(['1', '2', '3']);

  return (
    <>
      <Container className="bg-darysa-gris-800/20 h-px" />

      {/* Header y Breadcrumb */}
      <Container className="mb-5 space-y-4">
        <AppBreadcrumb
          items={breadcrumbItems}
          className="text-darysa-green-500 sm:gap-1.5"
          currentClassName="text-darysa-green-500"
        />
        <div className="space-y-2">
          <Heading as="h1" variant="heading" className="md:text-2xl">
            Checkout
          </Heading>
          <Text variant="body" className="text-darysa-gris-950 font-semibold">
            Listo para realizar tu compra
          </Text>
        </div>
      </Container>

      {/* Layout principal */}
      <Container className="grid grid-cols-[1.3fr_0.7fr] gap-10">
        <Accordion
          type="multiple"
          value={openSections}
          onValueChange={setOpenSections}
          className="space-y-4"
        >
          {/* Paso 1: Datos personales */}
          <CheckoutAccordionSection
            id="1"
            title="Datos Personales"
            summaryView={<PersonalDataSummary data={personalData} />}
            isCompleted={isCompleted('1')}
            isEditing={isEditing('1')}
            onEdit={() => editStep('1')}
          >
            <PersonalDataForm
              defaultValues={personalData}
              onSubmit={(data) => {
                setPersonalData(data);
                completeStep('1');
                // setOpenSections((prev) => prev.filter((step) => step !== '1'));
                goToNextStep('1');
              }}
            />
          </CheckoutAccordionSection>

          {/* Paso 2: Delivery */}
          <CheckoutAccordionSection
            id="2"
            title="Delivery"
            summaryView={<AddressSummary data={personalAddress} />}
            isCompleted={isCompleted('2')}
            isEditing={isEditing('2')}
            onEdit={() => editStep('2')}
          >
            <div className="space-y-8">
              <div className="bg-darysa-green-500 mx-auto flex h-15 w-fit items-center justify-center gap-6 rounded-md px-6">
                <TruckIcon className="text-white" />
                <p className="text-base leading-none font-semibold text-white">
                  Entrega a Domicilio
                </p>
              </div>
              <AddressForm
                defaultValues={personalAddress}
                onSubmit={(data) => {
                  setPersonalAddress(data);
                  completeStep('2');
                  goToNextStep('2');
                }}
              />
            </div>
          </CheckoutAccordionSection>

          {/* Paso 3: Pago */}
          <CheckoutAccordionSection
            id="3"
            title="Pago"
            summaryView={<div className="pl-15">Pago pendiente</div>}
            isCompleted={isCompleted('3')}
            isEditing={isEditing('3')}
            onEdit={() => editStep('3')}
          >
            <PaymentForm
              defaultValues={{ method: 'bank_transfer' }}
              onSubmit={(data) => {
                console.log('Pago seleccionado:', data);
                completeStep('3');
                goToNextStep('3');
              }}
            />
          </CheckoutAccordionSection>
        </Accordion>

        <SelectedProductsCard />
      </Container>
    </>
  );
};

export default CheckoutView;
