import { UserContext } from '@/context/UserContext';
import Router from 'next/router';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { fetchData } from '../api/fetchData';
import CardsData from "@/data/tableData/payers/payersCards";
import Pagination from "@/components/atom/pagination";
import Content from '@/components/content';
import payersColumns, { payersColumnGroupingModel } from '@/data/tableData/payers/payersColumns';
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

const Payers = () => {
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

    const take = 10;
    const skip = 0;
    useLayoutEffect(() => {
        setUserAuth(Boolean(sessionStorage.getItem("userAuth")));
        setUserState(JSON.parse(sessionStorage.getItem("userState") || 'null'));
        setMounted(true);
    }, [User?.authenticated, User?.user]);

    useEffect(() => {
        if (!mounted) return; // Return early if the component is not mounted

        const fetchDataAsync = async () => {
            const res = await fetchData("/payers", userState?.access_token, take, skip);
            const summaryData = await fetchData("/payers/summary", userState?.access_token);
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
            setNumOfItems(summary.numberOfRegisteredPayers)
        }
    }, [summary]);


    const handlePageChange = async (page: number) => {
        if (page >= 1 && page <= Math.ceil(numOfItems / take)) {
            setCurrentPage(page);
            const newSkip = (page - 1) * take;
            const res = await fetchData('/payers', userState?.access_token, take, newSkip);
            setTableData(res);
        }
    };

    const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newPageSize = parseInt(event.target.value);
        setPageSize(newPageSize);

        fetchData('/payers', userState?.access_token, newPageSize, 0).then((res) => {
            setTableData(res);
            setCurrentPage(1);
        });
    };


    if (!tableData || !summary) {
        return <Loader />
    }

    return (
        <Loader />
    );
};

export default Payers;
