import { BeneficiariesInterface } from '../../../pages/Beneficiaries';
import { GridValueGetterParams } from '@mui/x-data-grid';


const BeneficiariesColumns: any[] = [
    { field: 'id', headerName: 'ID', Minwidth: 90 },
    { field: 'name', headerName: 'Name', minWidth: 250 },
    { field: 'country', headerName: 'Country', width: 120 },
    { field: 'registrationDate', headerName: 'Registration Date', width: 180 },
    { field: 'lastActivityOn', headerName: 'Last Activity', width: 180 },
    {
        field: 'totalPayment.numberOfPayments',
        headerName: 'Total Payments',

        valueGetter: (params: GridValueGetterParams) =>
            params.row.totalPayment.numberOfPayments,
    },
    {
        field: 'totalPayment.value',
        headerName: 'Value',

        valueGetter: (params: GridValueGetterParams) =>
            params.row.totalPayment.value,
    },
    {
        field: 'activeVouchers.numberOfVouchers',
        headerName: 'Number',

        valueGetter: (params: GridValueGetterParams) =>
            params.row.activeVouchers.numberOfVouchers,
    },
    {
        field: 'activeVouchers.value',
        headerName: 'value',

        valueGetter: (params: GridValueGetterParams) =>
            params.row.activeVouchers.value,
    },
    {
        field: 'pendingVouchers.numberOfVouchers',
        headerName: 'Number',

        valueGetter: (params: GridValueGetterParams) =>
            params.row.pendingVouchers.numberOfVouchers,
    },
    {
        field: 'pendingVouchers.value',
        headerName: 'value',

        valueGetter: (params: GridValueGetterParams) =>
            params.row.pendingVouchers.value,
    },
    {
        field: 'unclaimedVouchers.numberOfVouchers',
        headerName: 'Number',

        valueGetter: (params: GridValueGetterParams) =>
            params.row.unclaimedVouchers.numberOfVouchers,
    },
    {
        field: 'unclaimedVouchers.value',
        headerName: 'value',

        valueGetter: (params: GridValueGetterParams) =>
            params.row.unclaimedVouchers.value,
    },
    {
        field: 'redeemedVouchers.numberOfVouchers',
        headerName: 'Number',

        valueGetter: (params: GridValueGetterParams) =>
            params.row.redeemedVouchers.numberOfVouchers,
    },
    {
        field: 'redeemedVouchers.value',
        headerName: 'value',

        valueGetter: (params: GridValueGetterParams) =>
            params.row.redeemedVouchers.value,
    },
];
export const BeneficiariesColumnGroupingModel: any = [

    {
        groupId: 'naming',
        headerName: 'Total Payment',
        freeReordering: true,
        children: [{ field: 'totalPayment.numberOfPayments' }, { field: 'totalPayment.value' }],
    },
    {
        groupId: 'activeVouchers',
        headerName: 'Active Vouchers',
        description: '',
        children: [{ field: 'activeVouchers.numberOfVouchers' }, { field: 'activeVouchers.value' }],
    },
    {
        groupId: 'pendingVouchers',
        headerName: 'Pending Vouchers',
        description: '',
        children: [{ field: 'pendingVouchers.numberOfVouchers' }, { field: 'pendingVouchers.value' }],
    },
    {
        groupId: 'unclaimedVouchers',
        headerName: 'Unclaimed Vouchers',
        description: '',
        children: [{ field: 'unclaimedVouchers.numberOfVouchers' }, { field: 'unclaimedVouchers.value' }],
    },
    {
        groupId: 'redeemedVouchers',
        headerName: 'Redeemed Vouchers',
        description: '',
        children: [{ field: 'redeemedVouchers.numberOfVouchers' }, { field: 'redeemedVouchers.value' }],
    },
];


export default BeneficiariesColumns;

