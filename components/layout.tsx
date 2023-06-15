import React, { useState } from "react";
import SideBar from "./side-bar";
import Props from "./props";
import Navbar from "./nav-bar";
import { ThemeProvider } from "next-themes";
import Contain from "./contain";

let sidebarAction: boolean

function Layout(props: Props) {

  const [open, setOpen] = useState(sidebarAction = false)

  const handleSidebarState = (): void => {
    setOpen(!open)
  }
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <div className="fixed flex h-screen  w-screen flex-row  font-inter">
        <SideBar sidebarOpen={open} handleSidebar={handleSidebarState} />
        <div className=" overflow-y-auto over bg-white dark:bg-black flex-1">
          <Navbar handleSidebar={handleSidebarState} />
          <div>
            <Contain />
          </div>
        </div>
      </div>
    </ThemeProvider >
  );
}

export default Layout;
