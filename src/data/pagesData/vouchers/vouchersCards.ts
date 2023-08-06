const CardsData = (summary: any) => {

    return [

        {
            title: "Purchased Vouchers (last week)",
            color: "F37500",
            info: summary.vouchersInOneWeek.numberOfTransactions,
            values: summary.vouchersInOneWeek.value,
        },
        {
            title: "Purchased Vouchers (last month)",
            color: "F37500",
            info: summary.vouchersInOneMonth.numberOfTransactions,
            values: summary.vouchersInOneMonth.value,
        },
        {
            title: "Purchased Vouchers (last three months)",
            color: "F37500",
            info: summary.vouchersInThreeMonths.numberOfTransactions,
            values: summary.vouchersInThreeMonths.value,
        },

        {
            title: "Purchased Vouchers (last six months)",
            color: "FEE501",
            info: summary.vouchersInSixMonths.numberOfVouchers,
            values: summary.vouchersInSixMonths.value,
        },
        {
            title: "Purchased Vouchers (all)",
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
export default CardsData;
