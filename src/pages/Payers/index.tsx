import { UserContext } from '@/context/UserContext';
import Router from 'next/router';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { fetchData } from '../api/fetchData';
import CardsData from "@/data/tableData/payers/payersCards";
import Pagination from "@/components/atom/pagination";
import Content from '@/components/content';
import payersColumns, { payersColumnGroupingModel } from '@/data/tableData/payers/payersColumns';

interface UserInterface {
    type: string;
    userId: string;
    phoneNumber: string;
    names: string;
    email: string;
    access_token: string;
}

let newSkip: number = 0;

const Payers = () => {
    const User = React.useContext(UserContext);
    const [userState, setUserState] = useState<UserInterface | null>(User?.user);
    const [userAuth, setUserAuth] = useState<boolean | undefined>(User?.authenticated);
    const [data, setData] = useState<any>(null);
    const [summary, setSummary] = useState<any>();
    const [numOfItems, setNumOfItems] = useState<number>(0); // Set initial value to 0
    const [cardData, setCardData] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>();

    const [mounted, setMounted] = useState<boolean>(false);

    const take = 10;
    const skip = 0;
    useLayoutEffect(() => {
        setUserAuth(Boolean(localStorage.getItem("userAuth")));
        setUserState(JSON.parse(localStorage.getItem("userState") || 'null'));
        setMounted(true);
    }, [User?.authenticated, User?.user]);

    useEffect(() => {
        if (!mounted) return; // Return early if the component is not mounted

        const fetchDataAsync = async () => {
            const res = await fetchData("/payers", userState?.access_token, take, skip);
            const summaryData = await fetchData("/payers/summary", userState?.access_token);
            setData(res);
            setSummary(summaryData);
            // console.log("res", res);
        };
        if (mounted && userAuth) {
            fetchDataAsync();
        }

    }, [mounted, userAuth, userState?.access_token]);
    if (mounted) {
        if (userAuth === false) {
            // console.log("userAuth", userAuth)

            Router.replace("/auth/signin");
        }
    }

    useEffect(() => {
        if (summary) {
            setCardData(CardsData(summary))
            setNumOfItems(summary.numberOfRegisteredPayers)
            // console.log('CardsData:', CardsData(summary));
            // console.log('numOfItems:', numOfItems);
        }
    }, [summary]);

    // console.log('Summary out:', summary);
    // console.log('numOfItems out:', numOfItems);
    // console.log('take:', take);
    const handlePageChange = async (page: number) => {
        let newPage = page;
        if (page === currentPage - 1) {
            newPage = currentPage - 2;
        }
        newSkip = newPage * take;
        const res = await fetchData("/payers", userState?.access_token, take, newSkip);
        setData(res);
        setCurrentPage(newPage);
    };

    const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newPageSize = parseInt(event.target.value);
        setPageSize(newPageSize);

        newSkip = 0;
        fetchData("/payers", userState?.access_token, newPageSize, newSkip).then((res) => {
            setData(res);
        });
    };

    if (!data || !summary) {
        return null; // Render nothing until data and summary are available
    }
    // console.log('Summary out done:', { ...data });
    // console.log('numOfItems out done:', numOfItems);
    // console.log('take done:', take);
    return (
        <div>
            <Content columns={payersColumns} data={data} cardsData={cardData} groups={payersColumnGroupingModel}>
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
