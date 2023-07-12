const CardsData = (summary: any) => {

    return [

        {
            title: "Number Of Registered Beneficiaries",
            color: "934286",
            info: summary.numberOfRegisteredBeneficiaries
        },
        {
            title: "Pending Vouchers",
            color: "F37500",
            info: summary.pendingVouchers.numberOfVouchers,
            values: summary.pendingVouchers.value,
        },
        {
            title: "Total Provider Transactions",
            color: "FEE501",
            info: summary.redeemedVouchers.numberOfVouchers,
            values: summary.redeemedVouchers.value,
        },
        {
            title: "Numbe Oof Provider Transactions",
            color: "35B769",
            info: summary.totalProviderTransactions.numberOfPayments,
            values: summary.totalProviderTransactions.value,
        },
        {
            title: "Number Of Active Beneficiaries",
            color: "c71313",
            info: summary.numberOfActiveBeneficiaries,
        },
        {
            title: "Voucher Currencies",
            color: "#008000",
            progress: 100,
            info: summary.voucherCurrencies,
        },
    ]
};
export default CardsData;
