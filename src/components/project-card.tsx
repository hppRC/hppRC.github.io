import Image from "next/image";
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
    <div className="xl:max-w-sm rounded overflow-hidden shadow-lg">
      <ExternalLink href={href} className="block w-full h-full">
        <Image
          src={src}
          width={384}
          height={225}
          className="w-full"
          alt={alt}
        />
        <section className="px-3 py-2 lg:px-6 lg:py-4">
          <h3 className="font-bold text-lg lg:text-xl text-gray-800 mb-2">
            {title}
          </h3>
          <p className="text-sm lg:text-base text-gray-900">{text}</p>
        </section>
        <ul className="p-3 lg:px-6 lg:py-4">
          {tags.map((tag) => (
            <li
              key={tag}
              className="inline-block bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700 mr-2"
            >
              {tag}
            </li>
          ))}
        </ul>
      </ExternalLink>
    </div>
  );
};
