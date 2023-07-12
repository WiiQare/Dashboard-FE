const CardsData = (summary: any) => {

    return [


        {
            title: "Payer Payments In One Week",
            color: "F37500",
            info: summary.payerPaymentsInOneWeek.numberOfPayments,
            values: summary.payerPaymentsInOneWeek.value,
        },
        {
            title: "Payer Payments In One Month",
            color: "F37500",
            info: summary.payerPaymentsInOneMonth.numberOfPayments,
            values: summary.payerPaymentsInOneMonth.value,
        },
        {
            title: "Payer Payments In Three Month",
            color: "F37500",
            info: summary.payerPaymentsInThreeMonths.numberOfPayments,
            values: summary.payerPaymentsInThreeMonths.value,
        },
        {
            title: "Payer Payments In Six Months",
            color: "F37500",
            info: summary.payerPaymentsInSixMonths.numberOfPayments,
            values: summary.payerPaymentsInSixMonths.value,
        },

        {
            title: "Payer Payments Max",
            color: "FEE501",
            info: summary.payerPaymentsMax.numberOfPayments,
            values: summary.payerPaymentsMax.value,
        },
        {
            title: "Claimed Vouchers",
            color: "35B769",
            info: summary.claimedVouchers.numberOfPayments,
            values: summary.claimedVouchers.value,
        },
        {
            title: "Total Provider Payments",
            color: "35B769",
            info: summary.totalProviderPayments.numberOfPayments,
            values: summary.totalProviderPayments.value,
        },
        {
            title: "Total Revenue",
            color: "#008000",
            progress: 100,
            info: summary.totalRevenue,
        },
    ]
};
export default CardsData;
