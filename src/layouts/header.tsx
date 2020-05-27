import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  name: string;
  href: string;
};

const Tab: React.FCX<Props> = ({ name, href }) => {
  const router = useRouter();
  const activeClassName = `block w-32 text-blue-500 hover:text-blue-800 py-2 px-2 font-bold`;
  const nonActiveClassName = `block w-32 text-blue-500 hover:text-blue-800 py-2 px-2`;
  const isActive = router.pathname === href;
  return (
    <li>
      <Link href={href}>
        <button type='button' className={isActive ? activeClassName : nonActiveClassName}>
          {name}
        </button>
      </Link>
    </li>
  );
};

export const Header: React.FC = () => (
  <header>
    <ul className='flex border-b'>
      <Tab href='/' name='home' />
      <Tab href='/projects' name='projects' />
      <Tab href='/links' name='links' />
    </ul>
  </header>
);
