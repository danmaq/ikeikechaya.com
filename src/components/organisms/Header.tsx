import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import ConchModal from './ConchModal';
import Conch from '~/components/atoms/Conch';
import TextLink from '~/components/atoms/TextLink';
import GlobalNavigation from '~/components/molecules/GlobalNavigation';
import { headerData, headerData2 } from '~/utils/globalNavigationSource';

export interface DOMProps {
  className?: string;
  containerClassName?: string;
  couponClassName?: string;
  gridItemClassName?: string;
  headingClassName?: string;
  logoClassName?: string;
  onClickConch?: () => void;
  onCloseModal?: () => void;
  openModal?: boolean;
}

export type Props = Pick<DOMProps, 'containerClassName'>;

export const DOM: React.FC<DOMProps> = ({
  className,
  containerClassName,
  gridItemClassName,
  headingClassName,
  logoClassName,
  onClickConch,
  onCloseModal,
  openModal,
}) => (
  <>
    <AppBar component="header" className={className} position="static">
      <Container className={containerClassName} maxWidth="md">
        <Grid alignContent="center" container justify="center">
          <Grid className={gridItemClassName} item sm={3} xs={10}>
            <h1 className={headingClassName}>
              <TextLink href="/">
                <img
                  alt="萩池々茶屋"
                  className={logoClassName}
                  role="banner"
                  src="/images/header/logo.png"
                  width={233}
                  height={52}
                />
              </TextLink>
            </h1>
          </Grid>
          <Grid className={gridItemClassName} item sm={1} xs={2}>
            <Conch action={onClickConch} />
          </Grid>
          <Grid className={gridItemClassName} item sm={8} xs={12}>
            <Grid alignContent="center" container justify="center">
              <Grid className={gridItemClassName} item sm={8} xs={12}>
                <GlobalNavigation source={headerData} />
              </Grid>
              <Grid
                className={gridItemClassName}
                item
                sm={4}
                xs={12}
                style={{ textAlign: 'right' }}
              >
                <GlobalNavigation source={headerData2} />
              </Grid>
            </Grid>
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
    backgroundImage: 'url("/images/header/bg.jpg")',
    backgroundSize: 'contain',
    fontSize: '110%',
    padding: '1.2rem 0 1.2rem',
  },
}));

export const Header: React.FC<Props> = ({ containerClassName }) => {
  const { coupon, gridItem, heading, logo, root } = useHeaderStyles();
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <DOM
      className={root}
      containerClassName={containerClassName}
      couponClassName={coupon}
      gridItemClassName={gridItem}
      headingClassName={heading}
      logoClassName={logo}
      onClickConch={React.useCallback(() => setOpenModal((v) => !v), [])}
      onCloseModal={React.useCallback(() => setOpenModal(false), [])}
      openModal={openModal}
    />
  );
};
Header.displayName = 'Header';

export default Header;
