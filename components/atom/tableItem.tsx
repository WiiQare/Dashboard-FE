import React, { FC } from 'react';
import { DataGrid, GridColDef, GridColumnGroup, GridColumnGroupingModel, GridGroupNode, GridToolbar } from '@mui/x-data-grid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTheme } from 'next-themes';
import { GlobalStyles, } from '@mui/material';

interface TableItemsProps<T extends object> {
    data: T[];
    columns: GridColDef[];
    groups: GridColumnGroupingModel;

}

const TableItems: FC<TableItemsProps<any>> = ({ data, columns, groups }) => {

    const theme = useTheme();
    const renderIdCell = (params: any) => {
        const { value } = params;

        const handleCopyClick = () => {
            navigator.clipboard.writeText(value);
            toast.success('ID copied to clipboard!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                className: 'dark:!bg-[#1e293b] dark:!text-white'
            });
        };

        return (
            <div className="flex items-center">
                <button className="px-2 py-1" onClick={handleCopyClick} title={value}>
                    {value.substr(0, 3)}
                </button>
            </div>
        );
    };

    const rowsWithId = data.map((row, index) => ({
        id: index.toString(),
        ...row,
    }));

    return (

        <div className="text-black dark:text-white transition-c-0.5 w-full">
            <ToastContainer />
            <div className="shadow rounded-2xl border-none bg-white transition-c-0.5 dark:bg-[#111827] no-scrollbar overflow-x-auto">
                <div className="table min-w-full overflow-hidden">
                    <GlobalStyles
                        styles={{
                            '&.MuiDataGrid-menuList': {
                                backgroundColor: theme.theme === 'dark' && '#0f172a  !important',
                                color: theme.theme === 'dark' && 'white !important',
                            },
                            '.MuiSvgIcon-root, .MuiInputBase-root, .MuiInputLabel-root': {
                                color: theme.theme === 'dark' && 'white  !important',

                            },
                            '& .MuiPaper-elevation': {
                                backgroundColor: theme.theme === 'dark' && '#252d42  !important',

                            },


                        }}
                    />
                    <DataGrid
                        sx={{
                            "& .MuiButton-text": {
                                color: theme.theme === 'dark' ? "#ffffff" : "#1976d2 !important",
                            },
                            "&.MuiDataGrid-root  .MuiDataGrid-cell:focus-within": {
                                outline: "none !important",
                            },
                            "&. MuiDataGrid-columnHeader:focus-within": {
                                outline: "none !important",
                            },
                            "& .MuiDataGrid-cell": {
                                borderBottom: 1,
                                borderColor: "#ffffff2e",

                                // add more css for customization
                            },
                            "& .MuiDataGrid-menuList": {
                                backgroundColor: "#ffffff2e !important",

                            },
                            "& .MuiDataGrid-toolbarContainer": {
                                backgroundColor: theme.theme === 'dark' ? "#0f1b31" : "#f1f6ff !important",
                                marginBottom: "8px auto auto",
                                padding: "7px",
                                width: "100%"

                            },

                        }}
                        slots={{ toolbar: GridToolbar }}

                        className=' !border-none  dark:!text-white'
                        rows={rowsWithId}
                        columns={columns.map((column) => ({
                            ...column,
                            renderCell: (params) => {
                                const { field } = column;

                                if (field.includes('Id')) {
                                    return renderIdCell(params);
                                }

                                return params.value;
                            },

                        }))}
                        experimentalFeatures={{ columnGrouping: true }}
                        columnGroupingModel={groups}


                        checkboxSelection={false}
                        disableColumnFilter={false}
                        disableColumnMenu={false}
                        disableColumnSelector={false}
                        disableDensitySelector={false}
                        hideFooter={true}
                        autoHeight
                        components={{
                            Toolbar: () => null, // Hide the default toolbar
                        }}
                        componentsProps={{
                            toolbar: {
                                className: 'dark:bg-black', // Add the dark mode background color class
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default TableItems;
