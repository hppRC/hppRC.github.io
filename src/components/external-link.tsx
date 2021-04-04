type ExternalLinkProps = {
  href: string;
};

export const ExternalLink: React.FCX<ExternalLinkProps> = ({
  children,
  className,
  href,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={href}
    className={className}
  >
    {children}
  </a>
);
