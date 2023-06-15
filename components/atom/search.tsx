import React from "react";
import SearchIcon from "./svgs/search-icon";
function Search() {
    return (
        <div className="flex ml-[-4px] search items-left  mt-3">
            <div className=" sm:block w-[12rem] search-input ransition sm:w-[15rem] bg-white ">
                <form action="https://formbold.com/s/unique_form_id" method="POST" className="mt-[6px]">
                    <div className="relative left-0">
                        <button className="absolute top-1/2 left-[85%] -translate-y-1/2">
                            <SearchIcon/>
                        </button>
                        <input type="text" placeholder="Type to search..." className="w-full bg-transparent pr-4 pl-9 focus:outline-none"></input>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Search;
