import { GridValueGetterParams } from "@mui/x-data-grid";

const ProviderColumns: any[] = [
    {
        field: "id",
        headerName: "ID",
        minWidth: 90
    },
    {
        field: "name",
        headerName: "Name",
        minWidth: 120,
        flex: 1
    },
    {
        field: "country",
        headerName: "Country",
        minWidth: 200,
        type: "string",
        flex: 2
    },
    {
        field: "registrationDate",
        headerName: "Registration Date",
        minWidth: 130,
        flex: 1,
        headerAlign: 'center',
        align: 'center'
    },
    {
        field: "currency",
        headerName: "Currency",
        minWidth: 90
    },
    {
        field: "lastBeneficiaryProviderTransaction",
        headerName: "Last Beneficiary Provider Transaction",
        minWidth: 180,
        flex: 1,
    },
    {
        field: "totalNumberOfUniqueBeneficiaries",
        headerName: "Total Number Of Unique Beneficiaries",
        minWidth: 180,
        type: "number",
        headerAlign: 'center',
        align: 'center'
    },
    {
        field: "totalBeneficiaryProviderTransactionWithinOneWeek",
        headerName: "Total Beneficiary Provider Transaction Within One Week",
        minWidth: 180,
        type: "number",
        headerAlign: 'center',
        align: 'center'
    },
    {
        field: "claimedVouchers.numberOfVouchers",
        headerName: "Number",
        valueGetter: (params: GridValueGetterParams) =>
            params.row.claimedVouchers.numberOfVouchers,
    },
    {
        field: "claimedVouchers.value",
        headerName: "value",

        valueGetter: (params: GridValueGetterParams) =>
            params.row.claimedVouchers.value,
    },
    {
        field: "unclaimedVouchers.numberOfVouchers",
        headerName: "Number",
        valueGetter: (params: GridValueGetterParams) =>
            params.row.unclaimedVouchers.numberOfVouchers,
    },
    {
        field: "unclaimedVouchers.value",
        headerName: "value",

        valueGetter: (params: GridValueGetterParams) =>
            params.row.unclaimedVouchers.value,
    },
    {
        field: "redeemedVouchers.numberOfVouchers",
        headerName: "Number",

        valueGetter: (params: GridValueGetterParams) =>
            params.row.redeemedVouchers.numberOfVouchers,
    },
    {
        field: "redeemedVouchers.value",
        headerName: "value",

        valueGetter: (params: GridValueGetterParams) =>
            params.row.redeemedVouchers.value,
    },
];
export const ProviderColumnGroupingModel: any = [
    {
        groupId: "Received Vouchers",
        headerName: "Total Payment",
        freeReordering: true,
        children: [
            { field: "receivedVouchers.numberOfVouchers" },
            { field: "receivedVouchers.value" },
        ],
    },
    {
        groupId: "claimedVouchers",
        headerName: "Claimed Vouchers",
        description: "",
        children: [
            { field: "claimedVouchers.numberOfVouchers" },
            { field: "claimedVouchers.value" },
        ],
    },
    {
        groupId: "unclaimedVouchers",
        headerName: "Unclaimed Vouchers",
        description: "",
        children: [
            { field: "unclaimedVouchers.numberOfVouchers" },
            { field: "unclaimedVouchers.value" },
        ],
    },
    {
        groupId: "redeemedVouchers",
        headerName: "Redeemed Vouchers",
        description: "",
        children: [
            { field: "redeemedVouchers.numberOfVouchers" },
            { field: "redeemedVouchers.value" },
        ],
    },
];

export default ProviderColumns;
