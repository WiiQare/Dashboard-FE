import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { toggleDropdown } from '../../redux/actions/actions';
import Image from 'next/image';
import Router from 'next/router';
import { signOut, useSession } from 'next-auth/react';
import { UserType } from '@/Interfaces/interfaces';

const Profile = (): JSX.Element => {
  const dispatch = useDispatch();
  const isDropdownVisible = useSelector(
    (state: RootState) => state.dropdown.isVisible,
  );
  const dropdownRef = useRef<HTMLDivElement>(null);
  const profilePictureRef = useRef<HTMLDivElement>(null);
  const { data: session } = useSession();
  const userState = session?.user as UserType;
  const handleProfilePictureClick = () => {
    dispatch(toggleDropdown());
  };

  const handleOutsideClick = (event: MouseEvent) => {
    const targetElement = event.target as Element;

    if (
      profilePictureRef.current &&
      dropdownRef.current &&
      !profilePictureRef.current.contains(targetElement) &&
      !dropdownRef.current.contains(targetElement)
    ) {
      dispatch(toggleDropdown());
    }
  };

  const handleSignOut = () => {
    signOut();
    Router.push('/auth/Login');
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
  console.log(userState);
  return (
    <div className="profile-dropdown">
      <div
        className="profile-picture"
        onClick={handleProfilePictureClick}
        ref={profilePictureRef}
      >
        <Image
          className="transform-rotate-0.2 mt-2 rounded-full"
          src="/images/user-01.png"
          width={40}
          height={50}
          alt="Users"
        />
      </div>
      {isDropdownVisible && (
        <div
          className="absolute mt-1 -ml-32 rounded-md bg-white dark:border-gray-700 dark:bg-[#050e20d6]"
          ref={dropdownRef}
        >
          <div
            id="dropdownSmall"
            className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-[#050e20d6] dark:divide-gray-600"
          >
            <div className="px-4 py-3  ">
              <div className="font-medium truncate">
                <span className="block text-sm dark:text-white font-bold text-black ">
                  {userState?.email?.split('@')[0]}
                </span>
                <span className="block text-sm mt-2 font-medium dark:text-white text-gray-700 truncate">
                  {userState?.email}
                </span>
                <span className="block text-sm mt-1 font-medium dark:text-white text-gray-500 truncate">
                  {userState?.data.names}
                </span>
              </div>
            </div>
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownSmallButton"
            >
              <li className="hover:border-indigo-700">
                <button
                  onClick={() => Router.push('/dashboard')}
                  className="block px-4 py-2 w-full text-start border-l-4 border-transparent hover:border-indigo-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={() => Router.push('/settings')}
                  className="block px-4 py-2 w-full text-start border-l-4 border-transparent hover:border-indigo-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </button>
              </li>
            </ul>
            <div className="py-2">
              <button
                onClick={handleSignOut}
                className="block px-4 py-2 w-full text-start  border-l-4 border-transparent hover:border-red-600 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
