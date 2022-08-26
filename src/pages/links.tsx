import { ExternalLink } from "src/components";

const sorcialLinks = {
  GitHub: { name: `hppRC`, href: `https://github.com/hppRC` },
  LinkedIn: {
    name: `Hayato Tsukagoshi`,
    href: `https://www.linkedin.com/in/hpprc/`,
  },
  Twitter: { name: `@hpp_ricecake`, href: `https://twitter.com/hpp_ricecake` },
  "Twitter (for research)": {
    name: `@hayato_tkgs`,
    href: `https://twitter.com/hayato_tkgs`,
  },
  Qiita: { name: `hppRC`, href: `https://qiita.com/hppRC` },
  Zenn: { name: `hpp`, href: `https://zenn.dev/hpp` },
  AtCoder: {
    name: `hpp (Highest rate: 1269)`,
    href: `https://atcoder.jp/users/hpp`,
  },
  Wantedly: {
    name: `Hayato Tsukagoshi`,
    href: `https://en-jp.wantedly.com/users/107038522`,
  },
  connpass: { name: `hppRC`, href: `https://connpass.com/user/hppRC/` },
  speakerdeck: { name: `hpp`, href: `https://speakerdeck.com/hpprc` },
} as const;

const websiteLinks = {
  Portfolio: { href: `https://hpprc.com` },
  Blog: { href: `https://blog.hpprc.dev` },
  "Profile page": { href: `https://hpprc.dev` },
  "Art works": { href: `https://generative-react.hpprc.com` },
};

type MiscellaneousData = { title: string; name?: string; href: string };

const miscellaneousness: {
  [key: string]: { [key: string]: MiscellaneousData[] };
} = {
  Software: {
    // 'Portfolio site': [{ title: `hpp portfolio`, href: `https://hpprc.com` }],
    // 'Generative React': [{ title: `Generative React`, href: `https://generative-react.hpprc.com` }],
    // Blog: [{ title: `hpp blog`, href: `https://blog.hpprc.dev` }],
    "LLVM based compiler for Pascal": [
      {
        title: `GitHub Repository`,
        name: `CSE3`,
        href: `https://github.com/hppRC/CSE3`,
      },
    ],
  },
  Internships: {
    "RECRUIT Job for Student 2021 ~Engineer/Data Specialist": [
      {
        title: `Amazon Elasticsearch Serviceへの移行にかかる調査とLocustを用いた負荷試験`,
        href: `https://recruit-tech.co.jp/blog/?p=9832&preview=1&_ppp=0b8a756eb3`,
      },
    ],
    "CA Tech JOB (Dynalyst)": [
      {
        title: `Presentaion`,
        name: `CA Tech JOB 成果発表 公開版`,
        href: `https://docs.google.com/presentation/d/1o8TEOKGt89REdpD0KHM0pfb-yJcIgJcoiMJNUOqa1lY/edit?usp=sharing`,
      },
      {
        title: `DynamoDB Streamsを用いたAkka Streamsによるキャッシュ処理の実装とDynalystでのインターン`,
        href: `https://developers.cyberagent.co.jp/blog/archives/25747/`,
      },
    ],
  },
  "Contributed post": {
    "AI-SCHOLAR": [
      { title: `Author page`, href: `https://ai-scholar.tech/author/hpp` },
      {
        title: `捨ててしまうのはもったいない！BERTの出力を組み合わせて文ベクトルを作るSBERT-WK`,
        href: `https://ai-scholar.tech/articles/natural-language-processing/sbert-wk`,
      },
      {
        title: `Attentionの定説が覆る!? SYNTHESIZERが教えてくれるAttentionの可能性と未来`,
        href: `https://ai-scholar.tech/articles/transformer/attention-synthesizer`,
      },
    ],
  },
  Research: {
    "Reading club": [
      {
        title: `Goldberg chapter 5`,
        name: `Neural Network Training`,
        href: `https://docs.google.com/presentation/d/1YQpcZg-Cj-4Odruhgl52VmNofLJtZM-XYKKVbk0Y2vM/edit?usp=sharing`,
      },
      {
        title: `SLP chapter 3`,
        name: `N-gram Language Models`,
        href: `https://drive.google.com/file/d/1XUTaEph721OvYNTlk_v3qhmbkjF3iQ8E/view?usp=sharing`,
      },
    ],
  },
  LT: {
    "p1ass Happy Birthday LT": [
      {
        title: `LT Slides`,
        name: `p1ass LT 特設サイトを支える技術`,
        href: `https://speakerdeck.com/hpprc/p1ass-lt-hpp`,
      },
      {
        title: `GitHub Repository`,
        name: `nama-tamago.github.io/p1ass-lt-site/`,
        href: `https://github.com/nama-tamago/p1ass-lt-site`,
      },
      {
        title: `Site URL`,
        name: `https://nama-tamago.github.io/p1ass-lt-site/`,
        href: `https://nama-tamago.github.io/p1ass-lt-site/`,
      },
    ],
    "Uzimaru Happy Birthday LT": [
      {
        title: `LT Slides`,
        name: `バカが取ったバイキングの皿を持って来たよ！！`,
        href: `https://docs.google.com/presentation/d/1R5dk0Rip-h6WxGVNrggpdUU1WkgvsyEDdJigsJ-yAGg/edit?usp=sharing`,
      },
      {
        title: `GitHub Repository`,
        name: `ujimaru`,
        href: `https://github.com/hppRC/ujimaru`,
      },
      {
        title: `Twitter Account`,
        name: `@ujimaru0000`,
        href: `https://twitter.com/ujimaru0000`,
      },
    ],
    "NGK2020S (Short LT)": [
      {
        title: `LT Slides`,
        name: `Gatsby.js 布教計画`,
        href: `https://speakerdeck.com/hpprc/gatsby-dot-jsbu-jiao-ji-hua`,
      },
      {
        title: `GitHub Repository`,
        name: `ngk2020s`,
        href: `https://github.com/hppRC/NGK2020S`,
      },
    ],
  },
};

const Component: React.FCX = function () {
  return (
    <>
      <section className="my-4">
        <h2 className="text-2xl font-bold lg:text-4xl">Links</h2>
      </section>
      <div className="my-4 flex flex-col space-y-8 lg:my-8 lg:flex-row">
        <section className="my-4 lg:my-8 lg:w-1/2">
          <h2 className="mb-2 text-xl font-bold lg:text-2xl">Social</h2>
          <ul className="p-2">
            {Object.entries(sorcialLinks).map(([key, { name, href }]) => (
              <li
                key={key}
                className="mb-1 flex text-sm leading-tight lg:my-1 lg:text-base lg:leading-snug"
                id={`social-${key}`}
              >
                <p className="block w-1/3">{key}</p>
                <p className="">
                  <ExternalLink href={href}>
                    <span>{name}</span>
                  </ExternalLink>
                </p>
              </li>
            ))}
          </ul>
        </section>
        <section className="lg:w-1/2">
          <h2 className="mb-2 text-xl font-bold lg:text-2xl">Website</h2>
          <ul className="p-2">
            {Object.entries(websiteLinks).map(([key, { href }]) => (
              <li
                key={key}
                className="mb-1 flex text-sm leading-tight lg:my-1 lg:text-base lg:leading-snug"
                id={`website-${key}`}
              >
                <p className="block w-1/3">{key}</p>
                <p className="">
                  <ExternalLink href={href}>{href}</ExternalLink>
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <section className="my-4 space-y-8 md:my-12 lg:my-16">
        <h2 className="text-xl font-bold lg:text-2xl">Miscellaneousness</h2>
        <ul>
          {Object.entries(miscellaneousness).map(([field, resources]) => (
            <li key={field}>
              <section className="my-4 space-y-4 lg:my-12">
                <h3 className="font-semibold lg:text-xl">{field}</h3>
                <ul className="my-2 space-y-8">
                  {Object.entries(resources).map(([key, data]) => (
                    <li
                      key={key}
                      className="my-2 w-full border-t py-1 lg:my-4 lg:flex"
                      id={`misc-${field}-${key}`}
                    >
                      <h4 className="truncate pr-4 lg:w-1/3">{key}</h4>
                      <ul className="flex flex-col p-1 text-sm lg:w-2/3 lg:text-base">
                        {data.map(({ title, href, name }) => (
                          <li key={title + href}>
                            <ExternalLink
                              href={href}
                              className="flex text-sm lg:mb-1 lg:text-base"
                            >
                              <p className="mr-2 truncate lg:mr-4">
                                {name ? `${title} :` : title}
                              </p>
                              {name && <p className="truncate">{name}</p>}
                            </ExternalLink>
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
};

const Container: React.FCX = function () {
  return <Component />;
};

export default Container;
