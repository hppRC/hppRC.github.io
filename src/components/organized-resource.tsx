import { ExternalLink } from 'src/components';
import { Resource } from 'src/types';

type InnerProps = {
  resource: Resource;
  bold?: boolean;
};

export const OrganizedResource: React.FCX<InnerProps> = ({ resource: { title, period, text, relatedLink }, bold }) => (
  <li className='mb-2 lg:my-4 flex flex-col lg:flex-row'>
    <p className='text-gray-700 text-xs lg:text-sm lg:w-1/3'>{period}</p>
    <div className='lg:w-2/3'>
      <h3 className={`leading-tight lg:leading-snug lg:text-lg ${bold ? `font-bold` : ``}`}>
        {relatedLink ? <ExternalLink href={relatedLink}>{title}</ExternalLink> : <>{title}</>}
      </h3>
      {text && <p className='text-xs lg:text-sm text-gray-700'>{text}</p>}
    </div>
  </li>
);

type Props = {
  resources: ReadonlyArray<Resource>;
  bold?: boolean;
};

export const OrganizedResources: React.FCX<Props> = ({ resources, className, bold }) => (
  <ul className={`p-1 lg:p-2 ${className}`}>
    {resources.map((resource) => (
      <OrganizedResource resource={resource} key={resource.title + resource.period} bold={bold} />
    ))}
  </ul>
);
