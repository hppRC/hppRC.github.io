import React from 'react';

import { Footer } from './footer';
import { Header } from './header';

const Component: React.FCX = ({ children }) => (
  <div className='flex flex-col min-h-screen pointer-events-none'>
    <Header />
    <main className='flex-1 max-w-screen-xl w-full mx-auto py-4 pointer-events-auto'>{children}</main>
    <Footer />
  </div>
);

export const Layout: React.FCX = ({ children }) => <Component>{children}</Component>;
