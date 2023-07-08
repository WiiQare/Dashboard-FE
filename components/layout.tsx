import React, { useState } from "react";
import SideBar from "./molecules/side-bar";
import Navbar from "./molecules/nav-bar";


let sidebarAction: boolean = false
type Props = {
  children: JSX.Element,
};
function Layout(props: Props) {

  const [open, setOpen] = useState(sidebarAction)

  const handleSidebarState = (): void => {
    setOpen(!open)
  }
  return (


    <div className=" bg-[#f0f4fd] dark:bg-[#0f172a] flex flex-col h-screen">
      <div className="flex z-50  w-full">
        <Navbar handleSidebar={handleSidebarState} />
      </div>
      <div className="flex overflow-hidden flex-grow ">
        <SideBar sidebarOpen={open} handleSidebar={handleSidebarState} />
        <div className="flex flex-grow w-full">
          {props.children}
        </div>
      </div>
    </div>


  );
}

export default Layout;