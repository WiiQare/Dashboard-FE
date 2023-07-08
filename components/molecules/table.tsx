import React, { useEffect, useState } from 'react';
import TableItems from '../atom/tableItem';
import { useSelector } from 'react-redux';
import { fetchData } from '../../pages/api/fetchData';
import Pagination from '../atom/pagination';


interface TableProps {
    propsColumns: any[];
    data: any[]
    propsGroups: any[]
}

const Table = ({ propsColumns, data, propsGroups }: TableProps) => {
    const searchValue = useSelector((state: any) => state.search.searchValue);

    const [currentPage, setCurrentPage] = useState<number>(0);





    const columns = React.useMemo(
        () => propsColumns, []
    );

    // const filteredData = data.filter(
    //     item =>
    //         item.payerName.toLowerCase().includes(searchValue.toLowerCase()) ||
    //         item.payerCountry.toLowerCase().includes(searchValue.toLowerCase()) ||
    //         item.payerId.toLowerCase().includes(searchValue.toLowerCase()) ||
    //         item.registeredDate.toLowerCase().includes(searchValue.toLowerCase()) ||
    //         item.redeemedVouchers.toString().includes(searchValue.toLowerCase()) ||
    //         item.unclaimedVouchers.toString().includes(searchValue.toLowerCase()) ||
    //         item.beneficiaries.toString().includes(searchValue.toLowerCase())
    // );


    const pageSize = 10;
    const totalPages = Math.ceil(data.length / pageSize);

    const paginatedData = data.slice(
        currentPage * pageSize,
        (currentPage + 1) * pageSize
    );

    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <>
            <TableItems data={paginatedData} columns={columns} groups={propsGroups} />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
            />
        </>
    );
};


export default Table;
