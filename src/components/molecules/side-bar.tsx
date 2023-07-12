import MenuItem, { Menu } from "./side-bar-item";
import HealthIcon from "@public/svg/health-Icon";
import PaymentsIcon from "@public/svg/payments-Icon";
import BeneficiariesIcon from "@public/svg/beneficiaries-Icon";
import PayersIcon from "@public/svg/payers-Icon";
import ProfileIcon from "@public/svg/profile-icon";
import SettingMenuIcon from "@public/svg/setting-menu-icon";
import NFTICON from "@public/svg/voucher-icon";
import React from "react";



const Submenus = [
  { icon: HealthIcon, title: "Provider", href: "/Payments/Provider", },
  { icon: PayersIcon, title: "Payers", href: "/Payments/Payers", },
];

const menus = [
  { icon: PayersIcon, title: "Payers", href: "/Payers", },
  { icon: BeneficiariesIcon, title: "Beneficiaries", href: "/Beneficiaries" },
  { icon: PaymentsIcon, title: "Payments", submenu: Submenus },
  { icon: HealthIcon, title: "Provider", href: "/Providers", },
  { icon: NFTICON, title: "Vouchers", href: "/Vouchers", },
] as unknown as Menu[];

const reportMenus = [
  {
    icon: ProfileIcon,
    title: "Profile",
    href: "/profile",
  },
  {
    icon: SettingMenuIcon,
    title: "Settings",
    href: "/settings",
  },
] as unknown as Menu[];

const SideBar = (props: { sidebarOpen: any; handleSidebar: any }) => {
  return (
    <div
      id=" logo-sidebar"
      className={`
      ${props.sidebarOpen ? "translate-x-0 " : 'max-sm:hidden'}
      w-30 h-full transition-0.5   left-0 z-40 -translate-x-full border-r border-gray-200  bg-white pt-2 dark:border-none dark:border-gray-700 dark:bg-gray-900 sm:translate-x-0  `}
      aria-label="Sidebar"
    >
      <div className="transition-c-0.5 h-full w-[13rem] overflow-x-auto bg-white px-3 pb-4  dark:bg-gray-900">
        <div className=" flex flex-col  space-y-4">
          <p className="px-4 pt-3  text-lg text-gray-500 dark:text-white/50">
            Dashboard
          </p>
          <ul className="flex flex-col space-y-2 text-black dark:text-white">
            {menus.map((menu, index) => (
              <MenuItem
                key={index}
                submenu={menu.submenu}
                title={menu.title}
                href={menu.href}
                icon={menu.icon}
              />
            ))}
          </ul>
          {/* <------components-----> */}
          <hr className="ml-4 py-2 text-black dark:text-white/20" />

          {/* <div>
            <p className="px-4 py-3 text-black dark:text-white/50">
              Administration
            </p>

            <ul className="text-black dark:text-white">
              {reportMenus.map((menu, index) => (
                <MenuItem
                  key={index}
                  submenu={menu.submenu}
                  title={menu.title}
                  href={menu.href}
                  icon={menu.icon}
                />
              ))}
              <div className="ml-28 mt-5 "></div>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
