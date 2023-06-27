import React, { useState } from "react";
import SideBar from "../components/side-bar";
import Props from "../components/props";
import Navbar from "../components/nav-bar";
import { ThemeProvider } from "next-themes";
import { Provider } from 'react-redux';
import store from "../redux/store/store";

let sidebarAction: boolean

export default function Vouchers(props: Props) {

    const [open, setOpen] = useState(sidebarAction = false)

    const handleSidebarState = (): void => {
        setOpen(!open)
    }
    return (
        <ThemeProvider enableSystem={false} attribute="class">
            <Provider store={store}>
                <div className="fixed flex h-full  w-screen flex-row  font-inter">
                    <SideBar sidebarOpen={open} handleSidebar={handleSidebarState} />
                    <Navbar handleSidebar={handleSidebarState} />
                </div>
            </Provider>
        </ThemeProvider >
    );
}


