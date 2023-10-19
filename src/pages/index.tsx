import React, { useEffect, useState } from 'react';
import LineChart from '@/components/atom/charts/PrimeLineChart';
import BarChart, { ChartData } from '@/components/atom/charts/barChart';
import PayersPieChart from '@/components/atom/charts/pieChart';
import VouchersCards from '@/data/pagesData/main/vouchersCards';
import PayersCards from '@/data/pagesData/main/payersCards';
import BeneficiariesCards from '@/data/pagesData/main/beneficiariesCards';
import ProvidersCards from '@/data/pagesData/main/providerCards';
import Cards from '@/components/molecules/cards';
import CardSkeleton from '@/components/atom/skeleton/cardSkeleton';
import { useSession } from 'next-auth/react';
import { fetchData } from './api/fetchData';

interface CustomUser {
  id: string;
  name: string | null | undefined;
  email: string | null | undefined;
  image: string | null | undefined;
}

export default function Home() {
  const [barChartData, setBarChartData] = useState<ChartData[]>([]);
  const [lineChartData, setLineChartData] = useState<[]>([]);
  const [combinedCardData, setCombinedCardData] = useState<any[]>([]);
  const [pieData, setPieData] = useState<any>({});
  const { data: session } = useSession();
  const userState = session?.user as CustomUser;
  const userAuth = !!session;

  useEffect(() => {
    if (userAuth) {
      const fetchDataAsync = async () => {
        // Use userState.id as the access token
        const accessToken = userState?.id;

        // Check if accessToken is not null or undefined before making API requests
        if (accessToken) {
          console.log('Access token', session);
          const pieRes = await fetchData('/payers/summary', accessToken);
          setPieData(pieRes);

          const vouchers = await fetchData('/vouchers/summary', accessToken);
          const payers = await fetchData('/payers/summary', accessToken);
          const providers = await fetchData('/providers/summary', accessToken);
          const beneficiaries = await fetchData(
            '/beneficiaries/summary',
            accessToken,
          );
          const res = await fetchData('/charts/payers', accessToken, 5, 0);
          const line = await fetchData(
            '/charts/beneficiaries',
            accessToken,
            20,
            0,
          );

          const combinedData = [
            ...VouchersCards(vouchers),
            ...PayersCards(payers),
            ...BeneficiariesCards(beneficiaries),
            ...ProvidersCards(providers),
          ];

          setCombinedCardData(combinedData);
          setBarChartData(res);
          setLineChartData(line);
        }
      };

      fetchDataAsync();
    }
  }, [userAuth, userState]);

  return (
    <div className="transition-c-0.5  overflow-y-auto p-4 h-full w-full sm:px-4">
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div className="w-full">
          {combinedCardData.length ? (
            <Cards data={combinedCardData} />
          ) : (
            <CardSkeleton number={10} />
          )}
          <div className="p-4">
            <div className="flex flex-col md:h-[23rem] lg:flex-row gap-4 transition-c-0.5 pr-2">
              <div className="flex flex-grow dark:bg-[#182644] border-[#180a0a07] border-[0.2px] shadow-md rounded-md bg-white lg:w-1/2">
                <LineChart Data={barChartData} />
              </div>
              <div className="flex flex-grow dark:bg-[#182644] border-[#180a0a07] border-[0.2px] cheatcode shadow-md rounded-md bg-white lg:w-1/2">
                <PayersPieChart data={pieData} />
              </div>
            </div>
            <div className="flex mt-5 pr-5 flex-grow dark:bg-[#182644] border-[#180a0a07] border-[0.2px] shadow-md rounded-md h-[28rem] bg-white">
              <div className="w-[95%]">
                <BarChart data={lineChartData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
