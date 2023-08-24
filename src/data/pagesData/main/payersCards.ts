const PayersCards = (data: any) => [
  {
    title: 'Registered Payers',
    color: '#c71313',
    info: data.numberOfRegisteredPayers,
  },
  {
    title: 'Active payers',
    color: '#c71313',
    info: data.numberOfActivePayers,
  },
];
export default PayersCards;
