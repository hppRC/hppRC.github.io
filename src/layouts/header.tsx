import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  name: string;
  href: string;
};

const Tab: React.FCX<Props> = ({ name, href, className }) => {
  const router = useRouter();
  const activeClassName = `block w-20 lg:w-32 font-bold`;
  const nonActiveClassName = `block w-20 lg:w-32 `;
  const isActive = router.pathname === href;
  return (
    <li className={className}>
      <Link href={href}>
        <button type='button' className={isActive ? activeClassName : nonActiveClassName}>
          {name}
        </button>
      </Link>
    </li>
  );
};

export const Header: React.FC = () => (
  <header className='border-b pointer-events-auto w-full h-16'>
    <ul className='flex max-w-screen-xl mx-auto w-full h-full items-center'>
      <Tab href='/' name='Home' className='mr-1 my-1 lg:mr-2 lg:my-2' />
      <Tab href='/experience' name='Experience' className='m-1 lg:m-2' />
      <Tab href='/links' name='Links' />
      <Tab href='/projects' name='Projects' className='ml-1 my-1 lg:ml-2 lg:my-2' />
    </ul>
  </header>
);
