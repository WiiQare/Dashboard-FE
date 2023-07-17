import React, { useEffect, useState } from "react";
import LineChart from "@/components/atom/charts/PrimeLineChart";
import MainCards, { DataProps } from "@/components/molecules/mainCards";
import BarChart, { ChartData } from "@/components/atom/charts/barChart";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { fetchData } from "./api/fetchData";
import PayersPieChart from "@/components/atom/charts/pieChart";

interface UserInterface {
    type: string;
    userId: string;
    phoneNumber: string;
    names: string;
    email: string;
    access_token: string;
}

export default function Home() {
    const [barChartData, setBarChartData] = useState<ChartData[]>([]);
    const [lineChartData, setLineChartData] = useState<[]>([]);
    const [cardsData, setCardsData] = useState<DataProps>({});
    const [pieData, setPieData] = useState<any>({});
    const [userInfo, setUserInfo] = useState<any>({})
    const [mounted, setMounted] = useState<boolean>(false)
    const router = useRouter()

    const { data, status } = useSession()

    useEffect(() => {
        setMounted(true);
        setUserInfo(data)
    }, [status, data]);

    useEffect(() => {
        const fetchDataAsync = async () => {
            const pieRes = await fetchData(
                "/payers/summary",
                userInfo?.access_token
            );
            setPieData(pieRes);
            console.log("pieData", pieData)
            const res = await fetchData(
                "/charts/payers",
                userInfo?.access_token,
                5,
                0
            );
            setBarChartData(res);
            const line = await fetchData(
                "/charts/beneficiaries",
                userInfo?.access_token,
                20,
                0
            );
            setLineChartData(line);
            const cards = await fetchData(
                "/vouchers/summary",
                userInfo?.access_token
            );
            setCardsData(cards);
            // console.log(tableData)


            console.log("     setCardsData(cards);")
        };
        if (userInfo?.access_token) {
            console.log("userInfo?.access_token")
            fetchDataAsync()
        }
    }, [userInfo?.access_token]) //Don't change it
    if (mounted) {
        if (status === 'loading') {
            console.log("Loading.....");

        }
        if (status === 'unauthenticated') {
            //not unauthenticated
            console.log("unauthenticated")
            //router.replace('/auth/signIn')
        }

    }

    if (status === 'authenticated') {

        return (
            <div className="transition-1 overflow-y-auto p-4 h-full w-full sm:px-4">
                <div className="grid grid-cols-1 gap-4 mb-4">
                    <div className="w-full">
                        <MainCards data={cardsData} />
                        <div className="p-4">
                            <div className="flex flex-col h-[23rem] lg:flex-row gap-4 transition-c-0.5 pr-2">
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

    return null;
}
