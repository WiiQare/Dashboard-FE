import { GridValueGetterParams } from "@mui/x-data-grid";

const PayersColumns: any[] = [
    {
        field: 'id',
        headerName: 'ID',
        minWidth: 90,
        flex: 1,


    },
    {
        field: 'name',
        headerName: 'Name',
        minWidth: 250,
        flex: 1,
        enableTooltip: true

    },
    {
        field: 'country',
        headerName: 'Country',
        minWidth: 150,
        flex: 1,
    },
    {
        field: 'currency',
        headerName: 'Currency',
        minWidth: 150,
        flex: 1,
    },
    {
        field: 'registrationDate',
        headerName: 'Registration Date',
        minWidth: 150,
        flex: 1,
    },
    {
        field: 'lastActivityOn',
        headerName: 'Last Activity On',
        minWidth: 150,
        flex: 1,
    },
    {
        field: 'uniqueBeneficiaryCount',
        headerName: 'Unique Beneficiary Count',
        minWidth: 150,
        flex: 1,
        type: "number",
        headerAlign: 'center',
        align: 'center'
    },
    {
        field: 'purchasedVouchers.numberOfVouchers',
        headerName: 'Quantity',

        valueGetter: (params: GridValueGetterParams) =>
            params.row.purchasedVouchers.numberOfVouchers,
    },
    {
        field: 'purchasedVouchers.value',
        headerName: 'EUR',

        valueGetter: (params: GridValueGetterParams) =>
            params.row.purchasedVouchers.value,
    },
    {
        field: 'pendingVouchers.numberOfVouchers',
        headerName: 'Quantity',

        valueGetter: (params: GridValueGetterParams) =>
            params.row.pendingVouchers.numberOfVouchers,
    },
    {
        field: 'pendingVouchers.value',
        headerName: 'EUR',

        valueGetter: (params: GridValueGetterParams) =>
            params.row.pendingVouchers.value,
    },
    {
        field: 'unclaimedVouchers.numberOfVouchers',
        headerName: 'Quantity',

        valueGetter: (params: GridValueGetterParams) =>
            params.row.unclaimedVouchers.numberOfVouchers,
    },
    {
        field: 'unclaimedVouchers.value',
        headerName: 'EUR',

        valueGetter: (params: GridValueGetterParams) =>
            params.row.unclaimedVouchers.value,
    },
    {
        field: 'redeemedVouchers.numberOfVouchers',
        headerName: 'Quantity',

        valueGetter: (params: GridValueGetterParams) =>
            params.row.redeemedVouchers.numberOfVouchers,
    },
    {
        field: 'redeemedVouchers.value',
        headerName: 'EUR',

        valueGetter: (params: GridValueGetterParams) =>
            params.row.redeemedVouchers.value,
    },
    {
        field: 'vouchersNotSent.numberOfVouchers',
        headerName: 'Quantity',

        valueGetter: (params: GridValueGetterParams) =>
            params.row.vouchersNotSent.numberOfVouchers,
    },
    {
        field: 'vouchersNotSent.value',
        headerName: 'EUR',

        valueGetter: (params: GridValueGetterParams) =>
            params.row.vouchersNotSent.value,
    }
]

export const payersColumnGroupingModel: any = [


    {
        groupId: 'purchasedVouchers',
        headerName: 'Purchased Vouchers',
        description: '',
        children: [{ field: 'purchasedVouchers.numberOfVouchers' }, { field: 'purchasedVouchers.value' }],
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
    {
        groupId: 'vouchersNotSent',
        headerName: 'Vouchers Not Sent',
        description: '',
        children: [{ field: 'vouchersNotSent.numberOfVouchers' }, { field: 'vouchersNotSent.value' }],
    },
];
export default PayersColumns;


