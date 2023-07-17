import React, { useEffect, useState } from 'react';
import { fetchData } from '../api/fetchData';
import CardsData from "@/data/tableData/payments/paymentsCards";
import Pagination from "@/components/atom/pagination";
import Content from '@/components/content';
import payersColumns from '@/data/tableData/payments/payers/payersColumns';
import { useSession } from 'next-auth/react';

let newSkip: number = 0;

const Payers = () => {
    const [tableData, setTableData] = useState<any>(null);
    const [summary, setSummary] = useState<any>();
    const [numOfItems, setNumOfItems] = useState<number>(0);
    const [cardData, setCardData] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>();
    const [userInfo, setUserInfo] = useState<any>({});
    const [mounted, setMounted] = useState<boolean>(false);

    const { data, status } = useSession();

    useEffect(() => {
        setMounted(true);
        setUserInfo(data);
    }, [status, data]);

    const take = 10;

    useEffect(() => {
        if (!mounted || !userInfo?.access_token) return;

        const fetchDataAsync = async () => {
            const res = await fetchData('/payments/payers', userInfo.access_token, take, 0);
            const summaryData = await fetchData('/payments/summary', userInfo.access_token);
            setTableData(res);
            setSummary(summaryData);
        };

        fetchDataAsync();
    }, [mounted, userInfo?.access_token]);

    useEffect(() => {
        if (summary) {
            setCardData(CardsData(summary));
            setNumOfItems(summary.numberOfProviderPayments)
        }
    }, [summary]);

    const handlePageChange = async (page: number) => {
        if (page >= 1 && page <= Math.ceil(numOfItems / take)) {
            setCurrentPage(page);
            const newSkip = (page - 1) * take;
            const res = await fetchData('/payments/payers', userInfo?.access_token, take, newSkip);
            setTableData(res);
        }
    };

    const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newPageSize = parseInt(event.target.value);
        setPageSize(newPageSize);

        fetchData('/payments/payers', userInfo?.access_token, newPageSize, 0).then((res) => {
            setTableData(res);
            setCurrentPage(1);
        });
    };

    if (!tableData || !summary) {
        return null; // Render nothing until data and summary are available
    }

    return (
        <div>
            <Content columns={payersColumns} data={tableData} cardsData={cardData} groups={[]}>
                <div className="flex">
                    <div>
                        <div className="flex items-center mt-3 mr-2">
                            <div className="mr-4">
                                <label htmlFor="pageSize">Items per Page:</label>
                                <select
                                    id="pageSize"
                                    className="ml-2 p-1 border border-gray-300 rounded"
                                    value={pageSize}
                                    onChange={handlePageSizeChange}
                                >
                                    <option value={10}>10</option>
                                    <option value={20}>20</option>
                                    <option value={30}>30</option>
                                    {/* Add more options as needed */}
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
            <h1 className="bg-red-500 w-28"> </h1>
        </div>
    );
};

export default Payers;
