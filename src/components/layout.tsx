import React, { useState, useEffect } from 'react';
import SideBar from './molecules/side-bar';
import Navbar from './molecules/nav-bar';
import Header from './atom/head';
import { useRouter } from 'next/router';
import { UserContext } from '@/context/UserContext';
import Loader from './atom/loader';

let sidebarAction: boolean = false;

type Props = {
  children: JSX.Element;
};

interface UserInterface {
  type: string;
  userId: string;
  phoneNumber: string;
  names: string;
  email: string;
  access_token: string;
}

function Layout(props: Props) {
  const router = useRouter();
  const User = React.useContext(UserContext);
  const [open, setOpen] = useState(sidebarAction);
  const [loading, setLoading] = useState(true);

  const handleSidebarState = (): void => {
    setOpen(!open);
  };

  const [userState, setUserState] = useState<UserInterface | any>(User?.user);
  const [userAuth, setUserAuth] = useState<boolean | undefined>(
    User?.authenticated,
  );

  useEffect(() => {
    setUserAuth(Boolean(sessionStorage.getItem('userAuth')));
    setUserState(JSON.parse(sessionStorage.getItem('userState') || 'null'));
    setLoading(false);
  }, [User?.authenticated, User?.user]);

  if (loading) {
    return <Loader />;
  }

  if (router.pathname !== '/auth/Login') {
    // console.log(
    //   'userAuth',
    //   userAuth,
    //   'hasExpirde',
    //   hasExpired,
    //   'access_token',
    //   userState?.access_token,
    // );
    if (!userAuth || userState?.access_token.length < 8) {
      // Remove session data before redirecting
      sessionStorage.removeItem('userState');
      sessionStorage.removeItem('userAuth');
      router?.replace('/auth/Login');
      return null;
    }
  }
  return (
    <div>
      <Header />
      <div className="  bg-[#f0f4fd] dark:bg-[#0f172a] flex flex-col fixed h-screen">
        <div className="flex z-50  w-full">
          {userAuth &&
            router.pathname !== '/auth/Login' &&
            router.pathname !== '/404' && (
              <Navbar handleSidebar={handleSidebarState} />
            )}
        </div>
        <div className="flex overflow-hidden w-screen flex-grow ">
          {userAuth &&
            router.pathname !== '/auth/Login' &&
            router.pathname !== '/404' && (
              <SideBar sidebarOpen={open} handleSidebar={handleSidebarState} />
            )}
          <div className="flex flex-grow w-full ">{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
