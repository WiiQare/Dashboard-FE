import React, { FC, useState } from 'react';
import { DataGrid, GridColDef, GridColumnGroupingModel, GridToolbarContainer, GridCsvGetRowsToExportParams, GridToolbarExport, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarDensitySelector, useGridApiContext, gridExpandedSortedRowIdsSelector } from '@mui/x-data-grid';
import Button, { ButtonProps } from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { createSvgIcon } from '@mui/material/utils';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyles, } from '@mui/material';
import axios from 'axios';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from 'next-themes';

interface TableItemsProps<T extends object> {
    data: T[];
    columns: GridColDef[];
    groups: GridColumnGroupingModel;
    currentPage: string;
}
interface CustomToolbarProps {
    currentPage: string;
}

const getFilteredRows = ({ apiRef }: GridCsvGetRowsToExportParams) =>
    gridExpandedSortedRowIdsSelector(apiRef);

const ExportIcon = createSvgIcon(
    <path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z" />,
    'SaveAlt',
);

const CustomToolbar: React.FC<CustomToolbarProps> = ({ currentPage }) => {
    const apiRef = useGridApiContext();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const theme = useTheme();
    const isDarkMode = theme.theme === 'dark';


    const handleExportClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleExportClose = () => {
        setAnchorEl(null);
    };

    const handleExport = async () => {
        handleExportClose();
        const endPoint = `/export/${currentPage}`;
        const rowsToExport = getFilteredRows({ apiRef });

        try {
            const userState = JSON.parse(sessionStorage.getItem('userState') || 'null');
            const accessToken = userState?.access_token;

            const headers = {
                Authorization: `Bearer ${accessToken}`,
            };

            const response = await axios.get(`${process.env.WIIQARE_URI}/admin${endPoint}`, {
                data: rowsToExport,
                headers,
                responseType: 'arraybuffer',
            });

            if (response.data) {
                const blob = new Blob([response.data], { type: 'text/csv' });
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = `${currentPage.toUpperCase()}.csv`;
                link.click();
                window.URL.revokeObjectURL(url);
            }
        } catch (error) {
            console.error('Error exporting data:', error);
        }
    };

    return (
        <GridToolbarContainer>
            <GridToolbarColumnsButton />
            <GridToolbarFilterButton />
            <GridToolbarDensitySelector />
            <GridToolbarExport printOptions={{ disableToolbarButton: true }} />
            <Button color="primary" size="small" startIcon={<ExportIcon />} onClick={handleExportClick}>
                Export All
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleExportClose}
                sx={{
                    "& .MuiMenu-paper": {
                        backgroundColor: isDarkMode ? '#0f172a !important' : 'white !important',
                        color: isDarkMode ? 'white  !important' : 'black',
                    },
                }}
            >
                <MenuItem onClick={handleExport}>Download CSV</MenuItem>
            </Menu>
        </GridToolbarContainer>
    );
};

const TableItems: FC<TableItemsProps<any>> = ({ data, columns, groups, currentPage }) => {
    const theme = useTheme();
    const country = require('currency-codes');
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
                className: 'dark:bg-[#1e293b] dark:text-white',
            });
        };

        return (
            <div className="flex items-center">
                <button className="px-2 py-1" onClick={handleCopyClick} title={value}>
                    {typeof value === 'string' ? value.substr(0, 8) : value}
                </button>
            </div>
        );
    };
    const renderCurrency = (params: any) => {
        const { value } = params;

        return (
            <div title={country.code(value.toString())?.currency} className="flex items-center">
                {value.toString().toUpperCase()}
            </div>
        );
    };
    const rowsWithId = data?.map((row, index) => ({
        id: index.toString(),
        ...row,
    }));

    return (
        <div className="text-black dark:text-white transition-c-0.5">
            <ToastContainer />
            <div className="shadow rounded-2xl border-none bg-white transition-c-0.5 dark:bg-[#111827] no-scrollbar overflow-x-auto">
                <div className="table min-w-full overflow-hidden">
                    <GlobalStyles
                        styles={{
                            '&.MuiDataGrid-menuList': {
                                backgroundColor: theme.theme === 'dark' ? '#0f172a  !important' : 'white',
                                color: theme.theme === 'dark' && 'white !important',
                            },
                            '.MuiSvgIcon-root, .MuiInputBase-root, .MuiInputLabel-root': {
                                color: theme.theme === 'dark' && 'white  !important',

                            },
                            '& .MuiPaper-elevation': {
                                backgroundColor: theme.theme === 'dark' && '#0f172a  !important',

                            }, '& .MuiFormControlLabel-label': {
                                color: theme.theme === 'dark' && 'white  !important',

                            },


                        }}
                    />
                    <DataGrid
                        sx={{
                            "& .MuiButton-text": {
                                color: theme.theme === 'dark' ? "#ffffff" : "#1976d2 !important",
                            },

                            "& .MuiDataGrid-cell": {
                                borderBottom: 1,
                                borderColor: "#ffffff2e",

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
                        slots={{
                            toolbar: () => <CustomToolbar currentPage={currentPage} />,
                        }}
                        className='!border-none dark:text-white transition-c-0.5    '
                        rows={rowsWithId}
                        columns={columns.map((column) => ({
                            ...column,
                            renderCell: (params) => {
                                const { field } = column;

                                if (field.toLowerCase().endsWith('id') || field === 'id') {
                                    return renderIdCell(params);
                                }
                                if (!field.toLowerCase().includes('in') && field.toLowerCase().endsWith('currency') || field === 'currency') {
                                    return renderCurrency(params);
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
                            Toolbar: () => null,
                        }}
                        componentsProps={{
                            toolbar: {
                                className: 'dark:bg-black',
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default TableItems;
