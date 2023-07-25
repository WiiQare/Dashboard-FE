const CardsData = (summary: any) => {

    return [

        {
            title: "Number Of Registered Providers",
            color: "934286",
            info: summary.numberOfRegisteredProviders
        },
        {
            title: "Total Beneficiary Transactions Within One Week",
            color: "F37500",
            info: summary.totalBeneficiaryTransactionsWithinOneWeek.numberOfTransactions,
            values: summary.totalBeneficiaryTransactionsWithinOneWeek.value,
        },
        {
            title: "Total Beneficiary Transactions Within Three Months",
            color: "F37500",
            info: summary.totalBeneficiaryTransactionsWithinThreeMonths.numberOfTransactions,
            values: summary.totalBeneficiaryTransactionsWithinThreeMonths.value,
        },
        {
            title: "Total Beneficiary Transactions Within Six Months",
            color: "F37500",
            info: summary.totalBeneficiaryTransactionsWithinSixMonths.numberOfTransactions,
            values: summary.totalBeneficiaryTransactionsWithinSixMonths.value,
        },


        {
            title: "Total Beneficiary Provider Transactions",
            color: "35B769",
            info: summary.totalBeneficiaryProviderTransaction,
        }, {
            title: "Total Number Of Unique Beneficiaries",
            color: "35B769",
            info: summary.totalNumberOfUniqueBeneficiaries,
        },
        {
            title: "unclaimed Vouchers",
            color: "FEE501",
            info: summary.unclaimedVouchers.numberOfVouchers,
            values: summary.unclaimedVouchers.value,
        },
        {
            title: "claimed Vouchers",
            color: "FEE501",
            info: summary.claimedVouchers.numberOfVouchers,
            values: summary.claimedVouchers.value,
        },
        {
            title: "Redeemed Vouchers",
            color: "FEE501",
            info: summary.redeemedVouchers.numberOfVouchers,
            values: summary.redeemedVouchers.value,
        },
        {
            title: "Currency",
            color: "934286",
            info: summary.currency
        },
    ]
};
export default CardsData;
