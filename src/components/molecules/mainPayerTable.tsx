import PayersColumns from '@/data/pagesData/payers/payersColumns';
import { payersColumnGroupingModel } from '@/data/pagesData/payers/payersColumns';
import React from 'react';
import { useTheme } from 'next-themes';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { toast } from 'react-toastify';

export interface PayersInterface {
  result: any[];
}

export default function MainPayersTable({ result }: PayersInterface) {
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
        className: 'dark:!bg-[#1e293b] dark:!text-white',
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

  const rowsWithId = result.map((row, index) => ({
    id: index.toString(),
    ...row,
  }));
  return (
    <DataGrid
      sx={{
        '& .MuiButton-text': {
          color: theme.theme === 'dark' ? '#ffffff' : '#1976d2 !important',
        },
        '&.MuiDataGrid-root  .MuiDataGrid-cell:focus-within': {
          outline: 'none !important',
        },
        '&. MuiDataGrid-columnHeader:focus-within': {
          outline: 'none !important',
        },
        '& .MuiDataGrid-cell': {
          borderBottom: 1,
          borderColor: '#ffffff2e',

          // add more css for customization
        },
        '& .MuiDataGrid-menuList': {
          backgroundColor: '#ffffff2e !important',
        },
        '& .MuiDataGrid-toolbarContainer': {
          backgroundColor:
            theme.theme === 'dark' ? '#0f1b31' : '#f1f6ff !important',
          marginBottom: '8px auto auto',
          padding: '7px',
          width: '100%',
        },
      }}
      slots={{ toolbar: GridToolbar }}
      className=" !border-none  dark:!text-white"
      rows={rowsWithId}
      columns={PayersColumns.map((column) => ({
        ...column,
        renderCell: (params) => {
          const { field } = column;

          if (field.toLowerCase().endsWith('id') || field === 'id') {
            return renderIdCell(params);
          }

          return params.value;
        },
      }))}
      experimentalFeatures={{ columnGrouping: true }}
      columnGroupingModel={payersColumnGroupingModel}
      checkboxSelection={false}
      disableColumnFilter={false}
      disableColumnMenu={false}
      disableColumnSelector={false}
      disableDensitySelector={false}
      autoHeight
      componentsProps={{
        toolbar: {
          className: 'dark:bg-black',
        },
      }}
    />
  );
}
