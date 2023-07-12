import { GridValueGetterParams } from '@mui/x-data-grid';

export const CardsData = (data: any) =>  [

    {
        field: 'vouchersInOneWeek.numberOfVouchers',
        headerName: 'Number',

        valueGetter: (params: GridValueGetterParams) =>
            params.row.vouchersInOneWeek.numberOfVouchers,
    },
    {
        field: 'vouchersInOneWeek.value',
        headerName: 'value',

        valueGetter: (params: GridValueGetterParams) =>
            params.row.vouchersInOneWeek.value,
    },
    {
        field: 'vouchersInOneMonth.numberOfVouchers',
        headerName: 'Number',

        valueGetter: (params: GridValueGetterParams) =>
            params.row.vouchersInOneMonth.numberOfVouchers,
    },
    {
        field: 'vouchersInOneMonth.value',
        headerName: 'value',

        valueGetter: (params: GridValueGetterParams) =>
            params.row.vouchersInOneMonth.value,
    },
    {
        field: 'vouchersInThreeMonths.numberOfVouchers',
        headerName: 'Number',

        valueGetter: (params: GridValueGetterParams) =>
            params.row.vouchersInThreeMonths.numberOfVouchers,
    },
    {
        field: 'vouchersInThreeMonths.value',
        headerName: 'value',

        valueGetter: (params: GridValueGetterParams) =>
            params.row.vouchersInThreeMonths.value,
    },
    {
        field: 'vouchersInSixMonths.numberOfVouchers',
        headerName: 'Number',

        valueGetter: (params: GridValueGetterParams) =>
            params.row.vouchersInSixMonths.numberOfVouchers,
    },
    {
        field: 'vouchersInSixMonths.value',
        headerName: 'value',

        valueGetter: (params: GridValueGetterParams) =>
            params.row.vouchersInSixMonths.value,
    }, {
        field: 'vouchersInMaxTime.numberOfVouchers',
        headerName: 'Number',

        valueGetter: (params: GridValueGetterParams) =>
            params.row.vouchersInMaxTime.numberOfVouchers,
    },
    {
        field: 'vouchersInMaxTime.value',
        headerName: 'value',

        valueGetter: (params: GridValueGetterParams) =>
            params.row.vouchersInMaxTime.value,
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
    }, {
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
    }, {
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
    }, {
        field: 'claimedVouchers.numberOfVouchers',
        headerName: 'Number',

        valueGetter: (params: GridValueGetterParams) =>
            params.row.claimedVouchers.numberOfVouchers,
    },
    {
        field: 'claimedVouchers.value',
        headerName: 'value',

        valueGetter: (params: GridValueGetterParams) =>
            params.row.claimedVouchers.value,
    },

];