import React, { ReactNode } from 'react';

export type LinkProps = {
  href: string;
  className?: string;
  children?: ReactNode;
};

export const defaultLinkClass = 'underline text-bcBlueLink';

export const Link = (props: LinkProps) => {
  const { href, className, children } = props;
  return (
    <a href={href} className={className ?? defaultLinkClass} rel='noreferrer' target='_blank'>
      {children}
    </a>
  );
};
