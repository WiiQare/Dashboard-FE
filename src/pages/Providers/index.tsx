import { UserContext } from '@/context/UserContext';
import Router from 'next/router';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { fetchData } from '../api/fetchData';
import CardsData from '@/data/pagesData/providers/providersCards';
import Pagination from '@/components/atom/pagination';
import Content from '@/components/content';
import ProvidersColumns from '@/data/pagesData/providers/providersColumns';
import PageSkeleton from '@/components/molecules/pageSkeleton';
import PageLayout from '@/components/pages';
interface UserType {
  id: string;
  name: string | null | undefined;
  email: string | null | undefined;
  image: string | null | undefined;
}

let newSkip: number = 0;

const Providers = () => {
  return (
    <PageLayout
      columns={ProvidersColumns}
      CardsData={CardsData}
      columnGroupingModel={''}
      endpoint={'/providers'}
      itemNumberEndpoint={'numberOfRegisteredProviders'}
      summaryEndpoint={'/providers/summary'}
    ></PageLayout>
  );
};
export default Providers;
