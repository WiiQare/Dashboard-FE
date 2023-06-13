import React from "react";
import MainMenu from "./main-menu";
import Props from "./props";
import Header from "../components/headers";
import Tables from "./table"; import Filter from "./svgs/filter";
import Options from "./svgs/options";
import Cards from "./cards";
;

function Layout(props: Props) {
  return (
    <div className="fixed flex overflow-auto h-screen  w-screen flex-row bg-white font-inter">

      <MainMenu />
      <div className="w-full">

        <Header></Header>
        <div className="mx-auto max-w-screen-2xl p-4 pb-0 2xl:p-10">
          <div className="flex  flex-grow items-center mb-[20px] mt-[-5px] pl-0 justify-between">
            <Filter />
            <Options />
          </div>
          <Cards />
          <Tables />
        </div>
      </div>
    </div>
  );
}

export default Layout;
