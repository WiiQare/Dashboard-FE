import React from "react";
import Table from "./molecules/table";
import Cards from "./molecules/cards";

interface TableProps {
    columns: any[];
    groups: any[];
    data: any[];
    cardsData: any[];
    currentPage: string,
    children: JSX.Element;
}
function Content({ children, columns, cardsData, data, groups, currentPage }: TableProps) {
    return (

        <div className="overflow-y-auto p-4 h-full w-full sm:px-4">
            <div className="grid grid-cols-1 gap-4 mb-4">
                <div className="w-full">
                    <Cards data={cardsData} />
                    <div className="transition-c-0.5">
                        <Table
                            propsColumns={columns}
                            propsGroups={groups}
                            data={data}
                            currentPage={currentPage}
                        />
                        {children}
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Content;
