import { AppBar, Container, Grid, Link, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Conch from '~/components/atoms/Conch';
import GlobalNavigation from '~/components/molecules/GlobalNavigation';
import ConchModal from './ConchModal';

export interface DOMProps {
  className?: string;
  couponClassName?: string;
  logoClassName?: string;
  onClickConch?: () => void;
  onCloseModal?: () => void;
  openModal?: boolean;
}

export const DOM: React.FC<DOMProps> = ({
  className,
  couponClassName,
  logoClassName,
  onClickConch,
  onCloseModal,
  openModal
}) => (
  <>
    <AppBar component="header" className={className} position="static">
      <Container maxWidth="md">
        <Grid container>
          <Grid item xs={4}>
            <h1 className={logoClassName}>
              <RouterLink to="/">
                <img
                  alt="萩池々茶屋"
                  src="images/header/logo.png"
                  width={233}
                  height={52}
                />
              </RouterLink>
            </h1>
          </Grid>
          <Grid item xs={1}>
            <Conch action={onClickConch} />
          </Grid>
          <Grid item xs={6}>
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
            <GlobalNavigation />
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </Container>
      <ConchModal onClose={onCloseModal} open={!!openModal} />
    </AppBar>
  </>
);
DOM.displayName = 'HeaderDOM';

const useHeaderStyles = makeStyles(() => ({
  logo: { margin: 0 },
  coupon: { color: 'white', fontWeight: 700 },
  root: {
    backgroundImage: 'url("images/header/bg.jpg")',
    fontSize: '110%',
    padding: '1.2rem 0 1.2rem'
  }
}));

export const Header: React.FC = () => {
  const { logo, coupon, root } = useHeaderStyles();
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <DOM
      className={root}
      couponClassName={coupon}
      logoClassName={logo}
      onClickConch={React.useCallback(() => setOpenModal(v => !v), [])}
      onCloseModal={React.useCallback(() => setOpenModal(false), [])}
      openModal={openModal}
    />
  );
};
Header.displayName = 'Header';

export default Header;
