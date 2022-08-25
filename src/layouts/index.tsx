import React from "react";

import { Footer } from "./footer";
import { Header } from "./header";

const Component: React.FCX<{ children?: React.ReactNode }> = function ({
  children,
}) {
  return (
    <div className="pointer-events-none flex min-h-screen flex-col">
      <Header />
      <main className="pointer-events-auto mx-auto w-full max-w-screen-xl flex-1 p-4 pt-12 sm:p-12 lg:p-20 xl:p-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export const Layout: React.FCX<{ children?: React.ReactNode }> = function ({
  children,
}) {
  return <Component>{children}</Component>;
};
