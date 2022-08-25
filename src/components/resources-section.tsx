import { OrganizedResources } from "src/components";

type Props = {
  resources: ReadonlyArray<Resource>;
  title: string;
  bold?: boolean;
};

export const ResourcesSection: React.FCX<Props> = function ({
  resources,
  title,
  className,
  bold,
}) {
  return (
    <section className={`my-8 lg:my-16 ${className}`}>
      <h2 className="text-xl font-bold lg:text-2xl">{title}</h2>
      <OrganizedResources resources={resources} bold={bold} />
    </section>
  );
};
