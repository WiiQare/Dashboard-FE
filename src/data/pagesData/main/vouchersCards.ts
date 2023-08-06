const VouchersCards = (summary: any) => {

    return [

        {
            title: "Purchased Vouchers",
            color: "FEE501",
            info: summary.vouchersInMaxTime.numberOfVouchers,
            values: summary.vouchersInMaxTime.value,
        },
        {
            title: "Pending Vouchers",
            color: "FEE501",
            info: summary.pendingVouchers.numberOfVouchers,
            values: summary.pendingVouchers.value,
        },
        {
            title: "Redeemed Vouchers",
            color: "FEE501",
            info: summary.redeemedVouchers.numberOfVouchers,
            values: summary.redeemedVouchers.value,
        },
        {
            title: "Unclaimed Vouchers",
            color: "FEE501",
            info: summary.unclaimedVouchers.numberOfVouchers,
            values: summary.unclaimedVouchers.value,
        },
        {
            title: "Claimed Vouchers",
            color: "FEE501",
            info: summary.claimedVouchers.numberOfVouchers,
            values: summary.claimedVouchers.value,
        },
    ]
};
export default VouchersCards;
