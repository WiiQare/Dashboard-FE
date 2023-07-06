const PayersColumns: any[] = [
    {
        field: 'payerId',
        headerName: 'Transaction ID',
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
]

export default PayersColumns;


