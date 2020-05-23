import 'sanitize.css';

import { AppProps } from 'next/app';
import React from 'react';

export default ({ Component, pageProps }: AppProps): JSX.Element => <Component {...pageProps} />;
