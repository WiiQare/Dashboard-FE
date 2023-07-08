const CardsData = (data: any) => [
    { title: 'Total  Registered', color: '#934286', values: data.numberOfRegisteredPayers },
    { title: 'Total Purchased Vouchers', color: '#F37500', values: data.totalNumberOfPurchasedVouchers },
    { title: 'Total Pending  Vouchers', color: '#FEE501', values: data.totalNumberOfPendingVouchers },
    { title: 'Total Redeemed Vouchers', color: '#35B769', values: data.totalNumberOfRedeemedVouchers },
    { title: 'Active payers', color: '#c71313', values: data.numberOfActivePayers },
];
export default CardsData