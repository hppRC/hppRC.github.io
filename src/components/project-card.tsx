/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
type Props = {
  src: string;
  webpSrc: string;
  alt: string;
  title: string;
  text: string;
  tags: string[];
};

export const ProjectCard: React.FCX<Props> = ({ src, alt, title, text, tags }) => (
  <div className='max-w-sm rounded overflow-hidden shadow-lg'>
    <img width='320' height='180' className='w-full' src={src} alt={alt} />

    <div className='px-6 py-4'>
      <div className='font-bold text-xl mb-2'>{title}</div>
      <p className='text-gray-700 text-base'>{text}</p>
    </div>
    <ul className='px-6 py-4'>
      {tags.map((tag) => (
        <li key={tag} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>
          {tag}
        </li>
      ))}
    </ul>
  </div>
);
