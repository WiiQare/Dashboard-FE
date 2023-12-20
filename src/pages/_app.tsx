import '../styles/globals.css';
import React from 'react';
import NextNProgress from 'nextjs-progressbar';
import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux';
import store from '@/redux/store/store';
import { UserProvider } from '@/context/UserContext';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import Layout from '@/components/compounds/layout';
import { storePatient } from '@/redux/store/storePatient';
import { QueryClient, QueryClientProvider } from 'react-query';
import ToasterProvider from '@/components/atom/ToasterProvider';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <SessionProvider session={pageProps.session}>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <NextNProgress
              color="#ff8a2b"
              startPosition={0.75}
              stopDelayMs={300}
              height={3}
              options={{
                showSpinner: false,
                easing: 'ease',
                speed: 500,
              }}
            />
            <UserProvider>
              {/* <Provider store={storePatient}> */}
              <ToasterProvider />
              <Layout>
                <Component {...pageProps} />
              </Layout>
              {/* </Provider> */}
            </UserProvider>
          </Provider>
        </QueryClientProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}
