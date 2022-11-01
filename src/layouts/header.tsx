import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";

type Props = {
  name: string;
  href: string;
  onClick?: () => void;
};

const Tab: React.FCX<Props> = function ({ name, href, className, onClick }) {
  const router = useRouter();
  const activeClassName = `block w-20 lg:w-32 bg-gray-200 rounded`;
  const inActiveClassName = `block w-20 lg:w-32`;
  const isActive = router.pathname === href;
  return (
    <li
      className={`${className} text-sm transition-opacity duration-100 ease-in-out hover:opacity-50 lg:text-base`}
    >
      <Link href={href} passHref legacyBehavior>
        <button
          type="button"
          className={`${isActive ? activeClassName : inActiveClassName}`}
          onClick={onClick}
        >
          {name}
        </button>
      </Link>
    </li>
  );
};

const TabList: React.FCX<{ onClick?: () => void }> = function ({
  className,
  onClick,
}) {
  return (
    <ul className={`h-full items-center ${className}`}>
      <Tab
        href="/publications"
        name="Publications"
        className="m-1 lg:m-2"
        onClick={onClick}
      />
      <Tab
        href="/experiences"
        name="Experiences"
        className="m-1 lg:m-2"
        onClick={onClick}
      />
      <Tab
        href="/links"
        name="Links"
        className="m-1 lg:m-2"
        onClick={onClick}
      />
      <Tab
        href="/projects"
        name="Projects"
        className="m-1 lg:m-2 lg:mr-0"
        onClick={onClick}
      />
    </ul>
  );
};

export const Header: React.FC = function () {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => {
    setOpen((open) => !open);
  }, []);

  return (
    <header className="pointer-events-auto fixed top-0 h-12 w-full border-b bg-white lg:h-16 lg:px-4">
      <nav className="mx-auto flex h-full max-w-screen-xl items-center justify-between bg-white">
        <div
          className={`absolute h-full w-full border-b bg-white px-2 transition-transform duration-300 ease-in-out lg:px-0 ${
            open ? `translate-y-full` : `-translate-y-full`
          }`}
          style={{ zIndex: -1 }}
        >
          <TabList className="flex" onClick={toggle} />
        </div>
        <div className="mx-2 lg:mx-0">
          <Link href="/" passHref legacyBehavior>
            <h1 className="cursor-pointer text-2xl font-bold lg:text-4xl">
              Hayato Tsukagoshi
            </h1>
          </Link>
        </div>
        <TabList className="hidden sm:flex" />
        <div className="relative block sm:hidden">
          <button
            type="button"
            onClick={toggle}
            className="pointer-events-auto flex items-center px-3 py-2"
          >
            <svg
              className="mr-2 h-6 w-6 fill-current text-gray-700"
              viewBox="0 0 20 20"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};
