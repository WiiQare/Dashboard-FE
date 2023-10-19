import React from 'react';
import CardsData from '@/data/pagesData/payments/paymentsCards';
import PaymentsProvidersColumns from '@/data/pagesData/payments/providers/providerColumns';
import PageLayout from '@/components/pages';

const Provider = () => {
  return <PageLayout columns={PaymentsProvidersColumns} CardsData={CardsData} columnGroupingModel={null} endpoint={'/payments/providers'} itemNumberEndpoint={'numberOfRows'} summaryEndpoint={'/payments/summary'}></PageLayout>
};

export default Provider;
