import React, { useState } from "react";
import SideBar from "../components/side-bar";
import Props from "../components/props";
import Navbar from "../components/nav-bar";
import { ThemeProvider } from "next-themes";
import { Provider } from 'react-redux';
import store from "../redux/store/store";

let sidebarAction: boolean

export default function Providers(props: Props) {

    const [open, setOpen] = useState(sidebarAction = false)

    const handleSidebarState = (): void => {
        setOpen(!open)
    }
    return (
        <></>
    );
}


