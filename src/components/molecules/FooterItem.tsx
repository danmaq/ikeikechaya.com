import React from 'react';
import type { GridSize } from '@material-ui/core/Grid';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Conch from '~/components/atoms/Conch';
import Copyright from '~/components/atoms/Copyright';

export interface DOMProps {
  className?: string;
  conchSize?: GridSize;
  mainSize?: GridSize;
}

export interface Props extends Omit<DOMProps, 'className'> {
  className?: Parameters<typeof classNames>[number];
}

export const DOM: React.FC<DOMProps> = ({
  className,
  conchSize,
  children,
  mainSize,
}) => (
  <Grid className={className} container>
    <Grid item xs={mainSize}>
      {children}
      <Copyright />
    </Grid>
    <Grid item xs={conchSize}>
      <Conch
        action="https://www.google.co.jp/search?tbm=isch&amp;q=%E6%A2%85%E8%B2%9D"
        dark
      />
    </Grid>
  </Grid>
);
DOM.displayName = 'FooterItemDOM';

const useStyles = makeStyles({ root: { paddingTop: '1rem' } });

const FooterItem: React.FC<Props> = ({
  className,
  conchSize,
  children,
  mainSize,
}) => {
  const { root } = useStyles();
  return (
    <DOM
      className={classNames(root, className)}
      conchSize={conchSize}
      mainSize={mainSize}
    >
      {children}
    </DOM>
  );
};
FooterItem.displayName = 'FooterItem';

export default FooterItem;
