import { GridValueGetterParams } from '@mui/x-data-grid';

const BeneficiariesColumns: any[] = [
  {
    field: 'id',
    headerName: 'ID',
    minWidth: 90,
  },
  {
    field: 'name',
    headerName: 'Name',
    minWidth: 200,
  },
  {
    field: 'country',
    headerName: 'Country',
    width: 250,
  },
  {
    field: 'registrationDate',
    headerName: 'Registration Date',
    minWidth: 150,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'lastActivityOn',
    headerName: 'Last Activity',
    minWidth: 150,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'totalNumberOfDistinctPayers',
    headerName: 'Total Payers',
    minWidth: 100,
  },
  {
    field: 'totalNumberOfDistinctProviders ',
    headerName: 'Total Unique Providers ',
    minWidth: 150,
  },
  {
    field: 'totalPayment.numberOfPayments',
    headerName: 'Quantity',

    valueGetter: (params: GridValueGetterParams) =>
      params.row.totalPayment.numberOfPayments,
  },
  {
    field: 'totalPayment.value',
    headerName: 'EUR',

    valueGetter: (params: GridValueGetterParams) =>
      params.row.totalPayment.value,
  },
  {
    field: 'activeVouchers.numberOfVouchers',
    headerName: 'Quantity',

    valueGetter: (params: GridValueGetterParams) =>
      params.row.activeVouchers.numberOfVouchers,
  },
  {
    field: 'activeVouchers.value',
    headerName: 'EUR',

    valueGetter: (params: GridValueGetterParams) =>
      params.row.activeVouchers.value,
  },
  {
    field: 'pendingVouchers.numberOfVouchers',
    headerName: 'Quantity',

    valueGetter: (params: GridValueGetterParams) =>
      params.row.pendingVouchers.numberOfVouchers,
  },
  {
    field: 'pendingVouchers.value',
    headerName: 'EUR',

    valueGetter: (params: GridValueGetterParams) =>
      params.row.pendingVouchers.value,
  },
  {
    field: 'unclaimedVouchers.numberOfVouchers',
    headerName: 'Quantity',

    valueGetter: (params: GridValueGetterParams) =>
      params.row.unclaimedVouchers.numberOfVouchers,
  },
  {
    field: 'unclaimedVouchers.value',
    headerName: 'EUR',

    valueGetter: (params: GridValueGetterParams) =>
      params.row.unclaimedVouchers.value,
  },
  {
    field: 'redeemedVouchers.numberOfVouchers',
    headerName: 'Quantity',

    valueGetter: (params: GridValueGetterParams) =>
      params.row.redeemedVouchers.numberOfVouchers,
  },
  {
    field: 'redeemedVouchers.value',
    headerName: 'EUR',

    valueGetter: (params: GridValueGetterParams) =>
      params.row.redeemedVouchers.value,
  },
];
export const BeneficiariesColumnGroupingModel: any = [
  {
    groupId: 'naming',
    headerName: 'Total Payment',
    freeReordering: true,
    children: [
      { field: 'totalPayment.numberOfPayments' },
      { field: 'totalPayment.value' },
    ],
  },
  {
    groupId: 'activeVouchers',
    headerName: 'Active Vouchers',
    description: '',
    children: [
      { field: 'activeVouchers.numberOfVouchers' },
      { field: 'activeVouchers.value' },
    ],
  },
  {
    groupId: 'pendingVouchers',
    headerName: 'Pending Vouchers',
    description: '',
    children: [
      { field: 'pendingVouchers.numberOfVouchers' },
      { field: 'pendingVouchers.value' },
    ],
  },
  {
    groupId: 'unclaimedVouchers',
    headerName: 'Unclaimed Vouchers',
    description: '',
    children: [
      { field: 'unclaimedVouchers.numberOfVouchers' },
      { field: 'unclaimedVouchers.value' },
    ],
  },
  {
    groupId: 'redeemedVouchers',
    headerName: 'Redeemed Vouchers',
    description: '',
    children: [
      { field: 'redeemedVouchers.numberOfVouchers' },
      { field: 'redeemedVouchers.value' },
    ],
  },
];

export default BeneficiariesColumns;
