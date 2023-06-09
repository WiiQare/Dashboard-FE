import React from "react";


function Filter(props: Props) {
    return (


        // < !--Filter Start-- >
        <div>
            <div className="flex-none p-2">
            <button
                // onClick={showDropdownOptions()}
                className="flex flex-row justify-between px-2 py-2 text-gray-700 focus:outline-none focus:border-blue-600">
                <span className="select-none">Filter</span>

                <svg id="arrow-down" className="hidden w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                        clip-rule="evenodd" />
                </svg>
                <svg id="arrow-up" className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd" />
                </svg>
            </button>
            <div id="options" className="hidden w-48 py-2 mt-2 bg-white absolute z-1 mt-[-1px]">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Item
                    1</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Item
                    2</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Item
                    3</a>
            </div>
        </div>
        </div >
        // <!--Filter End-- >
    )
}

export default Filter;

