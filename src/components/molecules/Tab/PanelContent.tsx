import React, { useContext, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { TabPanel } from '../table';
import Fetcher from '@/lib/fetcher';
import { UserType } from '@/Interfaces/interfaces';
import ItemHistory from '@/components/atom/card/itemHistory';

interface FetcherResult {
  data: any;
  isLoading: boolean;
  isError: boolean;
}

const PanelContent: React.FC<{ value: any; index: number }> = ({
  value,
  index,
}) => {
  //   const { transaction, setTransaction } = useContext(TransactionContext);
  const { data: session } = useSession();
  const userState = session?.user as UserType;
  const { data, isLoading, isError }: FetcherResult = Fetcher(
    `/payment?type=${value == 0 ? 'monthly' : value == 1 ? 'weekly' : 'day'}`,
    { token: userState.id as string },
  );

  //   useEffect(() => {
  //     setTransaction({ state: true, transaction: data });
  //     console.log(data);
  //   }, [data]);

  return (
    <TabPanel value={value} index={index}>
      <section className="space-y-3">
        {isLoading || isError ? (
          <div className="w-full flex flex-col items-center gap-3">
            <span className="text-gray-400 text-xs font-normal">
              Chargement en cours...
            </span>
          </div>
        ) : data.length == 0 || data.code ? (
          <div className="w-full flex flex-col items-center gap-3">
            <span className="text-gray-400 text-xs font-normal">
              Aucune transaction...
            </span>
          </div>
        ) : (
          data &&
          data.map((item: any, i: number) => (
            <ItemHistory
              {...item}
              key={i}
              index={index}
              total={data.length ?? 0}
            />
          ))
        )}
      </section>
    </TabPanel>
  );
};

export default PanelContent;
