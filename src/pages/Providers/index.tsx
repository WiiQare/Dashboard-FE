import React from 'react';
import CardsData from '@/data/pagesData/providers/providersCards';
import ProvidersColumns from '@/data/pagesData/providers/providersColumns';
import PageLayout from '@/components/compounds/pages';
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
