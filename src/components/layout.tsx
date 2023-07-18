import React, { useState, useEffect } from "react";
import SideBar from "./molecules/side-bar";
import Navbar from "./molecules/nav-bar";
import Header from "./atom/head";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

let sidebarAction: boolean = false;
type Props = {
    children: JSX.Element;
};
function Layout(props: Props) {
    const router = useRouter();
    const [open, setOpen] = useState(sidebarAction);
    const { data, status } = useSession()
    const [userInfo, setUserInfo] = useState<any>({})
    const [mounted, setMounted] = useState<boolean>(false)
    const handleSidebarState = (): void => {
        setOpen(!open);
    };


    useEffect(() => {
        setMounted(true);
        setUserInfo(data)
    }, [status, data]);


    if (mounted) {
        if (status === 'loading') {
            console.log("Loading.....");

        }
        if ( router.pathname !== "/auth/signIn" && router.pathname !== "/auth/signUp") {
            if (status === 'unauthenticated') {
                //not unauthenticated

                router?.replace('/auth/signIn')
            }
            // console.log("unauthenticated")
        }
        if (status === 'authenticated') {
            //user is authenticated
            //your fetching loading
            // console.log("authenticated")
        }
    }

    return (
        <div>
            <Header />
            <div className="  bg-[#f0f4fd] dark:bg-[#0f172a] flex flex-col h-screen">
                <div className="flex z-50  w-full">
                    {status === 'authenticated' && router.pathname !== "/auth/signIn" && router.pathname !== "/auth/signUp" && <Navbar handleSidebar={handleSidebarState} />}
                </div>
                <div className="flex overflow-hidden flex-grow ">
                    {status === 'authenticated' && router.pathname !== "/auth/signIn" && router.pathname !== "/auth/signUp" && (
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
