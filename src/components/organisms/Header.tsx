import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from '@reach/router';
import React from 'react';
import Conch from '~/components/atoms/Conch';
import GlobalNavigation from '~/components/molecules/GlobalNavigation';
import { headerData, headerData2 } from '~/utils/globalNavigationSource';
import ConchModal from './ConchModal';

export interface DOMProps {
  className?: string;
  couponClassName?: string;
  gridItemClassName?: string;
  headingClassName?: string;
  logoClassName?: string;
  onClickConch?: () => void;
  onCloseModal?: () => void;
  openModal?: boolean;
}

export const DOM: React.FC<DOMProps> = ({
  className,
  couponClassName,
  gridItemClassName,
  headingClassName,
  logoClassName,
  onClickConch,
  onCloseModal,
  openModal
}) => (
  <>
    <AppBar component="header" className={className} position="static">
      <Container maxWidth="md">
        <Grid container alignContent="center" justify="center">
          <Grid className={gridItemClassName} item md={3} sm={4} xs={10}>
            <h1 className={headingClassName}>
              <RouterLink to="/">
                <img
                  alt="萩池々茶屋"
                  className={logoClassName}
                  src="images/header/logo.png"
                  width={233}
                  height={52}
                />
              </RouterLink>
            </h1>
          </Grid>
          <Grid className={gridItemClassName} item sm={1} xs={2}>
            <Conch action={onClickConch} />
          </Grid>
          <Grid className={gridItemClassName} item md={8} sm={7} xs={12}>
            <Link
              className={couponClassName}
              component={RouterLink}
              to="/access"
            >
              <span role="img" aria-label="Red Circle">
                🔴&nbsp;
              </span>
              お得なクーポン情報はコチラ！
            </Link>
            <GlobalNavigation source={headerData} />
            <GlobalNavigation source={headerData2} />
          </Grid>
        </Grid>
      </Container>
      <ConchModal onClose={onCloseModal} open={!!openModal} />
    </AppBar>
  </>
);
DOM.displayName = 'HeaderDOM';

const useHeaderStyles = makeStyles(() => ({
  coupon: { color: 'white', fontWeight: 700 },
  gridItem: { margin: 'auto' },
  heading: { margin: 0 },
  logo: { width: '100%', height: 'auto' },
  root: {
    backgroundImage: 'url("images/header/bg.jpg")',
    fontSize: '110%',
    padding: '1.2rem 0 1.2rem'
  }
}));

export const Header: React.FC = () => {
  const { coupon, gridItem, heading, logo, root } = useHeaderStyles();
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <DOM
      className={root}
      couponClassName={coupon}
      gridItemClassName={gridItem}
      headingClassName={heading}
      logoClassName={logo}
      onClickConch={React.useCallback(() => setOpenModal(v => !v), [])}
      onCloseModal={React.useCallback(() => setOpenModal(false), [])}
      openModal={openModal}
    />
  );
};
Header.displayName = 'Header';

export default Header;
