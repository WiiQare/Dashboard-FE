const BeneficiariesCards = (summary: any) => {
  return [
    {
      title: 'Registered Beneficiaries',
      color: 'F37500',
      info: summary.numberOfRegisteredBeneficiaries,
    },
    {
      title: 'Active Beneficiaries',
      color: 'F37500',
      info: summary.numberOfActiveBeneficiaries,
    },
  ];
};
export default BeneficiariesCards;
