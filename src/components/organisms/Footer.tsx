import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Conch from '~/components/atoms/Conch';
import GlobalNavigation from '~/components/molecules/GlobalNavigation';
import { footerData } from '~/utils/globalNavigationSource';

const useStyles = makeStyles({
  copy: { fontSize: '100%' },
  divider: { border: '1px solid rgb(217, 217, 217)', margin: 0 },
  innerContainer: { paddingTop: '1rem' }
});

export const Footer: React.FC = () => {
  const { copy, divider, innerContainer } = useStyles();
  const conch = (
    <Conch
      action="https://www.google.co.jp/search?tbm=isch&amp;q=%E6%A2%85%E8%B2%9D"
      dark
    />
  );
  const copyright = (
    <Typography className={copy} role="contentinfo">
      Copyright © 2011 daigoryoeimaru Co.,Ltd. All rights reserved.
      <wbr />
      Original designed by Mattsun.
    </Typography>
  );
  const nav = <GlobalNavigation footer source={footerData} />;
  return (
    <Container component="footer" maxWidth="md">
      <hr className={divider} />
      <Hidden only="xs">
        <Grid className={innerContainer} container>
          <Grid item xs={11}>
            {nav}
            {copyright}
          </Grid>
          <Grid item xs={1}>
            {conch}
          </Grid>
        </Grid>
      </Hidden>
      <Hidden smUp>
        {nav}
        <Grid className={innerContainer} container>
          <Grid item xs={10}>
            {copyright}
          </Grid>
          <Grid item xs={2}>
            {conch}
          </Grid>
        </Grid>
      </Hidden>
    </Container>
  );
};
Footer.displayName = 'Footer';

export default Footer;
