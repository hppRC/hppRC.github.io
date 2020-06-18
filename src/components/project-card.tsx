import { ExternalLink } from 'src/components';

type Props = {
  src: string;
  webpSrc: string;
  alt: string;
  title: string;
  text: string;
  tags: string[];
  href: string;
};

export const ProjectCard: React.FCX<Props> = ({ src, webpSrc, alt, title, text, tags, href }) => (
  <div className='max-w-sm rounded overflow-hidden shadow-lg'>
    <ExternalLink href={href} className='block w-full h-full'>
      <picture>
        <source srcSet={webpSrc} type='image/webp' />
        <source srcSet={src} type='image/png' />
        <img width='384' height='225' className='w-full' src={src} alt={alt} />
      </picture>
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{title}</div>
        <p className='text-gray-900 text-base'>{text}</p>
      </div>
      <ul className='px-6 py-4'>
        {tags.map((tag) => (
          <li key={tag} className='inline-block bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700 mr-2'>
            {tag}
          </li>
        ))}
      </ul>
    </ExternalLink>
  </div>
);
