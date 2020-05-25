import 'sanitize.css';
import 'src/styles/global.scss';
import 'src/styles/tailwind.css';

import { AppProps } from 'next/app';
import React from 'react';
import { ColorModeContainer, langModeContainer } from 'src/store';
import { ThemeProvider } from 'src/theme';

// export const reportWebVitals = (metric: unknown) => {
//   // These metrics can be sent to any analytics service
//   console.log(metric);
// };

export default ({ Component, pageProps }: AppProps): JSX.Element => (
  <langModeContainer.Provider>
    <ColorModeContainer.Provider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ColorModeContainer.Provider>
  </langModeContainer.Provider>
);
