/* eslint-disable global-require */

import { ProjectCard } from 'src/components';

const data = [
  {
    src: require(`public/images/kuon.png`),
    webpSrc: require(`public/images/kuon.png?webp`),
    alt: `Kuon`,
    title: `Kuon`,
    text: `easy to use Twitter API wrapper library`,
    tags: [`Rust`, `Twitter API`],
    href: `https://github.com/hppRC/kuon`,
  },
  {
    src: require(`public/images/generative-react.png`),
    webpSrc: require(`public/images/generative-react.png?webp`),
    alt: `Generative React`,
    title: `Generative React`,
    text: `graphical website with WebGL & Generative Art works`,
    tags: [`React`, `TypeScript`, `WebGL`],
    href: `https://generative-react.hpprc.com`,
  },
  {
    src: require(`public/images/portofolio.png`),
    webpSrc: require(`public/images/portofolio.png?webp`),
    alt: `Portofolio`,
    title: `hpp Portofolio`,
    text: `graphical portofolio website`,
    tags: [`React`, `TypeScript`, `WebGL`],
    href: `https://hpprc.com`,
  },
];

const Component: React.FCX = () => (
  <>
    <section className='py-4'>
      <h1 className='font-bold text-4xl'>Projects</h1>
    </section>
    <section className='py-4'>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full'>
        {data.map((attrs) => (
          <li className='mx-auto' key={attrs.title}>
            <ProjectCard {...attrs} />
          </li>
        ))}
      </ul>
    </section>
  </>
);

const Container: React.FCX = () => <Component />;

export default Container;
