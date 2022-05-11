import { ExternalLink, ResourcesSection } from "src/components";

const educationResources: ReadonlyArray<Resource> = [
  {
    title: `Master's degree, Department of Intelligent Systems, Graduate School of Informatics, Nagoya University, Japan`,
    period: `April 2021 - expected March 2023`,
  },
  {
    title: `Bachelor's degree, Department of Computer Science, School of Informatics, Nagoya University, Japan`,
    period: `April 2017 - March 2021`,
    text: `GPA: 3.89/4.30`,
  },
  {
    title: `Short-term study abroad at Monash University, Australia`,
    period: `February 2019 - March 2019`,
  },
];

const internsihpsEmploymentsResources: ReadonlyArray<Resource> = [
  {
    title: `Research Assistant of Moonshot R&D project "Observation and interpretation AI based on prior knowledge"`,
    period: `June 2021 - March 2023`,
    text: `ムーンショット型研究開発事業: 事前知識に基づく観察・解釈AI 研究アシスタント`,
  },
  {
    title: `Research Internship at NTT CS Lab.`,
    period: `August 2021 - September 2021`,
    text: `Natural Language Processing / Python`,
  },
  {
    title: `Software Engineering Internship at Mercari Inc.`,
    period: `May 2021 - August 2021`,
    text: `Machine Learning, Search / Go, Python`,
  },
  {
    title: `Server-side Engineering Internship at pixiv Inc.`,
    period: `April 2021 - May 2021`,
    text: `Novel team, Search System Engineer / Python, PHP`,
  },
  {
    title: `Server-side Engineering Internship at Recruit Co., Ltd.`,
    period: `February 2021 - March 2021`,
    text: `Search System Engineer / ElasticSearch, AES, Locust`,
  },
  {
    title: `Writer for AI-SCHOLAR`,
    period: `June 2020 - present`,
    text: `Wrote articles about Natural Language Processing`,
  },
  {
    title: `Server-side Engineering Internship at CyberAgent Inc.`,
    period: `March 2020`,
    text: `Scala, Akka, AWS (ECS, DynamoDB Streams)`,
  },
  {
    title: `Server-side Engineer at Ateam Inc.`,
    period: `January 2020 - March 2020`,
    text: `Developed in-house management system / Rails, Vue.js`,
  },
  {
    title: `Server-side Engineering Internship at TeamLab Inc.`,
    period: `September 2019`,
    text: `Developed API using postal codes and geometrical information / Go, MySQL, AWS (Fargate)`,
  },
  {
    title: `R&D Engineering Internship at TRYETING Inc.`,
    period: `April 2019 - November 2019`,
    text: `Time series forecasting, denoising / Python, R`,
  },
];

const publicationsResources: ReadonlyArray<Resource> = [
  {
    title: `Comparison and Combination of Sentence Embeddings\nDerived from Different Supervision Signals`,
    period: `*SEM 2022`,
    text: `Hayato Tsukagoshi, Ryohei Sasano, Koichi Takeda`,
    relatedLink: `https://arxiv.org/abs/2202.02990`,
  },
  {
    title: `自然言語推論と再現器を用いたSplit and Rephrase における生成文の品質向上`,
    period: `言語処理学会第28回年次大会 (NLP2022)`,
    text: `塚越駿, 平尾努, 森下睦, 帖佐克己, 笹野遼平, 武田浩一`,
    relatedLink: `https://www.anlp.jp/proceedings/annual_meeting/2022/pdf_dir/D5-4.pdf`,
  },
  {
    title: `DefSent: Sentence Embeddings using Definition Sentences`,
    period: `ACL-IJCNLP 2021 main conference\nacceptance rate: 21.3%`,
    text: `Hayato Tsukagoshi, Ryohei Sasano, Koichi Takeda`,
    relatedLink: `https://aclanthology.org/2021.acl-short.52/`,
  },
  {
    title: `定義文を用いた文埋め込み構成法`,
    period: `言語処理学会第27回年次大会 (NLP2021)`,
    text: `塚越駿, 笹野遼平, 武田浩一`,
    relatedLink: `https://www.anlp.jp/proceedings/annual_meeting/2021/pdf_dir/C4-2.pdf`,
  },
];

const activitiesResources: ReadonlyArray<Resource> = [
  {
    title: `[輪講資料] SimCSE: Simple Contrastive Learning of Sentence Embeddings`,
    period: `February 2022`,
    relatedLink: `https://speakerdeck.com/hpprc/lun-jiang-zi-liao-simcse-simple-contrastive-learning-of-sentence-embeddings-823255cd-bd1f-40ec-a65c-0eced7a9191d`,
    text: `Reading group material. Discuss SimCSE, which is a very simple but effective State-of-the-Art sentence embedding method using a pre-trained language model and contrastive learning.`,
  },
  {
    title: `ログデータと言語モデルを用いた同義語辞書の自動構築`,
    period: `May 2021 - August 2021`,
    relatedLink: `https://engineering.mercari.com/blog/entry/20220210-eab9f5d823/`,
    text: `Blog post. Software Engineer, Machine Learning, Search Internship at Mercari Inc.`,
  },
  {
    title: `Amazon Elasticsearch Serviceへの移行にかかる調査とLocustを用いた負荷試験`,
    period: `February 2021 - March 2021`,
    relatedLink: `https://blog.recruit.co.jp/rtc/2021/04/01/amazon-elasticsearch-service/`,
    text: `Blog post. Server-side Engineering Internship at Recruit Inc.`,
  },
  {
    title: `DynamoDB Streamsを用いたAkka Streamsによるキャッシュ処理の実装とDynalystでのインターン`,
    period: `March 2020`,
    relatedLink: `https://developers.cyberagent.co.jp/blog/archives/25747/`,
    text: `Blog post. Server-side Engineering Internship at CyberAgent Inc.`,
  },
];

const awardsHonorsResources: ReadonlyArray<Resource> = [
  {
    title: `Nagoya University Interdisciplinary Frontier Fellowship`,
    period: `April 2023 - March 2026`,
    text: `180,000 yen / month + 250,000 yen / year`,
  },
  {
    title: `名古屋大学大学院 情報学研究科 修士研究中間発表 優秀賞`,
    period: `April 2022`,
    text: `異なる教師信号から構築した文ベクトルの比較と統合手法の提案`,
  },
  {
    title: `JEES/Softbank AI Human Resource Development Scholarship 2021`,
    period: `April 2021 - March 2022`,
    text: `1,000,000 yen / year`,
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

const Component: React.FCX = function () {
  return (
    <>
      <section className="my-4 text-sm lg:text-base flex ml-4 lg:ml-0 items-center">
        <div className="h-32 w-32 mr-4 lg:mr-8">
          <img
            src="/images/icon.png"
            width={128}
            height={128}
            className="h-auto w-auto rounded-full"
            alt="Hayato Tsukagoshi icon"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p>Nagoya University Graduate School of Informatics, M2</p>
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
        title="Activities"
        resources={activitiesResources}
        bold
      />
      <ResourcesSection
        title="Awards / Honors"
        resources={awardsHonorsResources}
      />
      <ResourcesSection
        title="Certificates"
        resources={certificatesResources}
      />
    </>
  );
};

const Container: React.FCX = function () {
  return <Component />;
};

export default Container;
