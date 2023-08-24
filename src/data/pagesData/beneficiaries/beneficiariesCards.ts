const CardsData = (summary: any) => {
  return [
    {
      title: 'Total Registered Beneficiaries',
      color: '934286',
      info: summary.numberOfRegisteredBeneficiaries,
    },
    {
      title: 'Pending Vouchers',
      color: 'F37500',
      info: summary.pendingVouchers.numberOfVouchers,
      values: summary.pendingVouchers.value,
    },
    {
      title: 'Redeemed Vouchers ',
      color: '35B769',
      info: summary.redeemedVouchers.numberOfVouchers,
      values: summary.redeemedVouchers.value,
    },
    {
      title: 'Total Provider Transactions',
      color: 'FEE501',
      info: summary.redeemedVouchers.numberOfVouchers,
      values: summary.redeemedVouchers.value,
    },
    {
      title: 'Number of Provider Transactions',
      color: '35B769',
      info: summary.totalProviderTransactions.numberOfPayments,
      values: summary.totalProviderTransactions.value,
    },

    {
      title: 'Total Active Beneficiaries',
      color: 'c71313',
      info: summary.numberOfActiveBeneficiaries,
    },

    {
      title: 'Voucher Currencies',
      color: '#008000',
      progress: 100,
      info: summary.voucherCurrencies,
    },
  ];
};
export default CardsData;
