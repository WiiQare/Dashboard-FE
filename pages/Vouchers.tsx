import React, { useState } from "react";

import store from "../redux/store/store";

let sidebarAction: boolean

export default function Vouchers() {

    const [open, setOpen] = useState(sidebarAction = false)

    const handleSidebarState = (): void => {
        setOpen(!open)
    }
    return (
        <></>
    );
}


