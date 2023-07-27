const CardsData = (summary: any) => {

    return [

        {
            title: "Vouchers In One Week",
            color: "F37500",
            info: summary.vouchersInOneWeek.numberOfTransactions,
            values: summary.vouchersInOneWeek.value,
        },
        {
            title: "Vouchers In One Month",
            color: "F37500",
            info: summary.vouchersInOneMonth.numberOfTransactions,
            values: summary.vouchersInOneMonth.value,
        },
        {
            title: "Vouchers In Three Months",
            color: "F37500",
            info: summary.vouchersInThreeMonths.numberOfTransactions,
            values: summary.vouchersInThreeMonths.value,
        },

        {
            title: "Vouchers In Six Months",
            color: "FEE501",
            info: summary.vouchersInSixMonths.numberOfVouchers,
            values: summary.vouchersInSixMonths.value,
        },
        {
            title: "Vouchers In Max Time",
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
