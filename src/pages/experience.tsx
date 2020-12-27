import { ResourcesSection } from 'src/components';

const eventsResources: ReadonlyArray<Resource> = [
  { title: `Cyber Agent Backend Tuning Competition`, text: `1st place out of 20 competitors`, period: `June 2020` },
  { title: `Cookpad Spring Internships for engineer`, period: `April 2020` },
  { title: `DeNA Game data competition`, period: `Feburary 2020` },
  { title: `N-ISUCON`, text: `3rd place out of 10 teams`, period: `Feburary 2020` },
  { title: `ISUCON9`, period: `September 2019` },
  { title: `ICPC 2019 Asia Yokohama Regional`, period: `July 2019` },
];

const confLTResources: ReadonlyArray<Resource> = [
  {
    title: `Uzimaru Happy Birthday LT`,
    text: `short LT about Twitter bot using Markov Chain`,
    period: `June 2020`,
    relatedLink: `https://docs.google.com/presentation/d/1R5dk0Rip-h6WxGVNrggpdUU1WkgvsyEDdJigsJ-yAGg/edit?usp=sharing`,
  },
  {
    title: `NGK2020S`,
    text: `short LT about Gatsby.js`,
    period: `January 2020`,
    relatedLink: `https://speakerdeck.com/hpprc/gatsby-dot-jsbu-jiao-ji-hua`,
  },
];

type Skill = {
  Languages?: string[];
  'Framework / Library'?: string[];
  Tools?: string[];
  Cloud?: string[];
};

const skillsResources: { [key: string]: Skill } = {
  Like: {
    Languages: [`Python`, `TypeScript`, `Rust`],
    'Framework / Library': [`React.js`, `Gatsby.js`, `Next.js`, `PyTorch`],
  },
  // 'Have used before at work': {
  //   Languages: [`Go`, `Ruby`, `R`, `Scala`, `PHP`, `HTML`, `CSS`],
  //   'Framework / Library': [`Ruby on Rails`, `Vue.js`, `Vuex`, `echo`, `Pandas`, `scikit-learn`],
  //   Tools: [`Terraform`, `Docker`, `sbt`],
  //   Cloud: [`DynamoDB`, `DynamoDB Stream`, `Kinesis`, `ECS`, `Fargate`, `Lambda`, `Cloud Watch`],
  // },
  // 'Have used in class and personal projects': {
  //   Languages: [`Haskell`, `Elm`, `Verilog HDL`, `assembly (MIPS)`, `glsl`, `Pascal`],
  //   'Framework / Library': [
  //     `Wordpress`,
  //     `Keras`,
  //     `Svelte`,
  //     `Sapper`,
  //     `Laravel`,
  //     `OpenCV`,
  //     `WebGL`,
  //     `Three.js`,
  //     `p5.js`,
  //   ],
  //   Tools: [`Windows`, `CentOS`, `Raspbian`, `Arduino`, `FPGA`, `LLVM`, `zsh`, `Prometheus`, `Grafana`],
  //   Cloud: [`Firebase`, `Cloud Firestore`, `Firebase Authentication`, `Cloud SQL`, `Cloud Run`],
  // },
};

const Component: React.FCX = () => (
  <>
    <section className='my-4'>
      <h2 className='font-bold text-2xl lg:text-4xl'>Experience</h2>
    </section>
    <ResourcesSection title='Events' resources={eventsResources} />
    <ResourcesSection title='Conference / LT' resources={confLTResources} />
    <section className='my-4 lg:my-8'>
      <h2 className='font-bold text-xl lg:text-2xl'>Skills</h2>
      <ul>
        {Object.entries(skillsResources).map(([field, resources]) => (
          <li key={field}>
            <section className='my-4 lg:my-12'>
              <h3 className='lg:text-xl font-semibold'>{field}</h3>
              <ul>
                {Object.entries(resources).map(([key, data]) => (
                  <li key={key} className='my-2 lg:my-4 lg:flex py-1 border-t w-full' id={`misc-${field}-${key}`}>
                    <h4 className='text-xs lg:text-base lg:w-1/3 text-gray-700'>{key}</h4>
                    <ul className='text-sm lg:text-base flex flex-wrap lg:w-2/3'>
                      {data?.map((name) => (
                        <li key={field + key + name}>
                          <p className='text-sm lg:text-base mr-2 lg:mr-5'>{name}</p>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </section>
          </li>
        ))}
      </ul>
    </section>
  </>
);

const Container: React.FCX = () => <Component />;

export default Container;
