import type { LinkTypeMap } from '@material-ui/core/Link';
import Link from '@material-ui/core/Link';
import type { DefaultComponentProps } from '@material-ui/core/OverridableComponent';
import { Link as RouterLink } from '@reach/router';
import React from 'react';
import getLinkAttributes from '~/utils/getLinkAttributes';
import useAllowRoute from '~/utils/useAllowRoute';

export interface DOMProps
  extends Pick<
    DefaultComponentProps<LinkTypeMap>,
    'className' | 'color' | 'rel' | 'target'
  > {
  allowRoute?: boolean;
  href: string;
}

export type Props = Pick<DOMProps, 'className' | 'color' | 'href'>;

export const DOM: React.FC<DOMProps> = ({
  allowRoute,
  children,
  className,
  color,
  href,
  rel,
  target,
}) => (
  <Link
    className={className}
    color={color}
    component={allowRoute ? RouterLink : 'a'}
    href={allowRoute ? undefined : href}
    rel={rel}
    target={target}
    to={allowRoute ? href : undefined}
  >
    {children}
  </Link>
);

const TextLink: React.FC<Props> = ({
  children,
  className,
  color = 'error',
  href,
}) => {
  const { absolute, rel, target } = getLinkAttributes(href);
  const allowRoute = useAllowRoute() && !absolute;
  return (
    <DOM
      allowRoute={allowRoute}
      className={className}
      color={color}
      href={href}
      rel={rel}
      target={target}
    >
      {children}
    </DOM>
  );
};
TextLink.displayName = 'TextLink';

export default TextLink;
