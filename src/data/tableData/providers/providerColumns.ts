import { GridValueGetterParams } from "@mui/x-data-grid";

const ProviderColumns: any[] = [
    { field: "id", headerName: "ID", Minwidth: 90 },
    { field: "name", headerName: "Name", minWidth: 250 },
    { field: "country", headerName: "Country", width: 120 },
    { field: "registrationDate", headerName: "Registration Date", Minwidth: 180 },
    { field: "currency", headerName: "Currency",  Minwidth: 90},
    {
        field: "lastBeneficiaryProviderTransaction",
        headerName: "Last Beneficiary Provider Transaction",
        width: 180,
    },
    {
        field: "totalNumberOfUniqueBeneficiaries",
        headerName: "Total NumberOf Unique Beneficiaries",
        width: 180,
    },
    {
        field: "totalBeneficiaryProviderTransactionWithinOneWeek",
        headerName: "Total Beneficiary Provider Transaction Within One Week",
        width: 180,
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
