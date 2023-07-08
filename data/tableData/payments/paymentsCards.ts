const CardsData = (summary: any) => {

    return [

        {
            title: "Total Payer Payments In One Week",
            color: "934286",
            info: summary.totalPayerPaymentsInOneWeek
        },
        {
            title: "Total Payer Payments In One Month",
            color: "F37500",
            info: summary.totalPayerPaymentsInOneMonth
        },
        {
            title: "Total Payer Payments In Three Months",
            color: "F37500",
            info: summary.totalPayerPaymentsInThreeMonths
        },
        {
            title: "Total Payer Payments In Six Months",
            color: "F37500",
            info: summary.totalPayerPaymentsInSixMonths
        },
        {
            title: "Total Payer Payments Max",
            color: "F37500",
            info: summary.totalPayerPaymentsMax
        },
        {
            title: "Total Claimed Vouchers",
            color: "F37500",
            info: summary.totalClaimedVouchers
        },
        {
            title: "Total Provider Payments",
            color: "F37500",
            info: summary.totalProviderPayments
        },
        {
            title: "Total Revenue",
            color: "F37500",
            info: summary.totalRevenue
        },
    ]
};
export default CardsData;
