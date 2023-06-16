
import React from "react";

import { useState, useEffect } from "react";
// import { db } from "../lib/db";

interface TableRow {
    id: number;
    name: string;
    registrationDate: string;
    beneficiaries: number;
    lastPayment: string;
    voucher: string;
}

function Tables() {
    const [tableData, setTableData] = useState<TableRow[]>([]);


    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data = await db.getTableData();
    //         setTableData(data);
    //     };

    //     fetchData();
    // }, []);

    // return (
    //     <table>
    //         <thead>
    //             <tr>
    //                 <th>ID</th>
    //                 <th>Name</th>
    //                 <th>Registration Date</th>
    //                 <th>Beneficiaries</th>
    //                 <th>Last Payment</th>
    //                 <th>Voucher</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             {tableData.map((row) => (
    //                 <div className="flex flex-col">
    //                     <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    //                         <div className="inline-block min-w-full py-3 sm:px-6 lg:px-8">
    //                             <div className="overflow-hidden">
    //                                 <table
    //                                     className=" table min-w-full border text-center text-sm font-light">
    //                                     <thead className="border-b font-normal">
    //                                         <tr>
    //                                             <th scope="col" className=" title-box py-0 w-0">
    //                                                 #
    //                                             </th>
    //                                             <th scope="col" className="py-3 ">
    //                                                 <div className="left-table ml-[24px] title-box">NAME
    //                                                 </div>
    //                                             </th>
    //                                             <th scope="col" className="py-3 ml-1 ">
    //                                                 <div className="left-table ml-[24px] title-box">REGISTRATION DATE</div>
    //                                             </th>
    //                                             <th scope="col" className="py-3 ml-1 ">
    //                                                 <div className="right-table mr-[24px] title-box ">BENEFICIARIES</div>
    //                                             </th>
    //                                             <th scope="col" className="ml-1 py-3 title-box">
    //                                                 <div className="left-table ml-[24px] title-box">LAST PAYMENT</div>
    //                                             </th>
    //                                             <th scope="col" className="ml-1 py-3 title-box">
    //                                                 <div className="right-table mr-[24px]"> VOUCHER [VALUE]</div>
    //                                             </th>
    //                                         </tr>

    //                                     </thead>
    //                                     <tbody>
    //                                         <tr className="">
    //                                             <td className="whitespace-nowrap px-6 py-3 font-normal">
    //                                                 <div className="text-black-2 font-normal">{row.id}</div>
    //                                             </td>
    //                                             <td className="whitespace-nowrap px-6 py-3">
    //                                                 <div className="left-table text-black-2 font-normal">{row.name}</div>
    //                                             </td>
    //                                             <td className="whitespace-nowrap px-6 py-3">
    //                                                 <div className="left-table text-black-2 font-normal">{row.registrationDate}</div>
    //                                             </td>
    //                                             <td className="whitespace-nowrap px-6 py-3">
    //                                                 <div className="right-table text-black-2 font-normal">{row.beneficiaries}</div>
    //                                             </td>
    //                                             <td className="whitespace-nowrap px-6 py-3">
    //                                                 <div className="left-table text-black-2 font-normal">{row.lastPayment}</div>
    //                                             </td>
    //                                             <td className="whitespace-nowrap px-6 py-3">
    //                                                 <div className="right-table text-black-2 font-normal">{row.voucher}</div>
    //                                             </td>
    //                                         </tr>
    //                                     </tbody>
    //                                 </table>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             ))}

    //         </tbody>
    //     </table>
    // );
    return (
        <div className=" ">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full text-black dark:text-black  sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table
                            className=" rounded-2xl  transition-c-0.5  bg-white dark:bg-[#1e293b]  text-black  dark:text-white table min-w-full text-center text-sm font-light ">
                            <thead className="font-normal">
                                <tr className="">
                                    <th scope="col" className=" title-box py-0 w-0">
                                        #
                                    </th>
                                    <th scope="col" className="py-3 ">
                                        <div className="left-table ml-[24px] title-box">NAME
                                        </div>
                                    </th>
                                    <th scope="col" className="py-3 ml-1 ">
                                        <div className="left-table ml-[24px] title-box">REGISTRATION DATE</div>
                                    </th>
                                    <th scope="col" className="py-3 ml-1 ">
                                        <div className="right-table mr-[24px] title-box ">BENEFICIARIES</div>
                                    </th>
                                    <th scope="col" className="ml-1 py-3 title-box">
                                        <div className="left-table ml-[24px] title-box">LAST PAYMENT</div>
                                    </th>
                                    <th scope="col" className="ml-1 py-3 title-box">
                                        <div className="right-table mr-[24px]"> VOUCHER [VALUE]</div>
                                    </th>
                                </tr>

                            </thead>
                            <tbody>
                                <tr className="">
                                    <td className="whitespace-nowrap px-6 py-3 font-normal">
                                        <div className="text-black-2 font-normal">1</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="left-table text-black-2 font-normal">KURUNZI ALFTRED MR</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="left-table text-black-2 font-normal"> 19 Aug 2019</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="right-table text-black-2 font-normal">45</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="left-table text-black-2 font-normal"> 29 Sep 2022</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="right-table text-black-2 font-normal">506</div>
                                    </td>
                                </tr>
                                <tr className="">
                                    <td className="whitespace-nowrap px-6 py-3 font-normal">
                                        <div className="text-black-2 font-normal">2</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="left-table text-black-2 font-normal">PORTGAS D ACE MR</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="left-table text-black-2 font-normal">24 Aug 2021</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="right-table text-black-2 font-normal">24</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="left-table text-black-2 font-normal">07 May 2023</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="right-table text-black-2 font-normal">1,205</div>
                                    </td>

                                </tr>
                                <tr className="">
                                    <td className="whitespace-nowrap px-6 py-3 font-normal">
                                        <div className="text-black-2 font-normal">3</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="left-table text-black-2 font-normal ">KENPACHI ZARAKI MR</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="left-table text-black-2 font-normal">29 Sep 2020</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="right-table text-black-2 font-normal">12</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="left-table text-black-2 font-normal">18 Oct 2020</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="right-table text-black-2 font-normal"> 1,582</div>
                                    </td>
                                </tr>
                                <tr className="">
                                    <td className="whitespace-nowrap px-6 py-3 font-normal">
                                        <div className="text-black-2 font-normal">4</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="left-table text-black-2 font-normal">ICHIGO KUROSAKI MR</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="left-table text-black-2 font-normal">15 Jan 2021</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="right-table text-black-2 font-normal">8</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="left-table text-black-2 font-normal">22 Feb 2021</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="right-table text-black-2 font-normal">2,354</div>
                                    </td>
                                </tr>
                                <tr className="">
                                    <td className="whitespace-nowrap px-6 py-3 font-normal">
                                        <div className="text-black-2 font-normal">5</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="left-table text-black-2 font-normal">RUKIA KUCHIKI MR</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="left-table text-black-2 font-normal">02 Mar 2021</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="right-table text-black-2 font-normal">5</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="left-table text-black-2 font-normal">10 Apr 2021</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="right-table text-black-2 font-normal">1,129</div>
                                    </td>
                                </tr>
                                <tr className="">
                                    <td className="whitespace-nowrap px-6 py-3 font-normal">
                                        <div className="text-black-2 font-normal">7</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="left-table text-black-2 font-normal">KATE JONES MR</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="left-table text-black-2 font-normal">15 Nov 2020</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="right-table text-black-2 font-normal">7</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="left-table text-black-2 font-normal">25 Dec 2020</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="right-table text-black-2 font-normal">2,345</div>
                                    </td>
                                </tr>

                                <tr className="">
                                    <td className="whitespace-nowrap px-6 py-3 font-normal">
                                        <div className="text-black-2 font-normal">8</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="left-table text-black-2 font-normal">JASON SMITH MR</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="left-table text-black-2 font-normal">3 Feb 2021</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="right-table text-black-2 font-normal">3</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="left-table text-black-2 font-normal">15 Mar 2021</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="right-table text-black-2 font-normal">1,234</div>
                                    </td>
                                </tr>

                                <tr className="">
                                    <td className="whitespace-nowrap px-6 p-2 font-normal">
                                        <div className="text-black-2 font-normal">9</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 pt-2">
                                        <div className="left-table text-black-2 font-normal">MELISSA RODRIGUEZ MRS</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="left-table text-black-2 font-normal">12 Apr 2021</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="right-table text-black-2 font-normal">5</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="left-table text-black-2 font-normal">30 May 2021</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <div className="right-table text-black-2 font-normal">3,456</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Tables;

