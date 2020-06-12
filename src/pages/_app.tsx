import 'sanitize.css';
import 'src/styles/global.scss';
import 'src/styles/tailwind.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Layout } from 'src/layouts';
import { ColorModeContainer, langModeContainer } from 'src/store';
import { ThemeProvider } from 'src/theme';

// export const reportWebVitals = (metric: unknown) => {
//   console.log(metric);
// };
//   // These metrics can be sent to any analytics service

export default ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <title>Hayato Tsukagoshi</title>
    </Head>
    <langModeContainer.Provider>
      <ColorModeContainer.Provider>
        <ThemeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ColorModeContainer.Provider>
    </langModeContainer.Provider>
  </>
);
