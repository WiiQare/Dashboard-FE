import { GridValueGetterParams } from "@mui/x-data-grid";

const PayersColumns: any[] = [
    {
        field: 'transactionId',
        headerName: 'Transaction ID',

        minWidth: 90,
        flex: 1,
    },
    {
        field: 'transactionDate',
        headerName: 'Transaction Date',
        minWidth: 150,
        flex: 1,

    },
    {
        field: 'providerName',
        headerName: 'Provider Name',
        minWidth: 150,
        flex: 1,
    },
    {
        field: 'providerId',
        headerName: 'Provider Id',
        minWidth: 150,
        flex: 1,
    },
    {
        field: 'cityProvider',
        headerName: 'City Provider',
        minWidth: 150,
        flex: 1,
    },
    {
        field: 'providerCountry',
        headerName: 'Provider Country',
        minWidth: 150,
        flex: 1,
    },
    {
        field: 'transactionStatus',
        headerName: 'Transaction Status',
        valueGetter: (params: GridValueGetterParams) =>
            params.row.isActive ? 'True' : 'False',
        minWidth: 150,
        flex: 1,
    },
    {
        field: 'voucherValueLocal',
        headerName: 'Voucher Value Local',
        minWidth: 150,
        flex: 1,
    },
    {
        field: 'voucherValue',
        headerName: 'Voucher Value',
        minWidth: 150,
        flex: 1,
    },
]

export default PayersColumns;


