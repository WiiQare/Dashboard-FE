import "../styles/globals.css";
import React from "react";
import NextNProgress from "nextjs-progressbar";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import store from "@/redux/store/store";
import {UserProvider } from "@/context/UserContext";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";

import { SessionProvider} from "next-auth/react";



export default function App({ Component, pageProps }: AppProps) {

        return (
            <ThemeProvider enableSystem={false} attribute="class">
                <Provider store={store}>
                    <NextNProgress
                        color="#ff8a2b"
                        startPosition={0.75}
                        stopDelayMs={300}
                        height={3}
                        options={{
                            showSpinner: false,
                            easing: "ease",
                            speed: 500,
                        }}
                    />
                    <UserProvider>
                        <SessionProvider session={pageProps.session}>
                            <Layout>
                                <Component {...pageProps} />
                            </Layout>
                        </SessionProvider>
                    </UserProvider>
                </Provider>
            </ThemeProvider>
        );
    }

