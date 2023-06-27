import React from 'react';
import TableItems from './tableItem';
import payersData from '../../payers.json';
import { useSelector } from 'react-redux';

const Table: React.FC = () => {
    const searchValue = useSelector((state: any) => state.search.searchValue);
    const data = payersData.record;

    const columns = React.useMemo(
        () => [
            { Header: 'ID', accessor: 'id' },
            { Header: 'Name', accessor: 'name' },
            { Header: 'Country', accessor: 'country' },
            { Header: 'Registration Date', accessor: 'registration_date' },
            { Header: 'Purchased Vouchers', accessor: 'purchased_vouchers' },
            { Header: 'Beneficiaries Vouchers', accessor: 'beneficiaries_vouchers' },
            { Header: 'Unspent Vouchers', accessor: 'unspent_vouchers' },
            { Header: 'Open Vouchers', accessor: 'open_vouchers' },
            { Header: 'Redeemed Vouchers', accessor: 'redeemed_vouchers' },
        ],
        []
    );

    const filteredData = data.filter(
        item =>
            item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.country.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.id.toString().includes(searchValue.toLowerCase()) ||
            item.registration_date.toString().includes(searchValue.toLowerCase()) ||
            item.open_vouchers.toString().includes(searchValue.toLowerCase()) ||
            item.unspent_vouchers.toString().includes(searchValue.toLowerCase()) ||
            item.beneficiaries_vouchers.toString().includes(searchValue.toLowerCase())
    );

    return <TableItems data={filteredData} columns={columns} />;
};

export default Table;
