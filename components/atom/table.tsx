import React, { useEffect, useState } from 'react';
import TableItems from './tableItem';
import { useSelector } from 'react-redux';
import { fetchData } from '../../pages/api/payers';


interface TableProps { }

const Table: React.FC<TableProps> = () => {
    const searchValue = useSelector((state: any) => state.search.searchValue);
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const fetchDataFromAPI = async () => {
            try {
                const newData = await fetchData();
                setData(newData);
            } catch (error) {

            }
        };

        fetchDataFromAPI();
    }, []);
    const columns = React.useMemo(
        () => [
            { Header: 'ID', accessor: 'payerId', id: 'payerId' },
            { Header: 'Name', accessor: 'payerName' },
            { Header: 'Country', accessor: 'payerCountry' },
            { Header: 'Registration Date', accessor: 'registeredDate' },
            { Header: 'Purchased Vouchers', accessor: 'purchasedVouchers' },
            { Header: 'Unique Beneficiaries Vouchers', accessor: 'beneficiaries' },
            { Header: 'Pending Vouchers', accessor: 'pendingVouchers' },
            { Header: 'Unclaimed Vouchers', accessor: 'unclaimedVouchers' },
            { Header: 'Redeemed Vouchers', accessor: 'redeemedVouchers' },
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

    return <TableItems data={filteredData} columns={columns} />;
};

export default Table;
