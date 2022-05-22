import "sanitize.css";
import "src/styles/global.scss";
import "src/styles/tailwind.css";

import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { Layout } from "src/layouts";

// export const reportWebVitals = (metric: unknown) => {
//   console.log(metric);
// };
//   // These metrics can be sent to any analytics service

const App = function ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Hayato Tsukagoshi | 塚越駿</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
