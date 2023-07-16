import React, { useState } from "react";
import SideBar from "./molecules/side-bar";
import Navbar from "./molecules/nav-bar";
import Header from "./atom/head";
import { useRouter } from "next/router";


let sidebarAction: boolean = false
type Props = {
  children: JSX.Element,
};
function Layout(props: Props) {
  const router = useRouter();
  const [open, setOpen] = useState(sidebarAction)

  const handleSidebarState = (): void => {
    setOpen(!open)
  }
  return (
    <div>
      <Header />
      <div className="  bg-[#f0f4fd] dark:bg-[#0f172a] flex flex-col h-screen">
        <div className="flex z-50  w-full">
          {!router.route.includes("/auth") && <Navbar handleSidebar={handleSidebarState} />}

        </div>
        <div className="flex overflow-hidden flex-grow ">
          {!router.route.includes("/auth") && <SideBar sidebarOpen={open} handleSidebar={handleSidebarState} />}
          <div className="flex flex-grow w-full ">
            {props.children}
          </div>
        </div>
      </div>
    </div>

  );
}

export default Layout;