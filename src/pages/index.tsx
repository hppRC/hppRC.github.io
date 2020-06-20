import { ExternalLink, ResourcesSection } from 'src/components';
import { Resource } from 'src/types';

const educationResources: ReadonlyArray<Resource> = [
  {
    title: `Bachelor’s degree, Department of Computer Science, School of Informatics, Nagoya University, Japan`,
    period: `April 2017 - expected May 2021`,
    text: `GPA: 3.89/4.30`,
  },
  {
    title: `Short-term study abroad at Monash University, Australia`,
    period: `Febrary 2019 - May 2019`,
  },
];

// const internsihpsEmploymentsResources: ReadonlyArray<Resource> = [
//   {
//     title: `Writer for AI-SCHOLAR`,
//     period: `June 2020 - present`,
//     text: `Natural Language Processing`,
//   },
//   {
//     title: `Server-side Engineering Internship at CyberAgent Inc.`,
//     period: `May 2020`,
//     text: `Scala, Akka, AWS(ECS, DynamoDB Streams)`,
//   },
//   {
//     title: `Server-side Engineer at Ateam Inc.`,
//     period: `January 2020 - May 2020`,
//     text: `Rails, Vue.js`,
//   },
//   {
//     title: `Server-side Engineering Internship at TeamLab Inc.`,
//     period: `September 2019`,
//     text: `Go, MySQL, AWS(ECR, Fargate)`,
//   },
//   {
//     title: `R&D Engineering Internship at TRYETING Inc.`,
//     period: `April 2019 - November 2019`,
//     text: `Python, R`,
//   },
// ];

const awardsHonorsResources: ReadonlyArray<Resource> = [
  { title: `Cyber Agent Backend Tuning Competition`, period: `June 2020`, text: `1st place out of 20 competitors` },
];

const certificatesResources: ReadonlyArray<Resource> = [
  {
    title: `TOEFL iBT`,
    text: `72 (Reading: 24, Listening 14, Speaking 16, Writing 18)`,
    period: `April 2020`,
  },
  {
    title: `TOEIC`,
    text: `790 (Listening 395, Reading 395)`,
    period: `January 2020`,
  },
  {
    title: `Applied Information Technology Engineer Examination (AP)`,
    period: `October 2019`,
  },
];

const cv = {
  href: `https://docs.google.com/document/d/1dWmyBGOjD9GF-WaYM5GlPg3uXxbSw9H5GDQeSL9BRq4/edit?usp=sharing`,
  children: `cv`,
};

const Component: React.FCX = () => (
  <>
    <section className='my-4 text-sm lg:text-base'>
      {/* <h1 className='font-bold text-2xl mb-2 lg:text-4xl lg:mb-4'>Hayato Tsukagoshi</h1> */}
      <p>Nagoya Univ. B4, Takeda-Sasano Lab.</p>
      <p>Email: tsukagohsi.hayato[at]gmail.com</p>
      <ExternalLink {...cv} className='text-base lg:text-xl' />
    </section>
    <ResourcesSection title='Education' resources={educationResources} bold />
    {/* <ResourcesSection title='Internships / Employments' resources={internsihpsEmploymentsResources} /> */}
    <ResourcesSection title='Awards / Honors' resources={awardsHonorsResources} />
    <ResourcesSection title='Certificates' resources={certificatesResources} />
  </>
);

const Container: React.FCX = () => <Component />;

export default Container;
