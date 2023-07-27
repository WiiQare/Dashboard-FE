import { UserContext } from '@/context/UserContext';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { fetchData } from '../api/fetchData';
import CardsData from "@/data/tableData/providers/providerCards";
import Pagination from '@/components/atom/pagination';
import Content from '@/components/content';
import ProviderColumns, { ProviderColumnGroupingModel } from '@/data/tableData/providers/providerColumns';
import Loader from '@/components/atom/loader';

interface UserInterface {
    type: string;
    userId: string;
    phoneNumber: string;
    names: string;
    email: string;
    access_token: string;
}

let newSkip: number = 0;

const Providers = () => {
    const User = React.useContext(UserContext);
    const [userState, setUserState] = useState<UserInterface | null>(User?.user);
    const [userAuth, setUserAuth] = useState<boolean | undefined>(User?.authenticated);
    const [tableData, setTableData] = useState<any[]>();
    const [summary, setSummary] = useState<any>();
    const [numOfItems, setNumOfItems] = useState<number>(0); // Set initial value to 0
    const [cardData, setCardData] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>();

    const [mounted, setMounted] = useState<boolean>(false);

    let take = 10;
    const skip = 0;

    useLayoutEffect(() => {
        setUserAuth(Boolean(sessionStorage.getItem("userAuth")));
        setUserState(JSON.parse(sessionStorage.getItem("userState") || 'null'));
        setMounted(true);
    }, [User?.authenticated, User?.user]);

    useEffect(() => {
        if (!mounted) return;

        const fetchDataAsync = async () => {
            const res = await fetchData("/providers", userState?.access_token, take, skip);
            const summaryData = await fetchData("/providers/summary", userState?.access_token);
            setTableData(res);
            setSummary(summaryData);

        };
        if (mounted && userAuth) {
            fetchDataAsync()
        }

    }, [mounted, take, userAuth, userState?.access_token]);



    useEffect(() => {
        if (summary) {
            setCardData(CardsData(summary))
            setNumOfItems(summary.numberOfRegisteredProviders)

        }
    }, [numOfItems, summary]);


    const handlePageChange = async (page: number) => {
        if (page >= 1 && page <= Math.ceil(numOfItems / take)) {
            setCurrentPage(page);
            const newSkip = (page - 1) * take;
            const res = await fetchData('/providers', userState?.access_token, take, newSkip);
            setTableData(res);
        }
    };

    const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newPageSize = parseInt(event.target.value);
        setPageSize(newPageSize);

        fetchData('/providers', userState?.access_token, newPageSize, 0).then((res) => {
            setTableData(res);
            setCurrentPage(1);
        });
    };

    if (!tableData || !summary) {
        return <Loader />
    }

    return (
        <div>
            <Content columns={ProviderColumns} data={tableData} cardsData={cardData} groups={ProviderColumnGroupingModel}>
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

        </div>
    );
};

export default Providers;
