import { GridValueGetterParams } from '@mui/x-data-grid';

const ProvidersColumns: any[] = [
  {
    field: 'providerName',
    headerName: 'Provider Name',
    minWidth: 150,
    flex: 1,
  },
  {
    field: 'providerId',
    headerName: 'Provider Id',
    minWidth: 150,
    flex: 1,
  },
  {
    field: 'providerCity',
    headerName: 'Provider City',
    minWidth: 150,
    flex: 1,
  },
  {
    field: 'transactionId',
    headerName: 'Transaction ID',

    minWidth: 90,
    flex: 1,
  },
  {
    field: 'transactionDate',
    headerName: 'Transaction Date',
    minWidth: 150,
    flex: 1,
  },
  {
    field: 'providerCountry',
    headerName: 'Provider Country',
    minWidth: 150,
    flex: 1,
  },
  {
    field: 'transactionStatus',
    headerName: 'Transaction Status',
    valueGetter: (params: GridValueGetterParams) =>
      params.row.isActive ? 'True' : 'False',
    minWidth: 150,
    flex: 1,
  },
  {
    field: 'voucherAmountInLocalCurrency',
    headerName: 'Voucher Amount In Local Currency',
    minWidth: 150,
    flex: 1,
  },
  {
    field: 'voucherAmountInSenderCurrency',
    headerName: 'Voucher Amount In Sender Currency',
    minWidth: 150,
    flex: 1,
  },
];

export default ProvidersColumns;
