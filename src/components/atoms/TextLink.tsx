import Link, { LinkTypeMap } from '@material-ui/core/Link';
import { DefaultComponentProps } from '@material-ui/core/OverridableComponent';
import { Link as RouterLink } from '@reach/router';
import classNames from 'classnames';
import React from 'react';
import getLinkAttributes from '~/utils/getLinkAttributes';

export interface DOMProps
  extends Pick<
    DefaultComponentProps<LinkTypeMap>,
    'className' | 'color' | 'href' | 'rel' | 'target'
  > {
  absolute?: boolean;
}

export interface Props extends Pick<DOMProps, 'color' | 'href'> {
  className?: Parameters<typeof classNames>[number];
}

export const DOM: React.FC<DOMProps> = ({
  absolute,
  children,
  className,
  color,
  href,
  rel,
  target
}) =>
  absolute ? (
    <Link
      className={className}
      color={color}
      href={href}
      rel={rel}
      target={target}
    >
      {children}
    </Link>
  ) : (
    <Link
      className={className}
      component={RouterLink}
      color={color}
      to={href ?? '/'}
    >
      {children}
    </Link>
  );

const TextLink: React.FC<Props> = ({
  children,
  className,
  color = 'error',
  href
}) => {
  const { absolute, rel, target } = getLinkAttributes(href ?? '');
  return (
    <DOM
      absolute={absolute}
      className={classNames(className)}
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
