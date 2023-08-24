import SearchIcon from '@public/svg/search-icon';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '@/redux/searchReducer';

const Search: React.FC = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setSearchValue(value));
  };

  return (
    <div className="flex ml-[-4px] search items-left  mt-3">
      <div className=" sm:block w-[12rem] search-input ransition sm:w-[15rem] bg-white border ">
        <form
          action="https://formbold.com/s/unique_form_id"
          method="POST"
          className="mt-[6px]"
        >
          <div className="relative left-0">
            <button className="absolute top-1/2 left-[85%] -translate-y-1/2">
              <SearchIcon />
            </button>
            <input
              type="text"
              onChange={handleSearchChange}
              placeholder="Search..."
              className="w-full bg-transparent pr-4 pl-9 focus:outline-none"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
