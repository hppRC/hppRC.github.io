type ExternalLinkProps = {
  href: string;
  children?: React.ReactNode | string;
};

export const ExternalLink: React.FCX<ExternalLinkProps> = function ({
  children,
  className,
  href,
}) {
  return (
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
};
