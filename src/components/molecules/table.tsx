import React from 'react';
import TableItems from '../atom/tableItem';
import { useSelector } from 'react-redux';

interface TableProps {
    propsColumns: any[];
    data: any[];
    propsGroups: any[];
    currentPage: number;
    pageSize: number;
}

const Table: React.FC<TableProps> = ({
    propsColumns,
    data,
    propsGroups,
    currentPage,
    pageSize,
}) => {

    const filteredData = React.useMemo(() => {
        return data;
    }, [data]);

    return (
        <>
            <TableItems
                data={filteredData}
                columns={propsColumns}
                groups={propsGroups}
            />
        </>
    );
};

export default Table;
