import React, { useEffect, useState } from 'react';
import TableItems from '../atom/tableItem';
import { useSelector } from 'react-redux';
import { fetchData } from '../../pages/api/fetchData';
import Pagination from '../atom/pagination';

interface TableProps {
    propsColumns: any[];
    data: any[];
    propsGroups: any[];
}

const Table: React.FC<TableProps> = ({ propsColumns, data, propsGroups }) => {
    const searchValue = useSelector((state: any) => state.search.searchValue);

    const [currentPage, setCurrentPage] = useState<number>(0);
    const [pageSize, setPageSize] = useState<number>(10);

    const columns = React.useMemo(() => propsColumns, []);

    const filterData = (data: any[], searchValue: string) => {
        return data.filter((item) => {
            const propertiesToSearch = [
                'payerName',
                'payerCountry',
                'payerId',
                'registeredDate',
                'redeemedVouchers',
                'unclaimedVouchers',
                'beneficiaries',
            ];

            return propertiesToSearch.some((property) => {
                const value = item[property];

                if (typeof value === 'string') {
                    return value.toLowerCase().includes(searchValue.toLowerCase());
                }

                if (typeof value === 'number') {
                    return value.toString().includes(searchValue.toLowerCase());
                }

                return false;
            });
        });
    };

    const totalPages = Math.ceil(data.length / pageSize);

    const paginatedData = data.slice(
        currentPage * pageSize,
        (currentPage + 1) * pageSize
    );

    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newPageSize = parseInt(event.target.value);
        setPageSize(newPageSize);
        setCurrentPage(0);
    };


    return (
        <>
            <TableItems data={paginatedData} columns={columns} groups={propsGroups} />

            <div className='flex dire justify-end '>
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
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={onPageChange}
                />
            </div>
        </>
    );
};

export default Table;
