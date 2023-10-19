import React from 'react';
import CardsData from '@/data/pagesData/payers/payersCards';
import payersColumns, {
  payersColumnGroupingModel,
} from '@/data/pagesData/payers/payersColumns';

import PageLayout from '@/components/pages';


const Payers = () => {
  return <PageLayout columns={payersColumns} CardsData={CardsData} columnGroupingModel={payersColumnGroupingModel} endpoint={'/payers'} itemNumberEndpoint={'numberOfRegisteredPayers'} summaryEndpoint={'/payers/summary'}></PageLayout>
};

export default Payers;
