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
    <li className="my-4 lg:my-4 flex flex-col lg:flex-row">
      <p className="whitespace-pre-wrap leading-tight lg:leading-snug text-xs lg:text-sm lg:w-1/3 text-gray-700 ">
        {period}
      </p>
      <div className="lg:w-2/3">
        <h3
          className={`whitespace-pre-wrap leading-tight lg:leading-snug text-sm lg:text-base ${
            bold ? `font-bold` : ``
          }`}
        >
          {relatedLink ? (
            <ExternalLink href={relatedLink}>{title}</ExternalLink>
          ) : (
            <span>{title}</span>
          )}
        </h3>
        <p className="whitespace-pre-wrap leading-tight lg:leading-snug text-xs lg:text-sm text-gray-700">
          {text}
        </p>
        {additionalHtml && (
          <div
            className="my-2 leading-tight lg:leading-snug text-xs lg:text-sm text-gray-700"
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
};
