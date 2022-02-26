import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "src/components";

export const Footer: React.FC = function () {
  return (
    <footer className="flex items-center justify-center w-full text-center border-t border-grey p-4 pin-b pointer-events-auto text-sm lg:text-base">
      <div>
        Copyright©2021.
        <ExternalLink href="https://twitter.com/hpp_ricecake">
          {` `}
          Developed and Designed by Hayato Tsukagoshi{` `}
        </ExternalLink>
      </div>
      <div>
        <ExternalLink href="https://github.com/hppRC">
          <i>
            <FaGithub className="block h-10 ml-2 text-gray-800" />
          </i>
        </ExternalLink>
      </div>
    </footer>
  );
};
