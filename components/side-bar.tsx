import MenuItem, { Menu } from "./side-bar-item";
import HealthIcon from "./atom/svgs/health-Icon";
import PaymentsIcon from "./atom/svgs/payments-Icon";
import BeneficiariesIcon from "./atom/svgs/beneficiaries-Icon";
import MigrantPayersIcon from "./atom/svgs/migrant-payers-Icon";
import ProfileIcon from "./atom/svgs/profile-icon"
import SettingMenuIcon from "./atom/svgs/setting-menu-icon";
import NFTICON from "./atom/svgs/nft-icon";
import React, { useState } from "react";
import DarkMode from "./atom/dark-mode";



interface myProps {
  handleSidebar(): void
  sidebarOpen: boolean

}

const menus = [
  { icon: MigrantPayersIcon, title: "Payers", href: "/" },
  { icon: BeneficiariesIcon, title: "Beneficiaries", href: "/Beneficiaries" },
  { icon: PaymentsIcon, title: "Payments", href: "/Payments" },
  { icon: HealthIcon, title: "Provider", href: "/Health" },
  { icon: NFTICON, title: "Vouchers", href: "/NFT" },
] as unknown as Menu[];


const reportMenus = [
  {
    icon: ProfileIcon,
    title: "Profile",
    href: "/car-reports",
  },
  {
    icon: SettingMenuIcon,
    title: "Settings",
    href: "/car-reports",
  },
] as unknown as Menu[];

const SideBar: React.FC<myProps> = (props) => {

  const [showSidebar, setShowSidebar] = useState(props.sidebarOpen)
  console.log(props.sidebarOpen)

  return (
    <aside id=" logo-sidebar" className={`
      ${props.sidebarOpen && "translate-x-0"}
       bg-white fixed top-0 left-0 z-40 w-30 h-screen transition-0.5 pt-20 -translate-x-full  border-r border-gray-200 dark:border-none sm:translate-x-0 dark:bg-gray-900 dark:border-gray-700 `
    } aria-label="Sidebar" >
      <div className="transition-c-0.5 bg-white w-[13rem] h-full px-3 pb-4 overflow-y-auto  dark:bg-gray-900">
        <div className="mt-5 flex flex-col  space-y-4">
          <p className="px-4 pt-3  text-lg text-gray-500 dark:text-white/50">Dashboard</p>
          <button onClick={props.handleSidebar} onBlur={props.handleSidebar} type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
          </button>
          <ul className="text-black dark:text-white flex flex-col space-y-2">
            {menus.map((menu, index) => (
              <MenuItem
                key={index}
                title={menu.title}
                href={menu.href}
                icon={menu.icon}
              />
            ))}
          </ul>
          {/* <------components-----> */}
          <hr className="ml-4 py-2 text-black dark:text-white/20" />

          <div>
            <p className="px-4 py-3 text-black dark:text-white/50">Administration</p>

            <ul className="text-black dark:text-white">
              {reportMenus.map((menu, index) => (
                <MenuItem
                  key={index}
                  title={menu.title}
                  href={menu.href}
                  icon={menu.icon}
                />
              ))}
              <div className="ml-28 mt-5 ">

              </div>
            </ul>
          </div>
        </div>
        {/* <div className="block">
          <button className="text-white dark:text-black h3 flex mt-1 w-full items-center justify-center rounded-lg bg-white/20 py-3 px-4">
            <LogoutIcon className="mr-3" /> Logout
          </button>
        </div> */}
      </div>

    </aside >
  );
}

export default SideBar;
