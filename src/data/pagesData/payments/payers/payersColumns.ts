const PaymentsPayersColumns: any[] = [
  {
    field: 'transactionId',
    headerName: 'Transaction ID',
    minWidth: 90,
    flex: 1,
  },
  {
    field: 'transactionDate',
    headerName: 'Transaction Date',
    minWidth: 100,
    flex: 1,
  },
  {
    field: 'paymentValue',
    headerName: 'Payment Value',
    minWidth: 80,
    flex: 1,
  },
  {
    field: 'payerCountry',
    headerName: 'Payer Country',
    minWidth: 200,
    flex: 1,
  },
  {
    field: 'beneficiaryCountry',
    headerName: 'Beneficiary Country',
    minWidth: 150,
    flex: 1,
  },
];

export default PaymentsPayersColumns;
