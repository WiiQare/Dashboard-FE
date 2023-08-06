const CardsData = (summary: any) => {

    return [

        {
            title: "Number Of Registered Providers",
            color: "934286",
            info: summary.numberOfRegisteredProviders
        },


        {
            title: "Total Beneficiary Transactions",
            color: "35B769",
            info: summary.totalBeneficiaryProviderTransaction,
        }, {
            title: "Total Unique Beneficiaries",
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
