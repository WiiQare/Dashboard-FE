import React, { useState, useEffect } from 'react';
import SideBar from './molecules/side-bar';
import Navbar from './molecules/nav-bar';
import Header from './atom/head';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Loader from './atom/loader';

type Props = {
  children: JSX.Element;
};

function Layout(props: Props) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  const userAuth = !!session;

  const handleSidebarState = (): void => {
    setOpen(!open);
  };

  useEffect(() => {
    if (typeof session === 'undefined') {
      // Session information is not available yet (user not logged in)
      // You can show a loading indicator or handle this condition as needed
      return;
    }

    if (!userAuth && router.pathname !== '/auth/Login') {
      // Redirect unauthenticated users to the login page
      router.push('/auth/Login');
    }
  }, [session, userAuth, router.pathname, router]);

  if (typeof session === 'undefined') {
    return <Loader />
  }
  return (
    <div>
      <Header />
      <div className="bg-[#f0f4fd] dark:bg-[#0f172a] flex flex-col fixed h-screen">
        <div className="flex z-50 w-full">
          {router.pathname !== '/auth/Login' && router.pathname !== '/404' && (
            <Navbar handleSidebar={handleSidebarState} />
          )}
        </div>
        <div className="flex overflow-hidden w-screen flex-grow">
          {router.pathname !== '/auth/Login' && router.pathname !== '/404' && (
            <SideBar sidebarOpen={open} handleSidebar={handleSidebarState} />
          )}
          <div className="flex flex-grow w-full">{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
