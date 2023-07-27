import React from "react";
import Table from "./molecules/table";
import Cards from "./molecules/cards";

interface TableProps {
    columns: any[];
    groups: any[];
    data: any[];
    cardsData: any[];
    children: JSX.Element;
}
function Content({ children, columns, cardsData, data, groups }: TableProps) {
    return (
        <div className="py-4 transition-1 p-4 h-full w-full sm:px-4 overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex justify-start"></div>
                <div className="flex items-center justify-end">
                    {/* <Options /> */}
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 mb-4">
                <Cards data={cardsData} />
                <div className="transition-c-0.5">
                    <Table
                        propsColumns={columns}
                        propsGroups={groups}
                        data={data}
                        currentPage={0}
                        pageSize={0}
                    />
                    {children}
                </div>
            </div>
        </div>
    );
}
export default Content;
