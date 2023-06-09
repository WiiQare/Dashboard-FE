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
    //                         <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
    //                             <div className="overflow-hidden">
    //                                 <table
    //                                     className=" table mt-[30px] min-w-full border text-center text-sm font-light dark:border-neutral-500">
    //                                     <thead className="border-b font-medium dark:border-neutral-500">
    //                                         <tr>
    //                                             <th scope="col" className=" title-box border-r py-0 w-0 dark:border-neutral-500">
    //                                                 #
    //                                             </th>
    //                                             <th scope="col" className="border-r py-2  dark:border-neutral-500">
    //                                                 <div className="left-table ml-[24px] title-box">NAME
    //                                                 </div>
    //                                             </th>
    //                                             <th scope="col" className="border-r py-2 ml-1  dark:border-neutral-500">
    //                                                 <div className="left-table ml-[24px] title-box">REGISTRATION DATE</div>
    //                                             </th>
    //                                             <th scope="col" className="border-r py-2 ml-1  dark:border-neutral-500">
    //                                                 <div className="right-table mr-[24px] title-box ">BENEFICIARIES</div>
    //                                             </th>
    //                                             <th scope="col" className="border-r ml-1 py-2 title-box dark:border-neutral-500">
    //                                                 <div className="left-table ml-[24px] title-box">LAST PAYMENT</div>
    //                                             </th>
    //                                             <th scope="col" className="border-r ml-1 py-2 title-box dark:border-neutral-500">
    //                                                 <div className="right-table mr-[24px]"> VOUCHER [VALUE]</div>
    //                                             </th>
    //                                         </tr>

    //                                     </thead>
    //                                     <tbody>
    //                                         <tr className="border-b dark:border-neutral-500">
    //                                             <td className="whitespace-nowrap border-r px-6 py-2 font-medium dark:border-neutral-500">
    //                                                 <div className="text-black-2 font-medium">{row.id}</div>
    //                                             </td>
    //                                             <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
    //                                                 <div className="left-table text-black-2 font-medium">{row.name}</div>
    //                                             </td>
    //                                             <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
    //                                                 <div className="left-table text-black-2 font-medium">{row.registrationDate}</div>
    //                                             </td>
    //                                             <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
    //                                                 <div className="right-table text-black-2 font-medium">{row.beneficiaries}</div>
    //                                             </td>
    //                                             <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
    //                                                 <div className="left-table text-black-2 font-medium">{row.lastPayment}</div>
    //                                             </td>
    //                                             <td className="whitespace-nowrap px-6 py-2">
    //                                                 <div className="right-table text-black-2 font-medium">{row.voucher}</div>
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
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table
                            className=" table mt-[30px] min-w-full border text-center text-sm font-light dark:border-neutral-500">
                            <thead className="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" className=" title-box border-r py-0 w-0 dark:border-neutral-500">
                                        #
                                    </th>
                                    <th scope="col" className="border-r py-2  dark:border-neutral-500">
                                        <div className="left-table ml-[24px] title-box">NAME
                                        </div>
                                    </th>
                                    <th scope="col" className="border-r py-2 ml-1  dark:border-neutral-500">
                                        <div className="left-table ml-[24px] title-box">REGISTRATION DATE</div>
                                    </th>
                                    <th scope="col" className="border-r py-2 ml-1  dark:border-neutral-500">
                                        <div className="right-table mr-[24px] title-box ">BENEFICIARIES</div>
                                    </th>
                                    <th scope="col" className="border-r ml-1 py-2 title-box dark:border-neutral-500">
                                        <div className="left-table ml-[24px] title-box">LAST PAYMENT</div>
                                    </th>
                                    <th scope="col" className="border-r ml-1 py-2 title-box dark:border-neutral-500">
                                        <div className="right-table mr-[24px]"> VOUCHER [VALUE]</div>
                                    </th>
                                </tr>

                            </thead>
                            <tbody>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap border-r px-6 py-2 font-medium dark:border-neutral-500">
                                        <div className="text-black-2 font-medium">1</div>
                                    </td>
                                    <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                                        <div className="left-table text-black-2 font-medium">KURUNZI ALFTRED MR</div>
                                    </td>
                                    <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                                        <div className="left-table text-black-2 font-medium"> 19 Aug 2019</div>
                                    </td>
                                    <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                                        <div className="right-table text-black-2 font-medium">45</div>
                                    </td>
                                    <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                                        <div className="left-table text-black-2 font-medium"> 29 Sep 2022</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-2">
                                        <div className="right-table text-black-2 font-medium">506</div>
                                    </td>
                                </tr>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap border-r px-6 py-2 font-medium dark:border-neutral-500">
                                        <div className="text-black-2 font-medium">2</div>
                                    </td>
                                    <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                                        <div className="left-table text-black-2 font-medium">PORTGAS D ACE MR</div>
                                    </td>
                                    <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                                        <div className="left-table text-black-2 font-medium">24 Aug 2021</div>
                                    </td>
                                    <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                                        <div className="right-table text-black-2 font-medium">24</div>
                                    </td>
                                    <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                                        <div className="left-table text-black-2 font-medium">07 May 2023</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-2">
                                        <div className="right-table text-black-2 font-medium">1,205</div>
                                    </td>

                                </tr>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap border-r px-6 py-2 font-medium dark:border-neutral-500">
                                        <div className="text-black-2 font-medium">3</div>
                                    </td>
                                    <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                                        <div className="left-table text-black-2 font-medium ">KENPACHI ZARAKI MR</div>
                                    </td>
                                    <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                                        <div className="left-table text-black-2 font-medium">29 Sep 2020</div>
                                    </td>
                                    <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                                        <div className="right-table text-black-2 font-medium">12</div>
                                    </td>
                                    <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                                        <div className="left-table text-black-2 font-medium">18 Oct 2020</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-2">
                                        <div className="right-table text-black-2 font-medium"> 1,582</div>
                                    </td>
                                </tr>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap border-r px-6 py-2 font-medium dark:border-neutral-500">
                                        <div className="text-black-2 font-medium">4</div>
                                    </td>
                                    <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                                        <div className="left-table text-black-2 font-medium">ICHIGO KUROSAKI MR</div>
                                    </td>
                                    <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                                        <div className="left-table text-black-2 font-medium">15 Jan 2021</div>
                                    </td>
                                    <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                                        <div className="right-table text-black-2 font-medium">8</div>
                                    </td>
                                    <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                                        <div className="left-table text-black-2 font-medium">22 Feb 2021</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-2">
                                        <div className="right-table text-black-2 font-medium">2,354</div>
                                    </td>
                                </tr>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap border-r px-6 py-2 font-medium dark:border-neutral-500">
                                        <div className="text-black-2 font-medium">5</div>
                                    </td>
                                    <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                                        <div className="left-table text-black-2 font-medium">RUKIA KUCHIKI MR</div>
                                    </td>
                                    <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                                        <div className="left-table text-black-2 font-medium">02 Mar 2021</div>
                                    </td>
                                    <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                                        <div className="right-table text-black-2 font-medium">5</div>
                                    </td>
                                    <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                                        <div className="left-table text-black-2 font-medium">10 Apr 2021</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-2">
                                        <div className="right-table text-black-2 font-medium">1,129</div>
                                    </td>
                                </tr>
                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap border-r px-6 py-2 font-medium dark:border-neutral-500">
                                        <div className="text-black-2 font-medium">7</div>
                                    </td>
                                    <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                                        <div className="left-table text-black-2 font-medium">KATE JONES MR</div>
                                    </td>
                                    <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                                        <div className="left-table text-black-2 font-medium">15 Nov 2020</div>
                                    </td>
                                    <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                                        <div className="right-table text-black-2 font-medium">7</div>
                                    </td>
                                    <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                                        <div className="left-table text-black-2 font-medium">25 Dec 2020</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-2">
                                        <div className="right-table text-black-2 font-medium">2,345</div>
                                    </td>
                                </tr>

                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap border-r px-6 py-2 font-medium dark:border-neutral-500">
                                        <div className="text-black-2 font-medium">8</div>
                                    </td>
                                    <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                                        <div className="left-table text-black-2 font-medium">JASON SMITH MR</div>
                                    </td>
                                    <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                                        <div className="left-table text-black-2 font-medium">3 Feb 2021</div>
                                    </td>
                                    <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                                        <div className="right-table text-black-2 font-medium">3</div>
                                    </td>
                                    <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                                        <div className="left-table text-black-2 font-medium">15 Mar 2021</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-2">
                                        <div className="right-table text-black-2 font-medium">1,234</div>
                                    </td>
                                </tr>

                                <tr className="border-b dark:border-neutral-500">
                                    <td className="whitespace-nowrap border-r px-6 py-2 font-medium dark:border-neutral-500">
                                        <div className="text-black-2 font-medium">9</div>
                                    </td>
                                    <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                                        <div className="left-table text-black-2 font-medium">MELISSA RODRIGUEZ MRS</div>
                                    </td>
                                    <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                                        <div className="left-table text-black-2 font-medium">12 Apr 2021</div>
                                    </td>
                                    <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                                        <div className="right-table text-black-2 font-medium">5</div>
                                    </td>
                                    <td className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                                        <div className="left-table text-black-2 font-medium">30 May 2021</div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-2">
                                        <div className="right-table text-black-2 font-medium">3,456</div>
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

