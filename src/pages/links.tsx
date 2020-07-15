import { ExternalLink } from 'src/components';

const sorcialLinks = {
  GitHub: { name: `hppRC`, href: `https://github.com/hppRC` },
  Twitter: { name: `@hpp_ricecake`, href: `https://twitter.com/hpp_ricecake` },
  Qiita: { name: `hppRC`, href: `https://qiita.com/hppRC` },
  AtCoder: { name: `hpp (rate: 1139)`, href: `https://atcoder.jp/users/hpp` },
  Wantedly: { name: `Hayato Tsukagoshi`, href: `https://en-jp.wantedly.com/users/107038522` },
  connpass: { name: `hppRC`, href: `https://connpass.com/user/hppRC/` },
} as const;

const websiteLinks = {
  Portfolio: { href: `https://hpprc.com` },
  Blog: { href: `https://blog.hpprc.com` },
  'Art works': { href: `https://generative-react.hpprc.com` },
};

type MiscellaneousData = { title: string; name?: string; href: string };

const miscellaneousness: {
  [key: string]: { [key: string]: MiscellaneousData[] };
} = {
  Software: {
    // 'Portfolio site': [{ title: `hpp portfolio`, href: `https://hpprc.com` }],
    // 'Generative React': [{ title: `Generative React`, href: `https://generative-react.hpprc.com` }],
    // Blog: [{ title: `hpp blog`, href: `https://blog.hpprc.com` }],
    'LLVM based compiler for Pascal': [
      { title: `GitHub Repository`, name: `CSE3`, href: `https://github.com/hppRC/CSE3` },
    ],
  },
  Internships: {
    'CA Tech JOB (Dynalyst)': [
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
  'Contributed post': {
    'AI-SCHOLAR': [
      { title: `Author page`, href: `https://ai-scholar.tech/author/hpp` },
      {
        title: `Attentionの定説が覆る!? SYNTHESIZERが教えてくれるAttentionの可能性と未来`,
        href: `https://ai-scholar.tech/articles/transformer/attention-synthesizer`,
      },
    ],
  },
  Research: {
    'Reading club': [
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
    'Uzimaru Happy Birthday LT': [
      {
        title: `LT Slides`,
        name: `バカが取ったバイキングの皿を持って来たよ！！`,
        href: `https://docs.google.com/presentation/d/1R5dk0Rip-h6WxGVNrggpdUU1WkgvsyEDdJigsJ-yAGg/edit?usp=sharing`,
      },
      { title: `GitHub Repository`, name: `ujimaru`, href: `https://github.com/hppRC/ujimaru` },
      { title: `Twitter Account`, name: `@ujimaru0000`, href: `https://twitter.com/ujimaru0000` },
    ],
    'NGK2020S (Short LT)': [
      {
        title: `LT Slides`,
        name: `Gatsby.js 布教計画`,
        href: `https://speakerdeck.com/hpprc/gatsby-dot-jsbu-jiao-ji-hua`,
      },
      { title: `GitHub Repository`, name: `ngk2020s`, href: `https://github.com/hppRC/NGK2020S` },
    ],
  },
};

const Component: React.FCX = () => (
  <>
    <section className='my-4'>
      <h2 className='font-bold text-2xl lg:text-4xl'>Links</h2>
    </section>
    <div className='my-4 lg:my-8 flex flex-col lg:flex-row'>
      <section className='lg:w-1/2'>
        <h2 className='font-bold text-xl lg:text-2xl mb-2'>Social</h2>
        <ul className='p-2'>
          {Object.entries(sorcialLinks).map(([key, { name, href }]) => (
            <li
              key={key}
              className='leading-tight lg:leading-snug mb-1 lg:my-1 flex text-sm lg:text-base'
              id={`social-${key}`}
            >
              <p className='block w-1/3'>{key}</p>
              <p className=''>
                <ExternalLink href={href}>{name}</ExternalLink>
              </p>
            </li>
          ))}
        </ul>
      </section>
      <section className='lg:w-1/2'>
        <h2 className='font-bold text-xl lg:text-2xl mb-2'>Website</h2>
        <ul className='p-2'>
          {Object.entries(websiteLinks).map(([key, { href }]) => (
            <li
              key={key}
              className='leading-tight lg:leading-snug mb-1 lg:my-1 flex text-sm lg:text-base'
              id={`website-${key}`}
            >
              <p className='block w-1/3'>{key}</p>
              <p className=''>
                <ExternalLink href={href}>{href}</ExternalLink>
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
    <section className='my-4 lg:my-16'>
      <h2 className='font-bold text-xl lg:text-2xl'>Miscellaneousness</h2>
      <ul>
        {Object.entries(miscellaneousness).map(([field, resources]) => (
          <li key={field}>
            <section className='my-4 lg:my-12'>
              <h3 className='lg:text-xl font-semibold'>{field}</h3>
              <ul className='my-2'>
                {Object.entries(resources).map(([key, data]) => (
                  <li key={key} className='my-2 lg:my-4 lg:flex py-1 border-t w-full' id={`misc-${field}-${key}`}>
                    <h4 className='lg:w-1/3 truncate'>{key}</h4>
                    <ul className='text-sm lg:text-base flex flex-col px-1 lg:w-2/3'>
                      {data.map(({ title, href, name }) => (
                        <li key={title + href}>
                          <ExternalLink href={href} className='flex text-sm lg:text-base lg:mb-1'>
                            <p className='mr-2 lg:mr-4 truncate'>{name ? `${title} :` : title}</p>
                            {name && <p className='truncate'>{name}</p>}
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

const Container: React.FCX = () => <Component />;

export default Container;
