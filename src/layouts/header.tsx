import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

type Props = {
  name: string;
  href: string;
  onClick?: () => void;
};

const Tab: React.FCX<Props> = ({ name, href, className, onClick }) => {
  const router = useRouter();
  const activeClassName = `block w-20 lg:w-32 bg-gray-200 rounded`;
  const nonActiveClassName = `block w-20 lg:w-32`;
  const isActive = router.pathname === href;
  return (
    <li className={`${className} text-sm lg:text-base hover:opacity-50 transition-opacity duration-100 ease-in-out`}>
      <Link href={href}>
        <button type='button' className={isActive ? activeClassName : nonActiveClassName} onClick={onClick}>
          {name}
        </button>
      </Link>
    </li>
  );
};

const TabList: React.FCX<{ onClick?: () => void }> = ({ className, onClick }) => (
  <ul className={`h-full items-center ${className}`}>
    <Tab href='/' name='Home' className='mr-1 my-1 lg:mr-2 lg:my-2' onClick={onClick} />
    <Tab href='/experience' name='Experience' className='m-1 lg:m-2' onClick={onClick} />
    <Tab href='/links' name='Links' className='m-1 lg:m-2' onClick={onClick} />
    <Tab href='/projects' name='Projects' className='m-1 lr-0 lg:m-2 lg:mr-0' onClick={onClick} />
  </ul>
);

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => {
    setOpen((open) => !open);
  }, []);
  return (
    <header className='fixed top-0 bg-white border-b pointer-events-auto w-full h-12 lg:h-16 lg:px-4'>
      <nav className='flex h-full bg-white max-w-screen-xl mx-auto items-center justify-between'>
        <div
          className={`absolute h-full w-full bg-white border-b transform transition-transform duration-300 ease-in-out px-2 lg:px-0 ${
            open ? `translate-y-full` : `-translate-y-full`
          }`}
          style={{ zIndex: -1 }}
        >
          <TabList className='flex' onClick={toggle} />
        </div>
        <div className='mx-2 lg:mx-0'>
          <Link href='/'>
            <h1 className='font-bold text-2xl lg:text-4xl cursor-pointer'>Hayato Tsukagoshi</h1>
          </Link>
        </div>
        <TabList className='hidden lg:flex' />
        <div className='block relative lg:hidden'>
          <button type='button' onClick={toggle} className='flex items-center px-3 py-2'>
            <svg className='fill-current h-6 w-6 mr-2 text-gray-700' viewBox='0 0 20 20'>
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};
