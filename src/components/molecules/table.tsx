import React from 'react';
import TableItems from '../atom/tableItem';
import { useSelector } from 'react-redux';

interface TableProps {
    propsColumns: any[];
    data: any[];
    propsGroups: any[];
    currentPage: string;
}

const Table: React.FC<TableProps> = ({
    propsColumns,
    data,
    propsGroups,
    currentPage
}) => {

    const filteredData = React.useMemo(() => {
        return data;
    }, [data]);

    return (

            <TableItems
            data={filteredData}
            columns={propsColumns}
            groups={propsGroups} 
            currentPage={currentPage}            />
    );
};

export default Table;
