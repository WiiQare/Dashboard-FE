import React, { useState } from 'react';
import TableItems from '../atom/tableItem';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PanelContent from './Tab/PanelContent';
import SimpleHeader from '../atom/card/simpleHeader';

interface TableProps {
  propsColumns: any[];
  data: any[];
  propsGroups: any[];
  currentPage: string;
}

const TabHistories = [
  {
    name: 'Mensuel',
    transactions: [],
  },

  {
    name: 'Hebdomadaire',
    transactions: [],
  },

  {
    name: "Aujourd'hui",
    transactions: [],
  },
];

const Table: React.FC<TableProps> = ({
  propsColumns,
  data,
  propsGroups,
  currentPage,
}) => {
  const [value, setValue] = useState(0);

  const filteredData = React.useMemo(() => {
    return data;
  }, [data]);

  return (
    // <TableItems
    //   data={filteredData}
    //   columns={propsColumns}
    //   groups={propsGroups}
    //   currentPage={currentPage}
    // />
    <div className="space-y-4 bg-white py-8 md:px-6 px-3 drop-shadow-sm rounded-lg w-full">
      <Box className="w-full">
        <SimpleHeader
          title={'Historique des transactions'}
          describe={'Liste de toutes les transactions effectuées'}
        >
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={(e, newValue) => setValue(newValue)}
              aria-label="basic tabs example"
              className="text-sm md:text-md"
            >
              {TabHistories.map((item, index) => (
                <Tab
                  label={item.name}
                  // transactions={item.transactions}
                  {...(a11yProps(index) as any)}
                  key={index}
                />
              ))}
            </Tabs>
          </Box>
        </SimpleHeader>

        <div>
          {TabHistories.map((item, index) => (
            <PanelContent
              key={index}
              // transactions={item.transactions}
              value={value}
              index={index}
            />
          ))}
        </div>
      </Box>
    </div>
  );
};

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
export default Table;
