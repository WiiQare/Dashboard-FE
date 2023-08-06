import React from 'react';
import TableSkeleton from '../atom/skeleton/tableSkeleton';
import CardSkeleton from '../atom/skeleton/cardSkeleton';

interface variable {
    number: number,
    row: number
}

const PageSkeleton = ({ number, row }: variable) => {


    return (
        <div className="transition-1 overflow-y-auto p-4 h-full w-full sm:px-4">
        <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="w-full">
            <CardSkeleton number={number} />
                <div className="transition-c-0.5">
                <TableSkeleton row={row} />
                </div>
            </div>
        </div>
    </div>           
    );
};

export default PageSkeleton;
