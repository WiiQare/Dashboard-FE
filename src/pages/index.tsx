import React, { useEffect, useLayoutEffect, useState } from "react";
import LineChart from "@/components/atom/charts/PrimeLineChart";
import { chartData } from "@/data/chartData/chartData";
import MainCards from "@/components/molecules/mainCards";
import PayersColumns from "@/data/tableData/payers/payersColumns";
import BarChart, { ChartData } from "@/components/atom/charts/barChart";
import { UserContext } from "@/context/UserContext";
import Router from "next/router";
import MainPayersTable from "@/components/molecules/mainPayerTable";

import { fetchData } from "./api/fetchData";


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
    const [tableData, setTableData] = useState<[]>([]);
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
            // console.log("userAuth", userAuth)

            Router.replace("/auth/signin");
        }
    }
    useEffect(() => {
        if (!mounted) return; // Return early if the component is not mounted

        const fetchDataAsync = async () => {
            const tableRes = await fetchData("/payers", userState?.access_token, 10, 0);
            setTableData(tableRes);
            const res = await fetchData("/charts/payers", userState?.access_token, 5, 0);
            setbarChartData(res)
            const line = await fetchData("/charts/beneficiaries", userState?.access_token, 10, 0);
            setlineChartData(line)
            // console.log(tableData)
        };
        if (mounted && userAuth) {
            fetchDataAsync();
        }



    }, [mounted]); // Remove other dependencies to fetch data only once when mounted


    if (!barChartData) {
        return null; //loading
    }

    return (
        <div className="transition-1 overflow-y-auto p-4 h-full w-full sm:px-4">
            <div className="grid grid-cols-1 gap-4 mb-4">
                <div className="w-full overflow-y-auto">
                    <MainCards />
                    <div className="p-4">
                        <div className="flex flex-1  transition-c-0.5 pr-2 !h-[22.4rem] w-full">
                            <div className="flex flex-grow dark:bg-[#182644] border-[#180a0a07] border-[0.2px] shadow-md  mr-5 rounded-md  bg-white   h-[23rem]">
                                <LineChart Data={barChartData}></LineChart>
                            </div>
                            <div className=" w-1/2  flex flex-grow dark:bg-[#182644] border-[#180a0a07] border-[0.2px] shadow-md  mr-5 rounded-md  bg-white  h-[23rem]">
                                <MainPayersTable result={tableData} />
                            </div>
                        </div>

                        <div className="flex mt-5 pr-5 flex-grow dark:bg-[#182644]  w-[50%] border-[#180a0a07] border-[0.2px] shadow-md  mr-5 rounded-md  bg-white   h-[30rem]">
                            <div className=" w-[92%]">
                                <BarChart data={lineChartData} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}