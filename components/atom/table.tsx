import React, { useEffect, useState } from 'react';
import TableItems from './tableItem';
import { useSelector } from 'react-redux';
import { fetchData } from '../../pages/api/payers';
import Pagination from './pagination';



interface TableProps { }

const Table: React.FC<TableProps> = () => {
    const searchValue = useSelector((state: any) => state.search.searchValue);
    const [data, setData] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(0);

    useEffect(() => {
        const fetchDataFromAPI = async () => {
            try {
                const newData = await fetchData();
                setData(newData);
                // Set loading to false once data is fetched
            } catch (error) {
                // Set loading to false in case of error
            }
        };

        fetchDataFromAPI();
    }, []);


    const columns = React.useMemo(
        () => [
            {
                field: 'payerId',
                headerName: 'ID',
                minWidth: 90,
                flex: 1,
                

            },
            {
                field: 'payerName',
                headerName: 'Name',
                minWidth: 250,
                flex: 1,

            },
            {
                field: 'payerCountry',
                headerName: 'Country',
                minWidth: 150,
                flex: 1,
            },
            {
                field: 'registeredDate',
                headerName: 'Registration Date',
                minWidth: 150,
                flex: 1,
            },
            {
                field: 'purchasedVouchers',
                headerName: 'Purchased Vouchers',
                minWidth: 150,
                flex: 1,
            },
            {
                field: 'beneficiaries',
                headerName: 'Unique Beneficiaries Vouchers',
                minWidth: 150,
                flex: 1,
            },
            {
                field: 'pendingVouchers',
                headerName: 'Pending Vouchers',
                minWidth: 150,
                flex: 1,
            },
            {
                field: 'unclaimedVouchers',
                headerName: 'Unclaimed Vouchers',
                minWidth: 150,
                flex: 1,
            },
            {
                field: 'redeemedVouchers',
                headerName: 'Redeemed Vouchers',
                minWidth: 150,
                flex: 1,
            },
        ],
        []
    );

    const filteredData = data.filter(
        item =>
            item.payerName.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.payerCountry.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.payerId.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.registeredDate.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.redeemedVouchers.toString().includes(searchValue.toLowerCase()) ||
            item.unclaimedVouchers.toString().includes(searchValue.toLowerCase()) ||
            item.beneficiaries.toString().includes(searchValue.toLowerCase())
    );


    const pageSize = 10;
    const totalPages = Math.ceil(filteredData.length / pageSize);

    const paginatedData = filteredData.slice(
        currentPage * pageSize,
        (currentPage + 1) * pageSize
    );

    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <>
            <TableItems data={paginatedData} columns={columns} />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
            />
        </>
    );
};

export default Table;