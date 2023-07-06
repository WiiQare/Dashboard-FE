const CardsData = (data: any) => [
    { title: 'Total  Registered', color: 'info', shade: "#f0f4fd", values: data.numberOfRegisteredPayers },
    { title: 'Total Purchased Vouchers', color: 'primary', shade: "#f0f4fd", values: data.totalNumberOfPurchasedVouchers },
    { title: 'Total Pending  Vouchers', color: 'warning', shade: "rgb(77, 45, 0,0.4)", values: data.totalNumberOfPendingVouchers },
    { title: 'Total Redeemed Vouchers', color: 'success', shade: "#f0f4fd", values: data.totalNumberOfRedeemedVouchers },
    { title: 'Active payers', color: 'danger', shade: "#f0f4fd", values: data.numberOfActivePayers },
];
export default CardsData                                                                                                            