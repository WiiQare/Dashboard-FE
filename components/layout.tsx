import React, { useState } from "react";
import SideBar from "./side-bar";
import Props from "./props";
import Navbar from "./nav-bar";
import { ThemeProvider } from "next-themes";
import Contain from "./contain";
import { Provider } from 'react-redux';
import store from "../redux/store";

let sidebarAction: boolean

function Layout(props: Props) {

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
          <Contain />
        </div>
      </Provider>
    </ThemeProvider >
  );
}

export default Layout;
