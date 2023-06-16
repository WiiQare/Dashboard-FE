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
        <div className=" transition-c-0.5 bg-[#f0f4fd] dark:bg-[#0f172a] overflow-y-auto over  flex-1">

            <div className=" h-full">
                <div className="transition-1 p-4 h-full sm:ml-[12rem]">


                    <div className="py-4  sm:px-4 mt-20">
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
                        <div className=" transition-c-0.5">
                            <Tables />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contain;