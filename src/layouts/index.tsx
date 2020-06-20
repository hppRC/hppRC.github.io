import React from 'react';

import { Footer } from './footer';
import { Header } from './header';

const Component: React.FCX = ({ children }) => (
  <div className='flex flex-col min-h-screen pointer-events-none'>
    <Header />
    <main className='flex-1 max-w-screen-xl w-full mx-auto pointer-events-auto p-2 pt-12 lg:pt-16 lg:px-0 lg:py-4'>
      {children}
    </main>
    <Footer />
  </div>
);

export const Layout: React.FCX = ({ children }) => <Component>{children}</Component>;
