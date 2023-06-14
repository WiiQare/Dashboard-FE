import React, { useState } from "react";
import SideBar from "./side-bar";
import Props from "./props";
import Navbar from "./nav-bar";
import Tables from "./table"; import Filter from "./atom/svgs/filtericon";
import Options from "./atom/svgs/options";
import Cards from "./cards";
import { ThemeProvider } from "next-themes";

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
          <Navbar  handleSidebar={handleSidebarState} />
          <div className="p-4 sm:ml-[12rem]">
            <div className="p-4  rounded-lg dark:border-gray-700 mt-20">
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
        </div>
      </div>
    </ThemeProvider >
  );
}

export default Layout;
