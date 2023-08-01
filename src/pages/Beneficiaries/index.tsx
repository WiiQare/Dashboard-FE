import { UserContext } from '@/context/UserContext';
import React, { useEffect, useLayoutEffect, FC, useState } from 'react';
import { fetchData } from '../api/fetchData';
import CardsData from "@/data/tableData/beneficiaries/beneficiariesCards";
import Pagination from "@/components/atom/pagination";
import Content from '@/components/content';
import BeneficiariesColumns, { BeneficiariesColumnGroupingModel } from '@/data/tableData/beneficiaries/beneficiariesColumns';
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

const Beneficiaries = () => {
    const User = React.useContext(UserContext);
    const [userState, setUserState] = useState<UserInterface | null>(User?.user);
    const [userAuth, setUserAuth] = useState<boolean | undefined>(User?.authenticated);
    const [tableData, setTableData] = useState<any>(null);
    const [summary, setSummary] = useState<any>();
    const [numOfItems, setNumOfItems] = useState<number>(0);
    const [cardData, setCardData] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>();

    const [mounted, setMounted] = useState<boolean>(false);

    const take = 10;
    const skip = 0;
    useLayoutEffect(() => {
        setUserAuth(Boolean(sessionStorage.getItem("userAuth")));
        setUserState(JSON.parse(sessionStorage.getItem("userState") || 'null'));
        setMounted(true);
    }, [User?.authenticated, User?.user]);

    useEffect(() => {
        if (!mounted) return;

        const fetchDataAsync = async () => {
            const res = await fetchData("/beneficiaries", userState?.access_token, take, skip);
            const summaryData = await fetchData("/beneficiaries/summary", userState?.access_token);
            setTableData(res);
            setSummary(summaryData);
        };
        if (mounted && userAuth) {
            fetchDataAsync();

        }

    }, [mounted, userAuth, userState?.access_token]);



    useEffect(() => {
        if (summary) {
            setCardData(CardsData(summary))
            setNumOfItems(summary.numberOfRegisteredBeneficiaries)
        }
    }, [summary]);


    const handlePageChange = async (page: number) => {
        if (page >= 1 && page <= Math.ceil(numOfItems / take)) {
            setCurrentPage(page);
            const newSkip = (page - 1) * take;
            const res = await fetchData('/beneficiaries', userState?.access_token, take, newSkip);
            setTableData(res);
        }
    };
    const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newPageSize = parseInt(event.target.value);
        setPageSize(newPageSize);

        fetchData('/beneficiaries', userState?.access_token, newPageSize, 0).then((res) => {
            setTableData(res);
            setCurrentPage(1);
        });
    };

    if (!tableData || !summary) {
        return <Loader />
    }

    return (
        <div>
            <Content columns={BeneficiariesColumns} data={tableData} cardsData={cardData} groups={BeneficiariesColumnGroupingModel} currentPage={'beneficiaries'}>
                <div className="flex items-center justify-end mt-3 mr-2">
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

export default Beneficiaries;
