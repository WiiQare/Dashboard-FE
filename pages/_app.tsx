import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import Layout from "../components/layout";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import store from "../redux/store/store";
import { SessionProvider } from "next-auth/react";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider enableSystem={false} attribute="class">
            <Provider store={store}>
                <NextNProgress
                    color="#ff8a2b"
                    startPosition={0.75}
                    stopDelayMs={300}
                    //showOnSShallow={true}
                    height={3}
                    options={{
                        showSpinner: false,
                        easing: "ease",
                        speed: 500,
                    }}
                />
                {/*Next Auth Provider*/}
                <Layout>
                    <SessionProvider session={pageProps.session}>
                        <Component {...pageProps} />
                    </SessionProvider>
                </Layout>
            </Provider>
        </ThemeProvider>
    );
}
