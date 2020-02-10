import React from 'react';
import {
  Container,
  Divider,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';
import Conch from '~/components/atoms/Conch';
import GlobalNavigation from '~/components/molecules/GlobalNavigation';

const useStyles = makeStyles({
  copy: { fontSize: '100%' },
  innerContainer: { paddingTop: '1rem' }
});

export const Footer: React.FC = () => {
  const { copy, innerContainer } = useStyles();
  return (
    <Container component="footer" maxWidth="md">
      <Divider />
      <Grid className={innerContainer} container>
        <Grid item xs={10}>
          <GlobalNavigation footer />
          <Typography className={copy}>
            Copyright © 2011 daigoryoeimaru Co.,Ltd. All rights reserved.
            <wbr />
            Original designed by Mattsun.
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Conch
            action="https://www.google.co.jp/search?tbm=isch&amp;q=%E6%A2%85%E8%B2%9D"
            dark
          />
        </Grid>
      </Grid>
    </Container>
  );
};
Footer.displayName = 'Footer';

export default Footer;
