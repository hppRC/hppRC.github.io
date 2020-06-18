import { ExternalLink, OrganizedResources } from 'src/components';
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
  href: `https://docs.google.com/document/d/1dUe1pATmli-5zOTI9YyoEGTsC-8TE2U2WpEwnERukGY/edit?usp=sharing`,
  children: `cv`,
};

const Component: React.FCX = () => (
  <>
    <section className='my-4'>
      <h1 className='font-bold text-4xl mb-4'>Hayato Tsukagoshi</h1>
      <p>Nagoya Univ. B4, Takeda-Sasano Lab.</p>
      <p>Email: tsukagohsi.hayato[at]gmail.com</p>
      <ExternalLink {...cv} />
    </section>
    <section className='my-16'>
      <h2 className='font-bold text-2xl'>Education</h2>
      <OrganizedResources resources={educationResources} />
    </section>
    <section className='my-16'>
      <h2 className='font-bold text-2xl'>Awards / Honors</h2>
      <OrganizedResources resources={awardsHonorsResources} />
    </section>
    <section className='my-16'>
      <h2 className='font-bold text-2xl'>Certificates</h2>
      <OrganizedResources resources={certificatesResources} />
    </section>
  </>
);

const Container: React.FCX = () => <Component />;

export default Container;
