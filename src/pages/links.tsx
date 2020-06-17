import { ExternalLink } from 'src/components';

const sorcialLinks = {
  GitHub: { name: `hppRC`, href: `https://github.com/hppRC` },
  Twitter: { name: `@hpp_ricecake`, href: `https://twitter.com/hpp_ricecake` },
  Qiita: { name: `hppRC`, href: `https://qiita.com/hppRC` },
  AtCoder: { name: `hpp`, href: `https://atcoder.jp/users/hpp` },
  Wantedly: { name: `Hayato Tsukagoshi`, href: `https://en-jp.wantedly.com/users/107038522` },
};

type MiscellaneousData = { title: string; name?: string; href: string };

const miscellaneousness: { [key: string]: MiscellaneousData[] } = {
  'Uzimaru Happy Birthday LT': [
    {
      title: `LT Slides`,
      name: `バカが取ったバイキングの皿を持って来たよ！！`,
      href: `https://docs.google.com/presentation/d/1R5dk0Rip-h6WxGVNrggpdUU1WkgvsyEDdJigsJ-yAGg/edit?usp=sharing`,
    },
    { title: `GitHub Repository`, name: `ujimaru`, href: `https://github.com/hppRC/ujimaru` },
    { title: `Twitter Account`, name: `@ujimaru0000`, href: `https://twitter.com/ujimaru0000` },
  ],
  'Cyber Agent Internship (Dynalyst)': [
    {
      title: `Presentaion Slides of internship`,
      name: `CA Tech JOB 成果発表 公開版`,
      href: `https://docs.google.com/presentation/d/1o8TEOKGt89REdpD0KHM0pfb-yJcIgJcoiMJNUOqa1lY/edit?usp=sharing`,
    },
    {
      title: `Contributed blog post`,
      name: `DynamoDB Streamsを用いたAkka Streamsによるキャッシュ処理の実装とDynalystでのインターン`,
      href: `https://developers.cyberagent.co.jp/blog/archives/25747/`,
    },
  ],
  'NGK2020S (Short LT)': [
    {
      title: `LT Slides`,
      href: `https://speakerdeck.com/hpprc/gatsby-dot-jsbu-jiao-ji-hua`,
    },
    { title: `GitHub Repository`, name: `ngk2020s`, href: `https://github.com/hppRC/NGK2020S` },
  ],
  'LLVM based compiler for Pascal': [
    { title: `GitHub Repository`, name: `CSE3`, href: `https://github.com/hppRC/CSE3` },
  ],
};

const Component: React.FCX = () => (
  <>
    <section className='py-4'>
      <h1 className='font-bold text-4xl'>Links</h1>
    </section>
    <section className='py-4'>
      <h2 className='font-bold text-2xl mb-2'>Social</h2>
      <ul>
        {Object.entries(sorcialLinks).map(([key, { name, href }]) => (
          <li key={key} className='my-1 flex'>
            <p className='block w-1/12'>{key}</p>
            <p>
              <ExternalLink href={href}>{name}</ExternalLink>
            </p>
          </li>
        ))}
      </ul>
    </section>
    <section className='py-4'>
      <h2 className='font-bold text-2xl mb-2'>Miscellaneousness</h2>
      <ul>
        {Object.entries(miscellaneousness).map(([key, data]) => (
          <li key={key} className='my-4 flex py-1 border-t'>
            <h3 className='text-lg w-1/3'>{key}</h3>
            <div className='flex flex-col w-full'>
              {data.map(({ title, href, name }) => (
                <ExternalLink href={href} key={title + href} className='flex mb-1'>
                  <p className='mr-4'>{name ? `${title} :` : title}</p>
                  {name && <p>{name}</p>}
                </ExternalLink>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  </>
);

const Container: React.FCX = () => <Component />;

export default Container;
