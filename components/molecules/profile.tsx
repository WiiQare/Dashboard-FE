import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { toggleDropdown } from '../../redux/actions/actions';

import Image from "next/image";
import React from 'react';

const Profile = () => {
    const dispatch = useDispatch();
    const isDropdownVisible = useSelector(
        (state: RootState) => state.dropdown.isVisible
    );

    const dropdownRef = useRef<HTMLDivElement>(null);
    const profilePictureRef = useRef<HTMLDivElement>(null);

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleProfilePictureClick = () => {
        dispatch(toggleDropdown());
        setDropdownOpen(!isDropdownOpen);
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
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <div className="profile-dropdown">
            <div
                className="profile-picture"
                onClick={handleProfilePictureClick}
                ref={profilePictureRef}
            >
                <Image
                    className="transform-rotate-0.2 mt-1 rounded-full"
                    src="/images/user-01.png"
                    width={50}
                    height={50}
                    alt="Users"
                />
            </div>
            {isDropdownVisible && isDropdownOpen && (
                <div className="p-2 absolute ml-[-8rem] mt-1 rounded-md bg-white dark:border-gray-700 dark:bg-[#050e20d6]" ref={dropdownRef}>
                    <div id="dropdownSmall" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-[#050e20d6] dark:divide-gray-600">
                        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                            <div>Edward Newgate</div>
                            <div className="font-medium truncate">whiteB@Oda.com</div>
                        </div>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSmallButton">
                            <li className='hover:border-indigo-700'>
                                <a href="#" className="block px-4 py-2 border-r-4 border-transparent hover:border-indigo-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                            </li>

                            <li>
                                <a href="#" className="block px-4 py-2 border-r-4 border-transparent hover:border-indigo-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 border-r-4 border-transparent hover:border-indigo-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                            </li>
                        </ul>
                        <div className="py-2">
                            <a href="#" className="block px-4 py-2 border-r-4 border-transparent hover:border-red-600 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};

export default Profile;