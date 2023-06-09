import Link from "next/link";
import React from "react";
import LogoutIcon from "./logout-icon";
import MenuItem, { Menu } from "./menu-item";
import BellMenuIcon from "./svgs/bell-menu-icon";
import BookingMenuIcon from "./svgs/booking-menu-icon";
import CarMenuIcon from "./svgs/car-menu-icon";
import DashboardMenuIcon from "./svgs/dashboard-menu-icon";
import Logo from "./svgs/logo";
import PaymentMenuIcon from "./svgs/payment-menu-icon";
import ReportMenuIcon from "./svgs/report-menu-icon";
import SettingMenuIcon from "./svgs/setting-menu-icon";
import TransactionMenuIcon from "./svgs/transaction-menu-icon";

const menus = [
  { icon: DashboardMenuIcon, title: "Migrant Payers", href: "/" },
  { icon: CarMenuIcon, title: "Beneficiaries", href: "/drivers" },
  { icon: BookingMenuIcon, title: "Payments", href: "/bookings" },
  { icon: BellMenuIcon, title: "Health Care Provider", href: "/notifications" },
  { icon: BellMenuIcon, title: "NFT Vouchers", href: "/notifications" },
] as Menu[];

const reportMenus = [

  {
    icon: ReportMenuIcon,
    title: "Profile",
    href: "/car-reports",
  },
  {
    icon: SettingMenuIcon,
    title: "Setting",
    href: "/car-reports",
  },
] as Menu[];

function MainMenu() {
  return (
    <div className="flex w-60 flex-none flex-col justify-between bg-[#0d65d8] p-6 text-white">
      <div className="flex flex-col space-y-5">
        {/* Logo */}
        <div>
          <Link href="/" className="block px-2 py-6">
            <Logo />
          </Link>
        </div>
        <p className="px-4 py-3 text-white/50">Dashboard</p>

        <div className="flex flex-col space-y-4">
          <ul className="flex flex-col space-y-2">
            {menus.map((menu, index) => (
              <MenuItem
                key={index}
                title={menu.title}
                href={menu.href}
                icon={menu.icon}
              />
            ))}
          </ul>

          <hr className="ml-4 py-2 text-white/20" />

          <div>
            <p className="px-4 py-3 text-white/50">Administration</p>

            <ul>
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
      </div>

      <div>
        <button className="h3 flex w-full items-center justify-center rounded-lg bg-white/20 py-3 px-4">
          <LogoutIcon className="mr-3" /> Logout
        </button>
      </div>
    </div>
  );
}

export default MainMenu;
