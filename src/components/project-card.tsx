import { ExternalLink } from "src/components";

type Props = {
  src: string;
  alt: string;
  title: string;
  text: string;
  tags: string[];
  href: string;
};

export const ProjectCard: React.FCX<Props> = function ({
  src,
  alt,
  title,
  text,
  tags,
  href,
}) {
  return (
    <div className="overflow-hidden rounded shadow-lg xl:max-w-sm">
      <ExternalLink href={href} className="block h-full w-full">
        <>
          <img
            src={src}
            width={384}
            height={225}
            className="w-full"
            alt={alt}
          />
          <section className="px-3 py-2 lg:px-6 lg:py-4">
            <h3 className="mb-2 text-lg font-bold text-gray-800 lg:text-xl">
              {title}
            </h3>
            <p className="text-sm text-gray-900 lg:text-base">{text}</p>
          </section>
          <ul className="p-3 lg:px-6 lg:py-4">
            {tags.map((tag) => (
              <li
                key={tag}
                className="mr-2 inline-block bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700"
              >
                {tag}
              </li>
            ))}
          </ul>
        </>
      </ExternalLink>
    </div>
  );
};
