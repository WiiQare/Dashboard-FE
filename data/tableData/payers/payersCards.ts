const CardsData = (data: any) => [
    {
        title: "Total  Registered",
        color: "#934286",
        info: data.numberOfRegisteredPayers,
    },
    {
        title: "Total Purchased Vouchers",
        color: "#F37500",
        info: data.totalNumberOfPurchasedVouchers,
    },
    {
        title: "Total Pending  Vouchers",
        color: "#FEE501",
        info: data.totalNumberOfPendingVouchers,
    },
    {
        title: "Total Redeemed Vouchers",
        color: "#35B769",
        info: data.totalNumberOfRedeemedVouchers,
    },
    {
        title: "Active payers",
        color: "#c71313",
        info: data.numberOfActivePayers,
    },
];
export default CardsData;
