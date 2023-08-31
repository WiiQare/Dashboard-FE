import React, { useEffect, useLayoutEffect, useState } from 'react';
import LineChart from '@/components/atom/charts/PrimeLineChart';
import BarChart, { ChartData } from '@/components/atom/charts/barChart';
import { UserContext } from '@/context/UserContext';

import { fetchData } from './api/fetchData';
import PayersPieChart from '@/components/atom/charts/pieChart';
import VouchersCards from '@/data/pagesData/main/vouchersCards';
import PayersCards from '@/data/pagesData/main/payersCards';
import BeneficiariesCards from '@/data/pagesData/main/beneficiariesCards';
import ProvidersCards from '@/data/pagesData/main/providerCards';
import Cards from '@/components/molecules/cards';
import CardSkeleton from '@/components/atom/skeleton/cardSkeleton';

interface UserInterface {
  type: string;
  userId: string;
  phoneNumber: string;
  names: string;
  email: string;
  access_token: string;
}

export default function Home() {
  const User = React.useContext(UserContext);
  const [barChartData, setBarChartData] = useState<ChartData[]>([]);
  const [lineChartData, setLineChartData] = useState<[]>([]);
  const [combinedCardData, setCombinedCardData] = useState<any[]>([]);
  const [pieData, setPieData] = useState<any>({});
  const [userState, setUserState] = useState<UserInterface | any>(User?.user);
  const [userAuth, setUserAuth] = useState<boolean | undefined>(
    User?.authenticated,
  );
  const [mounted, setMounted] = useState<boolean>(false);

  useLayoutEffect(() => {
    setUserAuth(Boolean(sessionStorage.getItem('userAuth')));
    setUserState(JSON.parse(sessionStorage.getItem('userState') || 'null'));
    setMounted(true);
  }, [User?.authenticated, User?.user]);

  useEffect(() => {
    if (!mounted) return;

    const fetchDataAsync = async () => {
      const pieRes = await fetchData(
        '/payers/summary',
        userState?.access_token,
      );
      setPieData(pieRes);
      const vouchers = await fetchData(
        '/vouchers/summary',
        userState?.access_token,
      );
      const payers = await fetchData(
        '/payers/summary',
        userState?.access_token,
      );
      const providers = await fetchData(
        '/providers/summary',
        userState?.access_token,
      );
      const beneficiaries = await fetchData(
        '/beneficiaries/summary',
        userState?.access_token,
      );
      const res = await fetchData(
        '/charts/payers',
        userState?.access_token,
        5,
        0,
      );
      const line = await fetchData(
        '/charts/beneficiaries',
        userState?.access_token,
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
    };

    if (mounted && userAuth) {
      fetchDataAsync();
    }
  }, [mounted, userAuth, userState?.access_token]);

  console.log(combinedCardData.length);
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
              <div className="flex flex-grow dark:bg-[#182644] border-[#180a0a07] border-[0.2px] shadow-md rounded-md bg-white lg:w-1/2">
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
