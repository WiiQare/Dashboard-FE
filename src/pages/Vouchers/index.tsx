import React from 'react';
import CardsData from '@/data/pagesData/vouchers/vouchersCards';
import VouchersColumns from '@/data/pagesData/vouchers/vouchersColumns';
import PageLayout from '@/components/pages';


const Vouchers = () => {
  return <PageLayout columns={VouchersColumns} CardsData={CardsData} columnGroupingModel={''} endpoint={'/vouchers'} itemNumberEndpoint={'vouchersInMaxTime.numberOfVouchers'} summaryEndpoint={'/vouchers/summary'}></PageLayout>
};


export default Vouchers;
