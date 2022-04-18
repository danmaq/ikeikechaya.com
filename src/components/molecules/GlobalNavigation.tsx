import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import type { ButtonGroupTypeMap } from '@material-ui/core/ButtonGroup';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import type { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from '@reach/router';
import classNames from 'classnames';
import React from 'react';
import getLinkAttributes from '~/utils/getLinkAttributes';
import type { NavigationType } from '~/utils/globalNavigationSource';
import useAllowRoute from '~/utils/useAllowRoute';

// TODO: HERE CODES ARE NOT ELEGANT, SO REFACTOR ME :/

type Variant = ButtonGroupTypeMap['props']['variant'];

export interface DOMProps {
  className?: string;
  group?: boolean;
}

export interface Props {
  className?: Parameters<typeof classNames>[number];
  footer?: boolean;
  source?: readonly NavigationType[];
}

export const DOM: React.FC<DOMProps> = ({ children, className, group }) => (
  <Box className={className} component="nav" role="navigation">
    {group ? (
      <ButtonGroup variant="text" aria-label="text primary button group">
        {children}
      </ButtonGroup>
    ) : (
      children
    )}
  </Box>
);
DOM.displayName = 'GlobalNavigation';

const useButtonStyles = makeStyles<Theme, Pick<Props, 'footer'>, 'root'>({
  root: ({ footer }) => ({
    fontSize: '100%',
    padding: footer ? '0 1.2rem' : '0.2rem 0.3rem',
  }),
});

/**
 * NOTE: I intentionally break the form of React Functional Component
 * because `React.Fragment` between `Button` and `ButtonGroup`
 * causes Material-UI to malfunction.
 *
 * @param variant
 * @param variant.footer
 * @param variant.source
 */
const useRenderButtons = ({
  footer,
  source,
}: Pick<Props, 'footer' | 'source'>): React.ReactNodeArray | undefined => {
  const { root } = useButtonStyles({ footer });
  const variant: Variant = footer ? 'text' : 'contained';
  const allowRoute = useAllowRoute();
  return source?.map(([href, children]) => {
    const { absolute, rel, target } = getLinkAttributes(href);
    const useRouter = allowRoute && !absolute;
    return (
      <Button
        className={root}
        component={useRouter ? RouterLink : 'a'}
        key={href}
        href={useRouter ? undefined : href}
        rel={rel}
        target={target}
        to={useRouter ? href : undefined}
        variant={variant}
      >
        {children}
      </Button>
    );
  });
};

const useStyles = makeStyles((theme: Theme) => ({
  root: { '& > *': { margin: theme.spacing(0.5) } },
}));

const GlobalNavigation: React.FC<Props> = ({ className, footer, source }) => {
  const { root } = useStyles();
  return (
    <DOM className={classNames(root, className)} group={footer}>
      {useRenderButtons({ footer, source })}
    </DOM>
  );
};
GlobalNavigation.displayName = 'GlobalNavigation';

export default GlobalNavigation;
