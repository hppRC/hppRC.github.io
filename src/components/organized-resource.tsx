import { ExternalLink } from "src/components";

type InnerProps = {
  resource: Resource;
  bold?: boolean;
};

export const OrganizedResource: React.FCX<InnerProps> = ({
  resource: { title, period, text, relatedLink },
  bold,
}) => (
  <li className="my-4 lg:my-4 flex flex-col lg:flex-row">
    <p className="leading-tight lg:leading-snug text-xs lg:text-sm lg:w-1/3 text-gray-700 ">
      {period}
    </p>
    <div className="lg:w-2/3">
      <h3
        className={`leading-tight lg:leading-snug text-sm lg:text-base ${
          bold ? `font-bold` : ``
        }`}
      >
        {relatedLink ? (
          <ExternalLink href={relatedLink}>{title}</ExternalLink>
        ) : (
          <>{title}</>
        )}
      </h3>
      <p className="leading-tight lg:leading-snug text-xs lg:text-sm text-gray-700">
        {text}
      </p>
    </div>
  </li>
);

type Props = {
  resources: ReadonlyArray<Resource>;
  bold?: boolean;
};

export const OrganizedResources: React.FCX<Props> = ({
  resources,
  className,
  bold,
}) => (
  <ul className={`p-2 lg:p-4 ${className}`}>
    {resources.map((resource) => (
      <OrganizedResource
        resource={resource}
        key={resource.title + resource.period}
        bold={bold}
      />
    ))}
  </ul>
);
