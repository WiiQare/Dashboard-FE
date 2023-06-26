import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import { toggleDropdown } from '../redux/actions/actions';
import user from '../public/images/user-01.png'
import Image from "next/image";
// components/Profile.tsx// components/Profile.tsx

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
                    src={user}
                    width={50}
                    height={50}
                    alt="User"
                />
            </div>
            {isDropdownVisible && isDropdownOpen && (
                <div className="p-2 absolute ml-[-7rem] mt-1 rounded-md bg-white dark:border-gray-700 dark:bg-[#050e20d6]" ref={dropdownRef}>
                 
                </div>
            )}
        </div>
    );
};

export default Profile;
