import React from 'react';
import CardsData from '@/data/pagesData/vouchers/vouchersCards';
import VouchersColumns from '@/data/pagesData/vouchers/vouchersColumns';
import PageLayout from '@/components/compounds/pages';
import Link from 'next/link';

const Vouchers = () => {
  return (
    <div className="flex flex-col p-5">
      <div className="flex flex-row-reverse">
        <Link href="/Vouchers/generate" legacyBehavior>
          <a className="bg-orange hover:bg-secondary transition-all duration-300 py-3 px-5 rounded-lg text-sm text-white outline-none">
            Générer un voucher
          </a>
        </Link>
      </div>
      <PageLayout
        columns={VouchersColumns}
        CardsData={CardsData}
        columnGroupingModel={''}
        endpoint={'/vouchers'}
        itemNumberEndpoint={'vouchersInMaxTime.numberOfVouchers'}
        summaryEndpoint={'/vouchers/summary'}
      />
    </div>
  );
};

export default Vouchers;
