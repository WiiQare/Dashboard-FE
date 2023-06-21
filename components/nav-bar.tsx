import React from "react";

import Image from "next/image";
import user from "../public/images/user-01.png";
import Link from "next/link";
import Logo from "./atom/images/logo";
import Search from "./atom/search";
import DarkMode from "./ molecules /dark-mode";
import { Dropdown, Text } from "@nextui-org/react";

interface myProps {
  handleSidebar(): void;
}

const Navbar: React.FC<myProps> = (props) => {
  return (
    <div>
      <nav className=" transition-c-0.5 fixed top-0 z-50 w-full border-b border-gray-200 bg-white dark:border-none dark:border-gray-700 dark:bg-[#050e20d6]">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="gap4 mb-4 grid grid-cols-2">
            <div className="flex gap-2">
              {/* <!--logo start --> */}
              <div className="flex items-center  ">
                <div className="flex items-center justify-start">
                  <button
                    onClick={props.handleSidebar}
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
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                      ></path>
                    </svg>
                  </button>

                  <Link href="" className="block w-[12rem] px-2 pt-2">
                    <Logo />
                  </Link>
                </div>
              </div>
              {/* <!--logo End --> */}

              {/* <!--Search start --> */}
              <Search />
              {/* <!--Search End --> */}
            </div>
            <div className=" ml-auto flex w-fit flex-row justify-end">
              <div className="mr-5 h-5 pt-3">
                <DarkMode />
              </div>

              <Dropdown placement="bottom-left" >
                <Dropdown.Trigger>
                  <button type="button" className="flex rounded-full text-sm">
                    <Image
                      className="transform-rotate-0.2 rounded-full"
                      src={user}
                      width={50}
                      height={50}
                      alt="User"
                    />{" "}
                  </button>
                </Dropdown.Trigger>
                <Dropdown.Menu
                  color="secondary"
                  className="dark:bg-[#060f21] !w-12 "
                  aria-label="Avatar Actions"
                >
                  <Dropdown.Item
                    key="profile"
                    className="w-full dark:text-white "
                    css={{
                      height: "$18",
                    }}
                  >
                    <Text b color="inherit" css={{ d: "flex" }}>
                      Edward Newgate
                    </Text>
                    <Text
                      b
                      color="inherit"
                      css={{ d: "flex", color: "$blue400" }}
                    >
                      Admin
                    </Text>
                  </Dropdown.Item>
                  <Dropdown.Item
                    key="settings"
                    className="dark:text-white"
                    withDivider
                  >
                    My Settings
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dark:text-white"
                    key="team_settings"
                  >
                    Team Settings
                  </Dropdown.Item>
                  <Dropdown.Item key="logout" className="logout" color="error">
                    Log Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
