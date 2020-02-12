import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ButtonGroup, { ButtonGroupTypeMap } from '@material-ui/core/ButtonGroup';
import { makeStyles, Theme } from '@material-ui/core/styles';
import OpenInNewRounded from '@material-ui/icons/OpenInNewRounded';
import { Link as RouterLink } from '@reach/router';
import classNames from 'classnames';
import React from 'react';
import getLinkAttributes from '~/utils/getLinkAttributes';
import { NavigationType } from '~/utils/globalNavigationSource';

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
  <Box className={className} component="nav">
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

const useButtonStyles = makeStyles({
  externalIcon: { fontSize: '80%' },
  root: (footer: boolean) => ({
    fontSize: '100%',
    padding: footer ? '0 1.2rem' : '0.2rem 0.3rem'
  })
});

/**
 * NOTE: I intentionally break the form of React Functional Component
 * because `React.Fragment` between `Button` and `ButtonGroup`
 * causes Material-UI to malfunction.
 * @param variant
 */
const renderButtons = ({
  footer,
  source
}: Pick<Props, 'footer' | 'source'>): React.ReactNodeArray | undefined => {
  const { externalIcon, root } = useButtonStyles(!!footer);
  const variant: Variant = footer ? 'text' : 'contained';
  return source?.map(([href, children]) => {
    const { absolute, rel, target } = getLinkAttributes(href);
    return (
      <Button
        className={root}
        component={absolute ? 'a' : RouterLink}
        key={children}
        href={absolute ? href : undefined}
        rel={rel}
        target={target}
        to={absolute ? undefined : href}
        variant={variant}
      >
        {children}
        {absolute && (
          <span role="img" aria-label="Red Circle">
            <OpenInNewRounded className={externalIcon} />
          </span>
        )}
      </Button>
    );
  });
};

const useStyles = makeStyles((theme: Theme) => ({
  root: { '& > *': { margin: theme.spacing(0.5) } }
}));

const GlobalNavigation: React.FC<Props> = ({ className, footer, source }) => {
  const { root } = useStyles();
  return (
    <DOM className={classNames(root, className)} group={footer}>
      {renderButtons({ footer, source })}
    </DOM>
  );
};
GlobalNavigation.displayName = 'GlobalNavigation';

export default GlobalNavigation;
