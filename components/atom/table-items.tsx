import React from 'react';
import { useTable } from 'react-table';

interface TableGeneratorProps {
    data: any[]; // Array of objects representing the data to display
    columns: any[]; // Array of objects representing the table columns
}

const TableGenerator: React.FC<TableGeneratorProps> = ({ data, columns }) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data,
    });

    return (

        <div className=" ">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full text-black dark:text-black  sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table {...getTableProps()} className=" rounded-2xl  transition-c-0.5  bg-white dark:bg-[#1e293b]  text-black  dark:text-white table min-w-full text-center text-sm font-light " >
                            <thead className="font-normal">
                                {headerGroups.map(headerGroup => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map(column => (
                                            <th className='title-box'
                                                {...column.getHeaderProps()}

                                            >
                                                {column.render('Header')}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody {...getTableBodyProps()}>
                                {rows.map(row => {
                                    prepareRow(row);
                                    return (
                                        <tr {...row.getRowProps()}>
                                            {row.cells.map(cell => (
                                                <td
                                                    {...cell.getCellProps()}
                                                    className="whitespace-nowrap px-6 py-3"
                                                >
                                                    {cell.render('Cell')}
                                                </td>
                                            ))}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default TableGenerator;
