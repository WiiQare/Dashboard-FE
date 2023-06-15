import React, { useState } from "react";
import SearchIcon from "./atom/svgs/search-icon";
import Image from "next/image";
import user from "../public/images/user-01.png"
import Link from "next/link";
import Logo from "./atom/images/logo";
import Search from "./atom/search";
interface myProps {
    handleSidebar(): void
}

const Navbar: React.FC<myProps> = (props) => {
    let dropDownState: boolean
    const [dropDown, setDropDown] = useState(dropDownState = false)
    const handleDropDown = (): void => {
        setDropDown(!dropDown)
    }
    return (
        <div>
            <nav className=" bg-white fixed top-0 z-50 w-full border-b border-gray-200 dark:border-none dark:bg-[#050e20d6] dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="grid grid-cols-2 gap4 mb-4">
                        <div className="flex gap-2">
                            {/* <!--logo start --> */}
                            <div className="flex items-center  ">

                                <div className="flex items-center justify-start">
                                    <button onClick={props.handleSidebar} onBlur={props.handleSidebar} type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
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
                            <Search />
                            {/* <!--Search End --> */}
                        </div>
                        <div className="flex w-fit ml-auto justify-end">

                            <div className="flex items-center">
                                <div className="flex items-center ml-3 flex-col gap-3">
                                    <div className="flex gap-2">
                                        <span className=" text-right-2 hidden sm:block lg:block">
                                            <span className="block text-sm mt-2 font-medium text-black dark:text-white">Edward Newgate</span>
                                            <span className="block text-xs font-medium text-blue-300 ml-20 ">Admin</span>
                                        </span>
                                        <button type="button" onFocus={handleDropDown} onBlur={handleDropDown} className=" flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                            <span className="sr-only">Profile menu</span>
                                            <Image className="rounded-full transform-rotate-0.2"
                                                src={user}
                                                width={50}
                                                height={50}
                                                alt="User"
                                            />  </button>
                                    </div>
                                    <div className={`   ${!dropDown && 'hidden'}     z-50  transiton-1  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow  absolute mt-14 ml-[-2rem] w-[15%]  dark:divide-gray-600" id="dropdown-user`}>

                                        <div className="px-4 py-3" role="none">
                                            <p className="text-sm text-gray-900 dark:text-white" role="none">
                                                Edward Newgate
                                            </p>
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                                whiteb@twopiece.com
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
