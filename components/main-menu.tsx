import Link from "next/link";
import React from "react";
import LogoutIcon from "./logout-icon";
import MenuItem, { Menu } from "./menu-item";
import HealthIcon from "./svgs/health-Icon";
import PaymentsIcon from "./svgs/payments-Icon";
import BeneficiariesIcon from "./svgs/beneficiaries-Icon";
import MigrantPayersIcon from "./svgs/migrant-payers-Icon";
import Logo from "./svgs/logo";
import ProfileIcon from "./svgs/profile-icon"
import SettingMenuIcon from "./svgs/setting-menu-icon";
import NFTICON from "./svgs/nft-icon";

const menus = [
  { icon: MigrantPayersIcon, title: "Migrant Payers", href: "/" },
  { icon: BeneficiariesIcon, title: "Beneficiaries", href: "/Beneficiaries" },
  { icon: PaymentsIcon, title: "Payments", href: "/Payments" },
  { icon: HealthIcon, title: "Health Care Provider", href: "/Health" },
  { icon: NFTICON, title: "NFT Vouchers", href: "/NFT" },
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

function MainMenu() {
  return (
    <div className="flex w-60  h-fit flex-none flex-col justify-between bg-[#0d65d8] p-6 text-white">
      <div className="flex py-[inherit] flex-col space-y-5">
        {/* Logo */}
        <div>
          <Link href="" className="block px-2 pt-2">
            <Logo />
          </Link>
        </div>
        <p className="px-4 pt-3  text-lg text-white/50">Dashboard</p>

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
          {/* <------components-----> */}
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
