import React, { useState } from "react";
import SideBar from "./side-bar";
import Props from "./props";
import Navbar from "./nav-bar";
import { ThemeProvider } from "next-themes";
import Contain from "./contain";
import DataPage from "../pages/api/extract";
import Data from "../data.json"
let sidebarAction: boolean

function Layout(props: Props) {

  const [open, setOpen] = useState(sidebarAction = false)

  const handleSidebarState = (): void => {
    setOpen(!open)
  }
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <div className="fixed flex h-full  w-screen flex-row  font-inter">
        <SideBar sidebarOpen={open} handleSidebar={handleSidebarState} />
        <Navbar handleSidebar={handleSidebarState} />
        <Contain />
      </div>
    
    </ThemeProvider >
  );
}

export default Layout;
