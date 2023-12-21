import React, { useState, useEffect } from 'react';
import SideBar from '../molecules/side-bar';
import Navbar from '../molecules/nav-bar';
import Header from '../atom/head';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Loader from '../atom/loader';

type Props = {
  children: JSX.Element;
};

function Layout(props: Props) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const { data: session } = useSession();
  const userAuth = !!session;

  const handleSidebarState = (): void => {
    setOpen(!open);
  };

  useEffect(() => {
    const isLoginPage = router.pathname === '/auth/Login';

    if (isLoginPage && typeof session === 'undefined') {
      // Redirect unauthenticated users to the login page
      router.push('/auth/Login');
    } else if (!isLoginPage && !userAuth) {
      // Redirect unauthenticated users to the login page on other routes
      router.push('/auth/Login');
    } else {
      setIsReady(true);
    }
  }, [session, userAuth, router.pathname]);

  if (isReady) {
    return (
      <div>
        <Header />
        <div
          className={`bg-[#f0f4fd] dark:bg-[#0f172a] flex flex-col  ${
            router.pathname !== '/auth/Login' && router.pathname !== '/404'
              ? 'overflow-scroll'
              : 'h-screen overflow-hidden'
          }`}
        >
          <div className="flex z-50 w-full fixed">
            {router.pathname !== '/auth/Login' &&
              router.pathname !== '/404' && (
                <Navbar handleSidebar={handleSidebarState} />
              )}
          </div>
          <div
            className={`flex overflow-hidden w-screen fixed h-screen flex-grow ${
              router.pathname !== '/auth/Login' && router.pathname !== '/404'
                ? 'pt-24'
                : ''
            }`}
          >
            {router.pathname !== '/auth/Login' &&
              router.pathname !== '/404' && (
                <SideBar
                  sidebarOpen={open}
                  handleSidebar={handleSidebarState}
                />
              )}
            <div className="flex flex-grow w-full pt-0 pb-60  h-full overflow-scroll">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <Loader />;
}

export default Layout;
