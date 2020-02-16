import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import React from 'react';
import FooterItem from '~/components/molecules/FooterItem';
import GlobalNavigation from '~/components/molecules/GlobalNavigation';
import { footerData } from '~/utils/globalNavigationSource';

export interface DOMProps {
  className?: string;
  lineClassName?: string;
}

export interface Props {
  className?: Parameters<typeof classNames>[number];
}

export const DOM: React.FC<DOMProps> = ({
  children,
  className,
  lineClassName
}) => (
  <Container className={className} component="footer" maxWidth="md">
    <hr className={lineClassName} />
    <Hidden only="xs">
      <FooterItem conchSize={1} mainSize={11}>
        {children}
      </FooterItem>
    </Hidden>
    <Hidden smUp>
      {children}
      <FooterItem conchSize={2} mainSize={10} />
    </Hidden>
  </Container>
);
DOM.displayName = 'FooterDOM';

const useStyles = makeStyles({
  divider: { border: '1px solid rgb(217, 217, 217)', margin: 0 },
  root: { paddingBottom: 'env(safe-area-inset-bottom)' }
});

export const Footer: React.FC<Props> = ({ className }) => {
  const { divider, root } = useStyles();
  return (
    <DOM className={classNames(root, className)} lineClassName={divider}>
      <GlobalNavigation footer source={footerData} />
    </DOM>
  );
};
Footer.displayName = 'Footer';

export default Footer;
