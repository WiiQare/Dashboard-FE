import { UserContext } from '@/context/UserContext';
import Router from 'next/router';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { fetchData } from '../api/fetchData';
import CardsData from "@/data/pagesData/vouchers/vouchersCards";
import Pagination from "@/components/atom/pagination";
import Content from '@/components/content';
import VouchersColumns from '@/data/pagesData/vouchers/vouchersColumns';
import PageSkeleton from '@/components/molecules/pageSkeleton';
interface UserInterface {
    type: string;
    userId: string;
    phoneNumber: string;
    names: string;
    email: string;
    access_token: string;
}

let newSkip: number = 0;

const Vouchers = () => {
    const User = React.useContext(UserContext);
    const [userState, setUserState] = useState<UserInterface | null>(User?.user);
    const [userAuth, setUserAuth] = useState<boolean | undefined>(User?.authenticated);
    const [tableData, setTableData] = useState<any>(null);
    const [summary, setSummary] = useState<any>();
    const [numOfItems, setNumOfItems] = useState<number>(0); // Set initial value to 0
    const [cardData, setCardData] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>();

    const [mounted, setMounted] = useState<boolean>(false);

    const take = 10; // Default number of items to take
    const skip = 0; // Default amount to skip

    useLayoutEffect(() => {
        setUserAuth(Boolean(sessionStorage.getItem("userAuth")));
        setUserState(JSON.parse(sessionStorage.getItem("userState") || 'null'));
        setMounted(true);
    }, [User?.authenticated, User?.user]);


    useEffect(() => {
        if (!mounted) return; // Return early if the component is not mounted

        const fetchDataAsync = async () => {
            const res = await fetchData("/vouchers", userState?.access_token, take, skip);
            const summaryData = await fetchData("/vouchers/summary", userState?.access_token);
            setTableData(res);
            setSummary(summaryData);

        };
        if (mounted && userAuth) {
            fetchDataAsync();
        }

    }, [mounted, userAuth, userState?.access_token]); // Remove other dependencies to fetch data only once when mounted


    useEffect(() => {
        if (summary) {
            setCardData(CardsData(summary))
            setNumOfItems(summary.vouchersInMaxTime.numberOfVouchers)

        }
    }, [numOfItems, summary]);


    const handlePageChange = async (page: number) => {
        if (page >= 1 && page <= Math.ceil(numOfItems / take)) {
            setCurrentPage(page);
            const newSkip = (page - 1) * take;
            const res = await fetchData('/vouchers', userState?.access_token, take, newSkip);
            setTableData(res);
        }
    };

    const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newPageSize = parseInt(event.target.value);
        setPageSize(newPageSize);

        fetchData('/vouchers', userState?.access_token, newPageSize, 0).then((res) => {
            setTableData(res);
            setCurrentPage(1);
        });
    };


    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        if (tableData && summary) {
            setTimeout(() => {
                setShowLoader(false);
            }, 25);
        }
    }, [summary, tableData]);
    console.log(showLoader)
    if (showLoader) {
        return <PageSkeleton number={9} row={10} />;
    }

    return (
        <div >
            <Content columns={VouchersColumns} data={tableData} cardsData={cardData} groups={[]} currentPage={"vouchers"}>
                <div className="flex items-center justify-end mt-3 mr-2">
                    <div>
                        <div className="flex items-center mt-3 mr-2">
                            <div className="mr-4">
                                <label htmlFor="pageSize">Items per Page:</label>
                                <select
                                    id="pageSize"
                                    className="ml-2 w-12 p-1 border border-gray-300 dark:border-gray-700 dark:text-slate-200 bg-white dark:bg-gray-800 rounded focus:border-blue-300"
                                    value={pageSize}
                                    onChange={handlePageSizeChange}
                                >
                                    <option value={10}>10</option>
                                    <option value={20}>20</option>
                                    <option value={30}>30</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={Math.ceil(numOfItems / take)}
                        onPageChange={handlePageChange}
                    />
                </div>
            </Content>

        </div>
    );
};

export default Vouchers;
