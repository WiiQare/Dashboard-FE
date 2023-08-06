import React, { useState, useEffect } from "react";
import SideBar from "./molecules/side-bar";
import Navbar from "./molecules/nav-bar";
import Header from "./atom/head";
import { useRouter } from "next/router";
import { UserContext } from "@/context/UserContext";
import { fetchData } from "@/pages/api/fetchData";
import Loader from "./atom/loader";

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
  const [hasExpired, setHasExpired] = useState(false)

  const handleSidebarState = (): void => {
    setOpen(!open);
  };

  const [userState, setUserState] = useState<UserInterface | any>(
    User?.user
  );
  const [userAuth, setUserAuth] = useState<boolean | undefined>(
    User?.authenticated
  );
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setUserAuth(Boolean(sessionStorage.getItem("userAuth")));
    setUserState(JSON.parse(sessionStorage.getItem("userState") || "null"));
    setMounted(true);
    setLoading(false); // Set loading to false after mounting
  }, [User?.authenticated, User?.user]);

  const fetchDataAsync = async () => {
    try {
      await fetchData("/payers", userState?.access_token, 1, 0);
      setHasExpired(false);
    } catch (error) {
      // Handle the error as needed
      console.error('Error fetching data:', error);
      setHasExpired(true);
    }
  };

  if (mounted && userAuth) {
    fetchDataAsync();
  }

  if (loading) {

    return <Loader />
  }

  if (router.pathname !== "/auth/signIn") {
    if (!userAuth || hasExpired) {
      router?.replace("/auth/signIn");
      return null; // Return null to prevent rendering the content while redirecting
    }
  }
  // console.log(userState?.access_token)
  return (
    <div>
      <Header />
      <div className="  bg-[#f0f4fd] dark:bg-[#0f172a] flex flex-col fixed h-screen">
        <div className="flex z-50  w-full">
          {userAuth && router.pathname !== "/auth/signIn" && router.pathname !== "/404" && <Navbar handleSidebar={handleSidebarState} />}
        </div>
        <div className="flex overflow-hidden w-screen flex-grow ">
          {userAuth && router.pathname !== "/auth/signIn" && router.pathname !== "/404" && (
            <SideBar
              sidebarOpen={open}
              handleSidebar={handleSidebarState}
            />
          )}
          <div className="flex flex-grow w-full ">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
