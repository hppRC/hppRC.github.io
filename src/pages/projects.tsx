/* eslint-disable global-require */

import { ProjectCard } from "src/components";

const data = [
  {
    src: `/images/kuon.png`,
    alt: `Kuon`,
    title: `Kuon`,
    text: `easy to use Twitter API wrapper library`,
    tags: [`Rust`, `Twitter API`],
    href: `https://github.com/hppRC/kuon`,
  },
  {
    src: `/images/generative-react.png`,
    alt: `Generative React`,
    title: `Generative React`,
    text: `graphical website with WebGL & Generative Art works`,
    tags: [`React`, `TypeScript`, `WebGL`],
    href: `https://generative-react.hpprc.com`,
  },
  {
    src: `/images/portofolio.png`,
    alt: `Portofolio`,
    title: `hpp Portofolio`,
    text: `graphical portofolio website`,
    tags: [`React`, `TypeScript`, `WebGL`],
    href: `https://hpprc.com`,
  },
];

const Component: React.FCX = () => (
  <>
    <section className="my-4">
      <h1 className="-ml-2 font-bold text-2xl lg:text-4xl">Projects</h1>
    </section>
    <section className="my-4 lg:my-16">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
        {data.map((attrs) => (
          <li className="mx-2 my-4 lg:my-0" key={attrs.title}>
            <ProjectCard {...attrs} />
          </li>
        ))}
      </ul>
    </section>
  </>
);

const Container: React.FCX = () => <Component />;

export default Container;
