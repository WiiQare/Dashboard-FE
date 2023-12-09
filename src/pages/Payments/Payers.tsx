import React from 'react';
import CardsData from '@/data/pagesData/payments/paymentsCards';
import payersColumns from '@/data/pagesData/payments/payers/payersColumns';
import PageLayout from '@/components/compounds/pages';

let newSkip: number = 0;

const Payers = () => {
  return (
    <PageLayout
      columns={payersColumns}
      CardsData={CardsData}
      columnGroupingModel={''}
      endpoint={'/payments/payers'}
      itemNumberEndpoint={'numberOfRows'}
      summaryEndpoint={'/payments/summary'}
    ></PageLayout>
  );
};

export default Payers;
