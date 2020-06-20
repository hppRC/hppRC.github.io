import { OrganizedResources } from 'src/components';
import { Resource } from 'src/types';

type Props = {
  resources: ReadonlyArray<Resource>;
  title: string;
  bold?: boolean;
};

export const ResourcesSection: React.FCX<Props> = ({ resources, title, className, bold }) => (
  <section className={`my-4 lg:my-8 ${className}`}>
    <h2 className='font-bold text-xl lg:text-2xl'>{title}</h2>
    <OrganizedResources resources={resources} bold={bold} />
  </section>
);
