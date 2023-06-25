// import { useState } from 'react';
// import { useAppDispatch } from '../store';

// const Profile: React.FC = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const dispatch = useAppDispatch();

//     const toggleDropdown = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleClickOutside = (event: MouseEvent) => {
//         const target = event.target as HTMLElement;
//         if (!target.closest('.profile-dropdown')) {
//             setIsOpen(false);
//         }
//     };

//     // Listen for clicks outside the dropdown to close it
//     useEffect(() => {
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     const handleLogout = () => {
//         // Dispatch your logout action here
//         dispatch(logout());
//     };

//     return (
//         <div className="profile-dropdown">
//             <img
//                 src="/path/to/profile-picture.png"
//                 alt="Profile Picture"
//                 onClick={toggleDropdown}
//             />
//             {isOpen && (
//                 <ul className="dropdown-menu">
//                     <li>My Account</li>
//                     <li onClick={handleLogout}>Logout</li>
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default Profile;
