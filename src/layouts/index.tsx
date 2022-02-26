import React from "react";

import { Footer } from "./footer";
import { Header } from "./header";

const Component: React.FCX = function ({ children }) {
  return (
    <div className="flex flex-col min-h-screen pointer-events-none">
      <Header />
      <main className="flex-1 max-w-screen-xl w-full mx-auto pointer-events-auto p-4 pt-12 sm:p-12 lg:p-20 xl:p-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export const Layout: React.FCX = function ({ children }) {
  return <Component>{children}</Component>;
};
