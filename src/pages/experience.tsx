import { OrganizedResources } from 'src/components';
import { Resource } from 'src/types';

const internsihpsResources: ReadonlyArray<Resource> = [
  {
    title: `Writer for AI-SCHOLAR`,
    period: `June 2020 - present`,
    text: `NLP`,
  },
  {
    title: `Server-side Engineering Internship at CyberAgent Inc.`,
    period: `May 2020`,
    text: `Scala, Akka, AWS(ECS, DynamoDB Streams)`,
  },
  {
    title: `Server-side Engineer at Ateam Inc.`,
    period: `January 2020 - May 2020`,
    text: `Rails, Vue.js`,
  },
  {
    title: `Server-side Engineering Internship at TeamLab Inc.`,
    period: `September 2019`,
    text: `Go, MySQL, AWS(ECR, Fargate)`,
  },
  {
    title: `R&D Engineering Internship at TRYETING Inc.`,
    period: `April 2019 - November 2019`,
    text: `Python, R`,
  },
];

const eventsResources: ReadonlyArray<Resource> = [
  {
    title: `Cyber Agent Backend Tuning Competition`,
    text: `1st place`,
    period: `June 2020`,
  },
  {
    title: `N-ISUCON`,
    text: `3rd place`,
    period: `Feburary 2020`,
  },
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

const Component: React.FCX = () => (
  <>
    <section className='py-4'>
      <h1 className='font-bold text-4xl'>Experience</h1>
    </section>
    <section className='py-4'>
      <h2 className='font-bold text-2xl'>Internships</h2>
      <OrganizedResources resources={internsihpsResources} />
    </section>
    <section className='py-4'>
      <h2 className='font-bold text-2xl'>Events</h2>
      <OrganizedResources resources={eventsResources} />
    </section>
    <section className='py-4'>
      <h2 className='font-bold text-2xl'>Conference / LT</h2>
      <OrganizedResources resources={confLTResources} />
    </section>
  </>
);

const Container: React.FCX = () => <Component />;

export default Container;
