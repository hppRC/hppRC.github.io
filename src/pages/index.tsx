import Icon from 'public/images/icon.png';
import WebpIcon from 'public/images/icon.png?webp';
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

const Component: React.FCX = () => (
  <>
    <section className='my-8 text-sm lg:text-base flex ml-4 lg:ml-0 items-center'>
      <div className='mr-4 lg:mr-8'>
        <picture>
          <source srcSet={WebpIcon} type='image/webp' />
          <source srcSet={Icon} type='image/png' />
          <img src={Icon} alt='icon' width='128' height='128' className='h-16 w-16 lg:h-auto lg:w-auto rounded-full' />
        </picture>
      </div>
      <div className='flex flex-col justify-center'>
        <p>
          Nagoya Univ. B4,
          <ExternalLink href='http://cr.fvcrc.i.nagoya-u.ac.jp/'>Takeda-Sasano Lab.</ExternalLink>
        </p>
        <p>Email: tsukagohsi.hayato[at]gmail.com</p>
        <ExternalLink
          href='https://docs.google.com/document/d/1dWmyBGOjD9GF-WaYM5GlPg3uXxbSw9H5GDQeSL9BRq4/edit?usp=sharing'
          className='text-base lg:text-xl'
        >
          cv
        </ExternalLink>
      </div>
    </section>
    <ResourcesSection title='Education' resources={educationResources} bold />
    <ResourcesSection title='Awards / Honors' resources={awardsHonorsResources} />
    <ResourcesSection title='Certificates' resources={certificatesResources} />
  </>
);

const Container: React.FCX = () => <Component />;

export default Container;
