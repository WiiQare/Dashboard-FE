import React, { useEffect } from "react";
import LineChart from "../components/atom/charts/PrimeLineChart";
import { chartData } from "../data/chartData/chartData";
import MainCards from "../components/molecules/mainCards";
import PayersColumns from "../data/tableData/payers/payerColumns";

import { fetchData } from "./api/fetchData";
import { GetStaticProps } from "next";
import BarChart from "../components/atom/charts/barChart";
// import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
// import { GetServerSideProps } from "next";
import Router from "next/router";
import MainPayersTable from "../components/molecules/mainPayerTable";
interface Props {
    session: any;
    result: any[];
}
export default function Home({ session, result }: Props) {
    // const { data, status } = useSession();

    // useEffect(() => {
    //     if (status === "unauthenticated") Router.replace("/auth/signin");
    // }, [status]);

    return (
      <div className="w-full overflow-y-auto">
      <MainCards />
      <div className="p-4">
        <div className="flex flex-1  transition-c-0.5 pr-2 !h-[22.4rem] w-full" >
          <div className="flex flex-grow dark:bg-[#182644] border-[#180a0a07] border-[0.2px] shadow-md  mr-5 rounded-md  bg-white   h-[23rem]">
            <LineChart payersInfo={chartData} ></LineChart>
          </div>
          <div className="flex justify-center items-center">
                <h1 className="text-2xl font-bold text-gray-700">
                    {/* HI: {JSON.stringify(session, null, 2)} */}
                    {/* {JSON.stringify(data, null, 3)} */}
                </h1>
            </div>
          <div className=" w-1/2  flex flex-grow dark:bg-[#182644] border-[#180a0a07] border-[0.2px] shadow-md  mr-5 rounded-md  bg-white  h-[23rem]">
            <MainPayersTable result={[]} />
          </div>
        </div>
        <div className="mt-5 w-[37%]">
          <BarChart />
        </div>
      </div>
    </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetchData("/payers");
  const result = await JSON.parse(JSON.stringify(await res));
  return {
    props: { result },
    revalidate: 30
  }
}
// export const getServerSideProps: GetServerSideProps = async (context: any) => {
//     const session = await JSON.parse(JSON.stringify(getServerSession(context)));
//     console.log("session", session);

//     if (!session) {
//         return {
//             redirect: {
//                 destination: "/auth/signin",
//                 permanent: false,
//             },
//         };
//     }
//     return {
//         props: {
//             user: session,
//         },
//     };
// };
