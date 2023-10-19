import React from 'react';
import CardsData from '@/data/pagesData/beneficiaries/beneficiariesCards';
import BeneficiariesColumns, {
  BeneficiariesColumnGroupingModel,
} from '@/data/pagesData/beneficiaries/beneficiariesColumns';
import PageLayout from '@/components/pages';

let newSkip: number = 0;

const Beneficiaries = () => {
  return (
    <PageLayout
      columns={BeneficiariesColumns}
      CardsData={CardsData}
      columnGroupingModel={BeneficiariesColumnGroupingModel}
      endpoint={'/beneficiaries'}
      itemNumberEndpoint={'numberOfRegisteredBeneficiaries'}
      summaryEndpoint={'/beneficiaries/summary'}
    ></PageLayout>
  );
};

export default Beneficiaries;
