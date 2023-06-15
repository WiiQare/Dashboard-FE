import React, { useState } from "react";
import Props from "./props";
import Tables from "./table"; import Filter from "./atom/svgs/filtericon";
import Options from "./atom/svgs/options";
import Cards from "./cards";


let sidebarAction: boolean

function Contain(props: Props) {

    const [open, setOpen] = useState(sidebarAction = false)

    const handleSidebarState = (): void => {
        setOpen(!open)
    }
    return (

        <div className="transition p-4 h-fit   sm:ml-[12rem]">
            
        
            <div className="p-4   mt-20">
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex justify-start">
                        <Filter />
                    </div>
                    <div className="flex items-center justify-end">
                        <Options />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 mb-4">
                    <Cards />
                </div>

                <Tables />
            </div>
        </div>
    );
}
export default Contain;