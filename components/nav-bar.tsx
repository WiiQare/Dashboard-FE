import React, { useState } from "react";
import SearchIcon from "./atom/svgs/search-icon";
import Image from "next/image";
import user from "../public/images/user-01.png"
import Link from "next/link";
import Logo from "./atom/images/logo";
interface myProps {
    handleSidebar(): void


}

const Navbar: React.FC<myProps> = (props) => {

    return (
        <div>
            <nav className=" bg-[#0d65d8] fixed top-0 z-50 w-full  dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">

                    <div className="grid grid-cols-2 gap4 mb-4">
                        <div className="flex gap-2">
                            {/* <!--logo start --> */}
                            <div className="flex items-center ">

                                <div className="flex items-center justify-start">
                                    <button onClick={props.handleSidebar} type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                        <span className="sr-only">Open sidebar</span>
                                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                        </svg>
                                    </button>

                                    <Link href="" className="block px-2 w-[12rem] pt-2">
                                        <Logo />
                                    </Link>

                                </div>
                            </div>
                            {/* <!--logo End --> */}

                            {/* <!--Search start --> */}
                            <div className="flex items-left  mt-3">
                                <div className=" sm:block w-[12rem] search sm:w-[16rem] bg-white ">
                                    <form action="https://formbold.com/s/unique_form_id" method="POST" className="mt-[6px]">
                                        <div className="relative left-0">
                                            <button className="absolute top-1/2 left-[85%] -translate-y-1/2">
                                                {/* dark:fill-bodydark dark:hover:fill-primary */}
                                                <SearchIcon></SearchIcon>
                                            </button>

                                            <input type="text" placeholder="Type to search..." className="w-full bg-transparent pr-4 pl-9 focus:outline-none"></input>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {/* <!--Search End --> */}
                        </div>
                        <div className="flex w-fit ml-auto justify-end">

                            <div className="flex items-center">
                                <div className="flex items-center ml-3">
                                    <div>
                                        <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                            <span className="sr-only">Open user menu</span>
                                            <Image className="rounded-full transform-rotate-0.2"
                                                src={user}
                                                width={50}
                                                height={50}
                                                alt="User"
                                            />  </button>
                                    </div>
                                    <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                                        <div className="px-4 py-3" role="none">
                                            <p className="text-sm text-gray-900 dark:text-white" role="none">

                                            </p>
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">

                                            </p>
                                        </div>
                                        <ul className="py-1" role="none">
                                            <li>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </nav>
        </div>
    );

}

export default Navbar;
