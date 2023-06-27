import React from "react";
import PrinterIcon from "./printe-icon";
import PDFIcon from "./pdf-icon";
import MailIcon from "./mail-icon";

function Options() {
    return (
        <div>
            <div className="flex dark:border-white">
                <div className="w-auto h-auto action-box p-[8px] dark:border-slate-500">
                    <PrinterIcon />
                </div>
                <div className="w-auto h-auto  action-box p-[8px]  dark:border-slate-500">
                    <PDFIcon />
                </div>
                <div className="w-auto h-auto action-box  p-[8px]  dark:border-slate-500">
                    <MailIcon />
                </div>
            </div>

        </div>
    )
}

export default Options;
