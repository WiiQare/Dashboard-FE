import React, { useState } from "react";


let sidebarAction: boolean

export default function Providers() {

    const [open, setOpen] = useState(sidebarAction = false)

    const handleSidebarState = (): void => {
        setOpen(!open)
    }
    return (
        <></>
    );
}


