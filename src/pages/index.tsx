import Icon from "public/images/icon.png";
import WebpIcon from "public/images/icon.png?webp";
import { ExternalLink, ResourcesSection } from "src/components";

const educationResources: ReadonlyArray<Resource> = [
  {
    title: `Master's degree, Department of Intelligent Systems, Graduate School of Informatics, Nagoya University, Japan`,
    period: `April 2021 - `,
  },
  {
    title: `Bachelor’s degree, Department of Computer Science, School of Informatics, Nagoya University, Japan`,
    period: `April 2017 - March 2021`,
    text: `GPA: 3.89/4.30`,
  },
  {
    title: `Short-term study abroad at Monash University, Australia`,
    period: `Febrary 2019 - March 2019`,
  },
];

const internsihpsEmploymentsResources: ReadonlyArray<Resource> = [
  {
    title: `Software Engineer, Machine Learning, Search, Internship at Mercari Inc.`,
    period: `May 2021 - `,
  },
  {
    title: `Server-side Engineering Internship at pixiv Inc.`,
    period: `April 2021 - May 2021`,
    text: `Novel team, Search System Engineer`,
  },
  {
    title: `Server-side Engineering Internship at Recruit Co., Ltd.`,
    period: `February 2021 - March 2021`,
    text: `Search System Engineer`,
  },
  {
    title: `Writer for AI-SCHOLAR`,
    period: `June 2020 - present`,
    text: `Natural Language Processing`,
  },
  {
    title: `Server-side Engineering Internship at CyberAgent Inc.`,
    period: `March 2020`,
    text: `Scala, Akka, AWS (ECS, DynamoDB Streams)`,
  },
  {
    title: `Server-side Engineer at Ateam Inc.`,
    period: `January 2020 - March 2020`,
    text: `Rails, Vue.js`,
  },
  {
    title: `Server-side Engineering Internship at TeamLab Inc.`,
    period: `September 2019`,
    text: `Go, MySQL, AWS (Fargate)`,
  },
  {
    title: `R&D Engineering Internship at TRYETING Inc.`,
    period: `April 2019 - November 2019`,
    text: `Python, R`,
  },
];

const publicationsResources: ReadonlyArray<Resource> = [
  {
    title: `DefSent: Sentence Embeddings using Definition Sentences`,
    period: `ACL-IJCNLP 2021 main conference (short paper)`,
  },
  {
    title: `定義文を用いた文埋め込み構成法`,
    period: `言語処理学会第27回年次大会 (NLP2021)`,
  },
];

const awardsHonorsResources: ReadonlyArray<Resource> = [
  {
    title: `JEES/Softbank AI Human Resource Development Scholarship 2021`,
    period: `2021`,
  },
  {
    title: `Cyber Agent Backend Tuning Competition`,
    period: `June 2020`,
    text: `1st place out of 20 competitors`,
  },
];

const certificatesResources: ReadonlyArray<Resource> = [
  {
    title: `Database Specialist Examination (DB)`,
    period: `December 2020`,
  },
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
    period: `December 2019`,
  },
];

const Component: React.FCX = () => (
  <>
    <section className="my-4 text-sm lg:text-base flex ml-4 lg:ml-0 items-center">
      <div className="h-32 w-32 mr-4 lg:mr-8">
        <picture>
          <source srcSet={WebpIcon} type="image/webp" />
          <source srcSet={Icon} type="image/png" />
          <img
            src={Icon}
            alt="icon"
            width="128"
            height="128"
            className="h-16 w-16 lg:h-auto lg:w-auto rounded-full"
          />
        </picture>
      </div>
      <div className="flex flex-col justify-center">
        <p>Nagoya University Graduate School of Informatics, M1</p>
        <ExternalLink href="http://cr.fvcrc.i.nagoya-u.ac.jp/">
          Takeda-Sasano Lab.
        </ExternalLink>
        <p>Email: tsukagoshi.hayato[at]gmail.com</p>
        <ExternalLink
          href="https://docs.google.com/document/d/1dWmyBGOjD9GF-WaYM5GlPg3uXxbSw9H5GDQeSL9BRq4/edit?usp=sharing"
          className="text-base"
        >
          resume
        </ExternalLink>
      </div>
    </section>
    <ResourcesSection title="Education" resources={educationResources} bold />
    <ResourcesSection
      title="Internships / Employments"
      resources={internsihpsEmploymentsResources}
      bold
    />
    <ResourcesSection
      title="Publications"
      resources={publicationsResources}
      bold
    />
    <ResourcesSection
      title="Awards / Honors"
      resources={awardsHonorsResources}
    />
    <ResourcesSection title="Certificates" resources={certificatesResources} />
  </>
);

const Container: React.FCX = () => <Component />;

export default Container;
