const CardsData = (data: any) => [
  {
    title: 'Total  Registered',
    color: '#934286',
    info: data.numberOfRegisteredPayers,
  },
  {
    title: 'Purchased Vouchers',
    color: 'F37500',
    info: data.purchasedVouchers.numberOfVouchers,
    values: data.purchasedVouchers.value,
  },
  {
    title: 'Pending Vouchers',
    color: 'F37500',
    info: data.pendingVouchers.numberOfVouchers,
    values: data.pendingVouchers.value,
  },
  {
    title: 'Redeemed Vouchers',
    color: 'F37500',
    info: data.redeemedVouchers.numberOfVouchers,
    values: data.redeemedVouchers.value,
  },
  {
    title: 'Currency',
    color: '#934286',
    info: data.currency,
  },
  {
    title: 'Active payers',
    color: '#c71313',
    info: data.numberOfActivePayers,
  },
];
export default CardsData;
