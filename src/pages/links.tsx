import { ExternalLink } from 'src/components';

const links = {
  GitHub: `https://github.com/hppRC`,
  Twitter: `https://twitter.com/hpp_ricecake`,
  Qiita: `https://qiita.com/hppRC`,
  AtCoder: `https://atcoder.jp/users/hpp`,
};

const resources = {
  NGK2020S: [
    {
      title: `LT Slides`,
      href: `https://speakerdeck.com/hpprc/gatsby-dot-jsbu-jiao-ji-hua`,
    },
    { title: `GitHub Repository`, href: `https://github.com/hppRC/NGK2020S` },
  ],
  'Ujimaru(slides)': [
    {
      title: `LT Slides`,
      href: `https://docs.google.com/presentation/d/1R5dk0Rip-h6WxGVNrggpdUU1WkgvsyEDdJigsJ-yAGg/edit?usp=sharing`,
    },
    { title: `GitHub Repository`, href: `https://github.com/hppRC/ujimaru` },
    { title: `Twitter Account`, href: `https://twitter.com/ujimaru0000` },
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
        {Object.entries(links).map(([key, href]) => (
          <li key={key} className='my-1'>
            <ExternalLink href={href}>{key}</ExternalLink>
          </li>
        ))}
      </ul>
    </section>
    <section className='py-4'>
      <h2 className='font-bold text-2xl mb-2'>Resources</h2>
      <ul>
        {Object.entries(resources).map(([key, hrefs]) => (
          <li key={key} className='my-4 flex py-1 border-t'>
            <h3 className='text-lg w-1/3'>{key}</h3>
            <div className='flex flex-col'>
              {hrefs.map(({ title, href }) => (
                <ExternalLink href={href} key={title + href}>
                  {title}
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
