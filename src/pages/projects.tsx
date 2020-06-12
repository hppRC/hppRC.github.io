import GenerativeReactImg from 'public/images/generative-react.png';
import GenerativeReactWebpImg from 'public/images/generative-react.png?webp';
import KuonImg from 'public/images/kuon.png';
import KuonWebpImg from 'public/images/kuon.png?webp';
import { ProjectCard } from 'src/components';

const data = [
  {
    src: GenerativeReactImg,
    webpSrc: GenerativeReactWebpImg,
    alt: `Generative React`,
    title: `Generative React`,
    text: `graphical website with WebGL & Generative Art works`,
    tags: [`React`, `TypeScript`, `WebGL`],
  },
  {
    src: KuonImg,
    webpSrc: KuonWebpImg,
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
