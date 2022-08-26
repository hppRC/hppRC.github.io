import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "src/components";

export const Footer: React.FC = function () {
  return (
    <footer className="pointer-events-auto mt-16 flex w-full items-center justify-center border-t p-4 text-center md:text-sm">
      <div className="text-xs">
        <div className="flex items-center justify-center">
          Copyright©2022.
          <ExternalLink
            href="https://github.com/hppRC"
            className="inline-block pl-1"
          >
            <i className="flex items-center justify-center">
              <FaGithub size={18} className="inline-block text-gray-800" />
            </i>
          </ExternalLink>
        </div>
        Developed and Designed by
        <ExternalLink href="https://twitter.com/hpp_ricecake">
          {` `}
          Hayato Tsukagoshi
          {` `}
        </ExternalLink>
      </div>
    </footer>
  );
};
