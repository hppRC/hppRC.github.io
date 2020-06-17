import { ExternalLink } from 'src/components';
import { Resource } from 'src/types';

type InnerProps = {
  resource: Resource;
};

export const OrganizedResource: React.FCX<InnerProps> = ({ resource: { title, period, text, relatedLink } }) => (
  <li className='my-4 flex'>
    <p className='text-sm w-1/3 text-gray-700'>{period}</p>
    <div>
      <h3 className='text-lg w-full align-top'>
        {relatedLink ? <ExternalLink href={relatedLink}>{title}</ExternalLink> : <>{title}</>}
      </h3>
      {text && <p className='text-sm text-gray-700'>{text}</p>}
    </div>
  </li>
);

type Props = {
  resources: ReadonlyArray<Resource>;
};

export const OrganizedResources: React.FCX<Props> = ({ resources }) => (
  <ul>
    {resources.map((resource) => (
      <OrganizedResource resource={resource} key={resource.title + resource.period} />
    ))}
  </ul>
);
