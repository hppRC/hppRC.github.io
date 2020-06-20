import { ResourcesSection } from 'src/components';
import { Resource } from 'src/types';

// detail experiences
const internsihpsEmploymentsResources: ReadonlyArray<Resource> = [
  {
    title: `Writer for AI-SCHOLAR`,
    period: `June 2020 - present`,
    text: `Natural Language Processing`,
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

const Component: React.FCX = () => (
  <>
    <section className='my-4'>
      <h2 className='font-bold text-2xl lg:text-4xl'>Experience</h2>
    </section>
    <ResourcesSection title='Internships / Employments' resources={internsihpsEmploymentsResources} bold />
    <ResourcesSection title='Events' resources={eventsResources} />
    <ResourcesSection title='Conference / LT' resources={confLTResources} />
  </>
);

const Container: React.FCX = () => <Component />;

export default Container;
