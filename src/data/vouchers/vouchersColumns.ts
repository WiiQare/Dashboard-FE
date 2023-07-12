const PayersColumns: any[] = [
    {
        field: 'voucherId',
        headerName: 'ID',
        minWidth: 90,
        flex: 1,


    },
    {
        field: 'voucherValueLocal',
        headerName: 'Voucher Local Value',
        minWidth: 250,
        flex: 1,

    },
    {
        field: 'Voucher Value EUR',
        headerName: 'Country',
        minWidth: 150,
        flex: 1,
    },
    {
        field: 'voucherPayerId',
        headerName: 'voucherPayerId',
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


