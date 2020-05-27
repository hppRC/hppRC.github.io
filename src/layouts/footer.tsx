import { FaGithub } from 'react-icons/fa';
import { ExternalLink } from 'src/components';

export const Footer: React.FC = () => (
  <footer className='flex items-center justify-center'>
    <div>
      Copyright©2020.
      <ExternalLink href='https://twitter.com/hpp_ricecake'> hpp_ricecake </ExternalLink>
    </div>
    <div>
      <ExternalLink href='https://github.com/hppRC'>
        <i>
          <FaGithub className='block h-10 ml-2' />
        </i>
      </ExternalLink>
    </div>
  </footer>
);
