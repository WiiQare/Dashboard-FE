import MenuItem, { Menu } from "./side-bar-item";
import HealthIcon from "./atom/svgs/health-Icon";
import PaymentsIcon from "./atom/svgs/payments-Icon";
import BeneficiariesIcon from "./atom/svgs/beneficiaries-Icon";
import MigrantPayersIcon from "./atom/svgs/migrant-payers-Icon";
import ProfileIcon from "./atom/svgs/profile-icon"
import SettingMenuIcon from "./atom/svgs/setting-menu-icon";
import NFTICON from "./atom/svgs/nft-icon";
import React, { useState } from "react";



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
] as Menu[];


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
] as Menu[];

const SideBar: React.FC<myProps> = (props) => {

  const [showSidebar, setShowSidebar] = useState(props.sidebarOpen)
  console.log(props.sidebarOpen)

  return (
    <aside id=" logo-sidebar" className={`
      ${props.sidebarOpen && "translate-x-0"}
       bg-[#0d65d8] fixed top-0 left-0 z-40 w-30 h-screen transition pt-20 -translate-x-full  border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 `
    } aria-label="Sidebar" >
      <div className="bg-[#0d65d8] w-[13rem] h-full px-3 pb-4 overflow-y-auto  dark:bg-gray-800">
        <div className="mt-5 flex flex-col  space-y-4">
          <p className="px-4 pt-3  text-lg text-white/50">Dashboard</p>

          <ul className="text-white flex flex-col space-y-2">
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
          <hr className="ml-4 py-2 text-white/20" />

          <div>
            <p className="px-4 py-3 text-white/50">Administration</p>

            <ul className="text-white">
              {reportMenus.map((menu, index) => (
                <MenuItem
                  key={index}
                  title={menu.title}
                  href={menu.href}
                  icon={menu.icon}
                />
              ))}
            </ul>
          </div>
        </div>
        {/* <div className="block">
          <button className="text-white h3 flex mt-1 w-full items-center justify-center rounded-lg bg-white/20 py-3 px-4">
            <LogoutIcon className="mr-3" /> Logout
          </button>
        </div> */}
      </div>

    </aside >
  );
}

export default SideBar;
