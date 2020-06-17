import { OrganizedResources } from 'src/components';
import { Resource } from 'src/types';

const educationResources: ReadonlyArray<Resource> = [
  {
    title: `Bachelor’s degree, Department of Computer Science, School of Informatics, Nagoya University`,
    period: `April 2017 - expected May 2021`,
    text: `GPA: 3.89/4.30`,
  },
];

const certificatesResources: ReadonlyArray<Resource> = [
  {
    title: `TOEFL iBT`,
    text: `72`,
    period: `April 2020`,
  },
  {
    title: `TOEIC`,
    text: `790`,
    period: `January 2020`,
  },
  {
    title: `Applied Information Technology Engineer Examination (AP)`,
    period: `October 2019`,
  },
];

const Component: React.FCX = () => (
  <>
    <section className='py-4'>
      <h1 className='font-bold text-4xl mb-4'>Hayato Tsukagoshi</h1>
      <p>Resercher of Takeda-Sasano Lab.</p>
      <p>Email: tsukagohsi.hayato[at]gmail.com</p>
    </section>
    <section className='py-4'>
      <h2 className='font-bold text-2xl'>Education</h2>
      <OrganizedResources resources={educationResources} />
    </section>
    <section className='py-4'>
      <h2 className='font-bold text-2xl'>Awards / Honors</h2>
    </section>
    <section className='py-4'>
      <h2 className='font-bold text-2xl'>Certificates</h2>
      <OrganizedResources resources={certificatesResources} />
    </section>
  </>
);

const Container: React.FCX = () => <Component />;

export default Container;
