import { UserContext } from '@/context/UserContext';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { fetchData } from '../api/fetchData';
import CardsData from '@/data/pagesData/payments/paymentsCards';
import Pagination from '@/components/atom/pagination';
import Content from '@/components/content';
import payersColumns from '@/data/pagesData/payments/payers/payersColumns';
import PageSkeleton from '@/components/molecules/pageSkeleton';
import PageLayout from '@/components/pages';
interface CustomUser {
  id: string;
  name: string | null | undefined;
  email: string | null | undefined;
  image: string | null | undefined;
}

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
