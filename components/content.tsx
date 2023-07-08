import React from "react";
import Options from "./atom/svgs/options";
import Table from "./molecules/table";

interface TableProps {
    columns: any[];
    groups: any[]
    data: any[];
    children: JSX.Element;
}
function Content({ children, columns, data, groups }: TableProps) {

    return (
        <div className="py-4 transition-1 overflow-y-auto p-4 h-full w-full sm:px-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex justify-start">
                </div>
                <div className="flex items-center justify-end">
                    <Options />
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 mb-4">
                {children}
                <div className=" transition-c-0.5">
                    <Table propsColumns={columns} propsGroups={groups} data={data} />
                </div>
            </div>
        </div>
    );
}
export default Content;