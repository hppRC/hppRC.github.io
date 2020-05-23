import 'sanitize.css';
import 'src/styles/global.scss';

import { cache } from 'emotion';
import { AppProps } from 'next/app';
import React from 'react';
import { ColorModeContainer, langModeContainer } from 'src/store';
import { ThemeProvider } from 'src/theme';

import { CacheProvider } from '@emotion/core';

// export const reportWebVitals = (metric: unknown) => {
//   // These metrics can be sent to any analytics service
//   console.log(metric);
// };

export default ({ Component, pageProps }: AppProps): JSX.Element => (
  <langModeContainer.Provider>
    <ColorModeContainer.Provider>
      <CacheProvider value={cache}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </ColorModeContainer.Provider>
  </langModeContainer.Provider>
);
