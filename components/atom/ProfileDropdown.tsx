import React, { useState } from "react";

const Profile: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="profile-dropdown">
            <img
                className="profile-picture"
                src="path_to_your_profile_picture"
                alt="Profile"
                onClick={handleDropdown}
            />
            {isOpen && (
                <ul className="dropdown-menu">
                    {/* Dropdown menu items */}
                    <li>Menu Item 1</li>
                    <li>Menu Item 2</li>
                    <li>Menu Item 3</li>
                </ul>
            )}
        </div>
    );
};

export default Profile;
