/* eslint-disable global-require */

import { ProjectCard } from 'src/components';

const data = [
  {
    src: require(`public/generative-react.png?lqip`),
    webpSrc: require(`public/generative-react.png?webp`),
    alt: `Generative React`,
    title: `Generative React`,
    text: `graphical website with WebGL & Generative Art works`,
    tags: [`React`, `TypeScript`, `WebGL`],
  },
  {
    src: require(`public/kuon.png?lqip`),
    webpSrc: require(`public/kuon.png?webp`),
    alt: `Kuon`,
    title: `Kuon`,
    text: `easy to use Twitter API wrapper library`,
    tags: [`Rust`, `Twitter API`],
  },
];

const Component: React.FCX = () => (
  <main className='flex flex-col'>
    <h1 className='font-bold text-4xl'>Projects</h1>
    <section>
      {data.map((attrs) => (
        <div className='mb-4' key={attrs.title}>
          <ProjectCard {...attrs} />
        </div>
      ))}
    </section>
  </main>
);

const Container: React.FCX = () => <Component />;

export default Container;
