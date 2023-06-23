import React from 'react';

export const ColumnFilter = ({
    column: { filterValue, setFilter, preFilteredRows, id },
}: any) => {
    const count = preFilteredRows.length;

    return (
        <input
            value={filterValue || ''}
            onChange={(e) => setFilter(e.target.value)}
            placeholder={`Search (${count})...`}
            style={{ width: '100%' }}
        />
    );
};
