/* eslint-disable react/no-danger */
import { ExternalLink } from "src/components";

type InnerProps = {
  resource: Resource;
  bold?: boolean;
};

export const OrganizedResource: React.FCX<InnerProps> = function ({
  resource: { title, period, text, relatedLink, additionalHtml },
  bold,
}) {
  return (
    <li className="my-4 flex flex-col lg:my-4 lg:flex-row">
      <p className="whitespace-pre-wrap text-xs leading-tight text-gray-700 lg:w-1/3 lg:text-sm lg:leading-snug ">
        {period}
      </p>
      <div className="lg:w-2/3">
        <h3
          className={`whitespace-pre-wrap text-sm leading-tight lg:text-base lg:leading-snug ${
            bold && `font-bold`
          }`}
        >
          {relatedLink ? (
            <ExternalLink href={relatedLink}>{title}</ExternalLink>
          ) : (
            <span>{title}</span>
          )}
        </h3>
        <p className="whitespace-pre-wrap text-xs leading-tight text-gray-700 lg:text-sm lg:leading-snug">
          {text}
        </p>
        {additionalHtml && (
          <div
            className="my-2 text-xs leading-tight text-gray-700 lg:text-sm lg:leading-snug"
            dangerouslySetInnerHTML={{
              __html: additionalHtml,
            }}
          />
        )}
      </div>
    </li>
  );
};

type Props = {
  resources: ReadonlyArray<Resource>;
  bold?: boolean;
};

export const OrganizedResources: React.FCX<Props> = function ({
  resources,
  className,
  bold,
}) {
  return (
    <ul className={`p-2 lg:p-4 ${className} space-y-8`}>
      {resources.map((resource) => (
        <OrganizedResource
          resource={resource}
          key={resource.title + resource.period}
          bold={bold}
        />
      ))}
    </ul>
  );
};
