import Link, { LinkTypeMap } from '@material-ui/core/Link';
import { DefaultComponentProps } from '@material-ui/core/OverridableComponent';
import { Link as RouterLink } from '@reach/router';
import React from 'react';
import useLinkProps, {
  AnchorReturnType,
  RouterReturnType
} from '~/utils/useLinkProps';

export type DOMProps = Pick<
  DefaultComponentProps<LinkTypeMap>,
  'className' | 'color'
> &
  (AnchorReturnType | RouterReturnType);

export interface Props extends Pick<DOMProps, 'className' | 'color'> {
  href?: string;
}

export const DOM: React.FC<DOMProps> = ({
  children,
  className,
  color,
  rel,
  target,
  ...rest
}) => (
  <Link
    className={className}
    color={color}
    component={rest.allowRoute ? RouterLink : 'a'}
    href={rest.allowRoute ? undefined : rest.href}
    rel={rel}
    target={target}
    to={rest.allowRoute ? rest.to : undefined}
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
  const { rel, target, ...rest } = useLinkProps(href);
  return (
    <DOM
      className={className}
      color={color}
      rel={rel}
      target={target}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {children}
    </DOM>
  );
};
TextLink.displayName = 'TextLink';

export default TextLink;
