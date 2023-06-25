import React, { FC } from 'react';
import { useTable, usePagination, Column, TableInstance, TableState } from 'react-table';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface TableItemsProps<T extends object> {
    data: T[];
    columns: Column<T>[];
}

interface MyTableState<T extends object> extends TableState<T> {
    pageIndex: number;
    pageSize: number;
}

interface MyTableInstance<T extends object> extends TableInstance<T> {
    state: MyTableState<T>;
    page: T[];
    pageOptions: number[];
    canPreviousPage: boolean;
    canNextPage: boolean;
    previousPage: () => void;
    nextPage: () => void;
    gotoPage: (pageIndex: number) => void;
    setPageSize: (pageSize: number) => void;
}

const initialTableState: MyTableState<any> = {
    pageIndex: 0,
    pageSize: 20,
};

const TableItems: FC<TableItemsProps<any>> = ({ data, columns }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        pageOptions,
        state: { pageIndex },
        gotoPage,
        canPreviousPage,
        canNextPage,
    } = useTable(
        {
            columns,
            data,
            initialState: initialTableState,
        },
        usePagination
    ) as MyTableInstance<any>;

    return (
        <div className="!transition-c-0.5">
            <div className="no-scrollbar overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full text-black dark:text-black sm:px-6 lg:pl-8">
                    <div className="overflow-hidden">
                        <table className="rounded-2xl transition-c-0.5 bg-white dark:bg-[#1e293b] text-black dark:text-white table min-w-full text-center text-sm font-light" {...getTableProps()}>
                            <thead className="font-normal">
                                {headerGroups.map((headerGroup) => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map((column) => (
                                            <th className={`text-left title-box py-5 pl-5 ${parseInt(column.id) >= columns.length - 5 ? '!p-0 !w-28' : ''}`} {...column.getHeaderProps()}>
                                                {column.render('Header')}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody {...getTableBodyProps()}>
                                <TransitionGroup component={null}>
                                    {page.map((row, index) => {
                                        prepareRow(row);
                                        return (
                                            <CSSTransition key={row.id} classNames="fade" timeout={300}>
                                                <tr {...row.getRowProps()}>
                                                    {row.cells.map((cell: any) => {
                                                        const { getCellProps, column, render } = cell;
                                                        return (
                                                            <td
                                                                {...getCellProps()}
                                                                className={`text-left whitespace-nowrap px-6 py-3 ${column.id >= columns.length - 5 ? '!p-0 !w-28' : ''}`}
                                                            >
                                                                {render('Cell')}
                                                            </td>
                                                        );
                                                    })}
                                                </tr>
                                            </CSSTransition>
                                        );
                                    })}
                                </TransitionGroup>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Pagination Controls */}
            <ul className="inline-flex -space-x-px">
                <li>
                    <button
                        onClick={() => gotoPage(0)}
                        disabled={!canPreviousPage}
                        className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        <span className="sr-only">Previous</span>
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </li>
                {pageOptions.map((pageNumber) => (
                    <li key={pageNumber}>
                        <button
                            onClick={() => gotoPage(pageNumber)}
                            className={`px-3 py-2 leading-tight ${pageNumber === pageIndex
                                ? 'text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                                : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                                }`}
                        >
                            {pageNumber + 1}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        onClick={() => gotoPage(pageOptions.length - 1)}
                        disabled={!canNextPage}
                        className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        <span className="sr-only">Next</span>
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default TableItems;