import MenuItem, { Menu } from "./ molecules /side-bar-item";
import HealthIcon from "./atom/svgs/health-Icon";
import PaymentsIcon from "./atom/svgs/payments-Icon";
import BeneficiariesIcon from "./atom/svgs/beneficiaries-Icon";
import PayersIcon from "./atom/svgs/payers-Icon";
import ProfileIcon from "./atom/svgs/profile-icon";
import SettingMenuIcon from "./atom/svgs/setting-menu-icon";
import NFTICON from "./atom/svgs/voucher-icon";
import React from "react";



interface myProps {
  handleSidebar(): void;
  sidebarOpen: boolean;
}

const menus = [
  { icon: PayersIcon, title: "Payers", href: "/" },
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

const SideBar = (props: { sidebarOpen: any; handleSidebar: any; }) => {
  // Remove the useState hook for showSidebar
  // Access the sidebarOpen state from Redux props instead

  return (
    <>
      <div
        id=" logo-sidebar"
        className={`
      ${props.sidebarOpen && "translate-x-0"}
       w-30 transition-0.5 fixed top-0 left-0 z-40 h-screen -translate-x-full border-r border-gray-200  bg-white pt-20 dark:border-none dark:border-gray-700 dark:bg-gray-900 sm:translate-x-0 `}
        aria-label="Sidebar"
      >
        <div className="transition-c-0.5 h-full w-[13rem] overflow-y-auto bg-white px-3 pb-4  dark:bg-gray-900">
          <div className="mt-5 flex flex-col  space-y-4">
            <p className="px-4 pt-3  text-lg text-gray-500 dark:text-white/50">
              Dashboard
            </p>
            <button
              onClick={props.handleSidebar}
              onBlur={props.handleSidebar}
              type="button"
              className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="h-6 w-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <ul className="flex flex-col space-y-2 text-black dark:text-white">
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
              <p className="px-4 py-3 text-black dark:text-white/50">
                Administration
              </p>

              <ul className="text-black dark:text-white">
                {reportMenus.map((menu, index) => (
                  <MenuItem
                    key={index}
                    title={menu.title}
                    href={menu.href}
                    icon={menu.icon}
                  />
                ))}
                <div className="ml-28 mt-5 "></div>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default SideBar;
