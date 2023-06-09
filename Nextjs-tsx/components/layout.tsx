import React from "react";
import MainMenu from "./main-menu";
import Props from "./props";
import Header from "../components/headers";
import Tables from "./table"; import Filter from "./svgs/filter";
import Options from "./svgs/options";
;

function Layout(props: Props) {
  return (
    <div className="flex h-screen  w-screen flex-row bg-white font-inter">
      <MainMenu />
      <div className="w-full">

        <Header></Header>
        <div className="flex flex-grow items-center mb-[20px] mt-[20px] pl-0 justify-between">
          <Filter />
          <Options />
        </div>
        <Tables />
      </div>
    </div>
  );
}

export default Layout;
