import { ExternalLink } from 'src/components';

const links = {
  GitHub: `https://github.com/hppRC`,
  Twitter: `https://twitter.com/hpp_ricecake`,
  Qiita: `https://qiita.com/hppRC`,
  AtCoder: `https://atcoder.jp/users/hpp`,
  'Lab Homepage': `http://cr.fvcrc.i.nagoya-u.ac.jp/`,
};

const resources = {
  NGK2020S: `https://speakerdeck.com/hpprc/gatsby-dot-jsbu-jiao-ji-hua`,
  'Ujimaru(slides)': `https://docs.google.com/presentation/d/1R5dk0Rip-h6WxGVNrggpdUU1WkgvsyEDdJigsJ-yAGg/edit?usp=sharing`,
};

const Component: React.FCX = () => (
  <main className='flex flex-col'>
    <h1 className='font-bold text-4xl'>Links</h1>
    <section>
      <h2 className=''>Related Links</h2>
      <ul>
        {Object.entries(links).map(([key, href]) => (
          <li key={key}>
            <ExternalLink href={href}>{key}</ExternalLink>
          </li>
        ))}
      </ul>
    </section>
    <section>
      <h2 className=''>Resources</h2>
      <ul>
        {Object.entries(resources).map(([key, href]) => (
          <li key={key}>
            <ExternalLink href={href}>{key}</ExternalLink>
          </li>
        ))}
      </ul>
    </section>
  </main>
);

const Container: React.FCX = () => <Component />;

export default Container;
