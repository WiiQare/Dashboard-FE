import React, { useEffect, useLayoutEffect, useState } from "react";
import LineChart from "@/components/atom/charts/PrimeLineChart";
import MainCards, { DataProps } from "@/components/molecules/mainCards";
import BarChart, { ChartData } from "@/components/atom/charts/barChart";
import { UserContext } from "@/context/UserContext";
import Router from "next/router";


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
    const User = React.useContext(UserContext);
    const [barChartData, setbarChartData] = useState<ChartData[]>([]);
    const [lineChartData, setlineChartData] = useState<[]>([]);
    const [cardsData, setCardsData] = useState<DataProps>({});
    const [pieData, setPieData] = useState<any>({});
    const [userState, setUserState] = useState<UserInterface | any>(User?.user);
    const [userAuth, setUserAuth] = useState<boolean | undefined>(
        User?.authenticated
    );
    const [mounted, setMounted] = useState<boolean>(false);


    useLayoutEffect(() => {
        setUserAuth(Boolean(localStorage.getItem("userAuth")));
        setUserState(JSON.parse(localStorage.getItem("userState") || 'null'));
        setMounted(true);
    }, [User?.authenticated, User?.user]);
    // console.log("mounted", mounted)
    if (mounted) {
        if (userAuth === false) {
            Router.replace("/auth/signin");
        }
    }
    useEffect(() => {
        if (!mounted) return; // Return early if the component is not mounted

        const fetchDataAsync = async () => {
            const pieRes = await fetchData("/payers/summary", userState?.access_token);
            setPieData(pieRes);
            const res = await fetchData("/charts/payers", userState?.access_token, 5, 0);
            setbarChartData(res)
            const line = await fetchData("/charts/beneficiaries", userState?.access_token, 20, 0);
            setlineChartData(line)
            const cards = await fetchData("/vouchers/summary", userState?.access_token);
            setCardsData(cards)
            // console.log(tableData)
        };
        if (mounted && userAuth) {
            fetchDataAsync();
        }



    }, [mounted, userAuth, userState?.access_token]); // Remove other dependencies to fetch data only once when mounted


    if (!barChartData) {
        return null;
    }

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