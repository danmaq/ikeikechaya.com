import { AnchorProps, LinkProps } from '@reach/router';
import getLinkAttributes from './getLinkAttributes';
import useAllowRoute from './useAllowRoute';

type BaseType = Pick<AnchorProps, 'rel' | 'target'>;

export interface AnchorReturnType extends BaseType {
  allowRoute: false;
  href?: string;
}

export interface RouterReturnType extends BaseType {
  allowRoute: true;
  to: LinkProps<unknown>['to'];
}

export default (href?: string) => {
  const { absolute, rel, target } = getLinkAttributes(href ?? '');
  const allowRoute = useAllowRoute() && !absolute;
  const common = { allowRoute, rel, target };
  return allowRoute
    ? ({ to: href ?? '/', ...common } as RouterReturnType)
    : ({ href, ...common } as AnchorReturnType);
};
